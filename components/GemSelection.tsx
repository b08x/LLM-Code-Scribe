
import React from 'react';

interface GemSelectionProps {
  allGems: string[];
  selectedGems: Set<string>;
  onToggleGem: (gem: string) => void;
  onToggleAll: () => void;
  isLoading: boolean;
}

export const GemSelection: React.FC<GemSelectionProps> = ({ allGems, selectedGems, onToggleGem, onToggleAll, isLoading }) => {
  const isAllSelected = allGems.length > 0 && selectedGems.size === allGems.length;
  
  return (
    <div className="mt-6 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <div>
            <h2 className="text-2xl font-semibold text-indigo-400">3. Select Gems</h2>
            <p className="text-slate-400 mt-1">
                Choose which gems to include in the knowledge base. {selectedGems.size} of {allGems.length} selected.
            </p>
        </div>
        <button
          onClick={onToggleAll}
          disabled={isLoading}
          className="px-4 py-2 text-sm font-semibold text-slate-200 bg-slate-700 rounded-md hover:bg-slate-600 transition-colors disabled:opacity-50"
        >
          {isAllSelected ? 'Deselect All' : 'Select All'}
        </button>
      </div>
      
      <div className="max-h-60 overflow-y-auto p-4 bg-slate-900 rounded-md border border-slate-700/50 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {allGems.map(gem => (
          <label key={gem} className="flex items-center space-x-3 p-2 rounded-md bg-slate-800/50 hover:bg-slate-700/50 transition-colors cursor-pointer">
            <input
              type="checkbox"
              checked={selectedGems.has(gem)}
              onChange={() => onToggleGem(gem)}
              disabled={isLoading}
              className="h-5 w-5 rounded bg-slate-700 border-slate-600 accent-cyan-500 focus:ring-cyan-500 cursor-pointer shrink-0"
            />
            <span className="text-slate-300 select-none truncate" title={gem}>{gem}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
