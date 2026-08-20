import { Check } from 'lucide-react';

const ModuleList = ({ modules, onToggleModule }) => {
  return (
    <div className="border-t border-gray-200 p-4">
      <h3 className="text-lg font-medium mb-3">Course Modules</h3>
      <ul className="space-y-2">
        {modules.map(module => (
          <li key={module.id} className="flex items-center">
            <button
              onClick={() => onToggleModule(module.id)}
              className={`flex items-center justify-center w-5 h-5 rounded-full border-2 mr-3 ${
                module.completed ? 'bg-blue-600 border-blue-600' : 'border-gray-400'
              }`}
            >
              {module.completed && <Check className="text-white" size={12} />}
            </button>
            <span className={module.completed ? 'line-through text-gray-500' : ''}>
              {module.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModuleList;
