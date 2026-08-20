import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Search, Filter, ChevronRight } from 'lucide-react';
import List from '../components/List';
import { subjects, homework } from '../mocks/homework';

const fetchHomework = async ({ pageParam = 0, queryKey }) => {
  const [_, { search, subject }] = queryKey;
  const start = pageParam * 10;
  const end = start + 10;

  let filteredHomework = homework;

  if (search) {
    filteredHomework = filteredHomework.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subject.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (subject) {
    filteredHomework = filteredHomework.filter(item =>
      item.subject.toLowerCase() === subject.toLowerCase()
    );
  }

  return {
    data: filteredHomework.slice(start, end),
    nextPage: filteredHomework.length > end ? pageParam + 1 : undefined,
  };
};

const HomeworkSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [subjectFilter, setSubjectFilter] = useState(searchParams.get('subject') || '');

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (subjectFilter) params.set('subject', subjectFilter);
    setSearchParams(params);
  }, [search, subjectFilter, setSearchParams]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['homework', { search, subject: subjectFilter }],
    queryFn: fetchHomework,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubjectFilter = (subject) => {
    setSubjectFilter(subject === subjectFilter ? '' : subject);
  };

  const renderHomeworkItem = (item) => (
    <div className="bg-surface p-6 rounded-xl border border-outline-variant/10 shadow-sm active:scale-[0.98] transition-all cursor-pointer">
      <div className={`w-10 h-10 rounded-lg bg-${item.color}/10 text-${item.color} flex items-center justify-center mb-4`}>
        <span className="material-symbols-outlined">{item.icon}</span>
      </div>
      <h3 className="font-heading-md text-on-surface mb-1">{item.title}</h3>
      <p className="font-label-sm text-text-secondary">{item.subject} - {item.dueDate}</p>
    </div>
  );

  return (
    <main className="px-margin-mobile space-y-8 mt-2">
      <section className="relative">
        <div className="flex items-center bg-surface w-full rounded-full px-6 py-3.5 shadow-sm border border-outline-variant/30 group focus-within:ring-2 focus-within:ring-primary/20 transition-all">
          <Search className="text-outline mr-3" />
          <input
            className="bg-transparent border-none focus:ring-0 w-full font-body-base text-on-surface placeholder:text-outline-variant"
            placeholder="Search"
            type="text"
            value={search}
            onChange={handleSearchChange}
          />
          <button className="ml-2 text-on-surface-variant hover:text-primary transition-colors">
            <Filter />
          </button>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-headline-md text-on-surface">Subjects</h2>
          <a className="text-primary font-label-sm hover:underline" href="#">See all</a>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className={`flex items-center gap-2 bg-${subject.color}/10 text-${subject.color} px-4 py-2 rounded-full whitespace-nowrap active:scale-95 transition-transform cursor-pointer ${subjectFilter === subject.name ? 'ring-2 ring-primary' : ''}`}
              onClick={() => handleSubjectFilter(subject.name)}
            >
              <span className="material-symbols-outlined text-[18px]">{subject.icon}</span>
              <span className="font-label-sm">{subject.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-headline-md text-on-surface">Homework</h2>
          <a className="text-primary font-label-sm hover:underline" href="#">See all</a>
        </div>
        <List
          items={data?.pages.flatMap(page => page.data) || []}
          renderItem={renderHomeworkItem}
          onLoadMore={hasNextPage ? fetchNextPage : undefined}
          isLoading={isFetchingNextPage}
        />
      </section>
    </main>
  );
};

export default HomeworkSearch;
