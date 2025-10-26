import React from 'react';

// This component receives props from React Joyride
export const TourTooltip = ({
  continuous,
  index,
  step,
  size,
  backProps,
  closeProps,
  primaryProps,
  tooltipProps,
}) => (
  <div
    {...tooltipProps}
    className="bg-white shadow-lg rounded-lg p-5 w-72 text-gray-700"
  >
    {/* Step Content */}
    <div className="mb-4 text-sm">
      {step.content}
    </div>

    {/* Buttons */}
    <div className="flex justify-between items-center">
      {/* "Back" button (only show if it's not the first step) */}
      <div>
        {index > 0 && (
          <button
            {...backProps}
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            Back
          </button>
        )}
      </div>

      {/* "Next" / "Close" buttons */}
      <div className="flex gap-2">
        {/* "Close" button (shows on all steps if 'continuous' is false) */}
        {!continuous && (
          <button
            {...closeProps}
            className="text-sm py-2 px-4 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            Close
          </button>
        )}

        {/* "Next" or "Last" button */}
        <button
          {...primaryProps}
          className="text-sm py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          {continuous ? (index === size - 1 ? 'Finish' : 'Next') : 'Close'}
        </button>
      </div>
    </div>
  </div>
);