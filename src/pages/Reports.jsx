import { useEffect, useRef } from 'react';
import { Download, FileText, FileSpreadsheet } from 'lucide-react';

const Reports = () => {
  const chartRef = useRef(null);

  const mockData = {
    labels: ['Math', 'Science', 'History', 'English', 'Art'],
    datasets: [
      {
        label: 'Completion Rate (%)',
        data: [75, 60, 85, 50, 90],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Course Completion Rates',
      },
    },
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Course', 'Completion Rate (%)'],
      ...mockData.labels.map((label, index) => [label, mockData.datasets[0].data[index]])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'course_completion_rates.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToPDF = () => {
    const canvas = chartRef.current;
    if (!canvas) return;

    const imgData = canvas.toDataURL('image/png');
    const pdf = new window.jspdf.jsPDF();
    pdf.addImage(imgData, 'PNG', 10, 10, 180, 100);
    pdf.save('course_completion_rates.pdf');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Reports</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-end mb-4 space-x-2">
          <button
            onClick={exportToCSV}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <FileSpreadsheet className="mr-2 h-4 w-4" />
            Export CSV
          </button>
          <button
            onClick={exportToPDF}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <FileText className="mr-2 h-4 w-4" />
            Export PDF
          </button>
        </div>
        <canvas ref={chartRef} width="400" height="200"></canvas>
      </div>
    </div>
  );
};

export default Reports;
