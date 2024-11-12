export const Input = ({ className, ...props }: { className?: string }) => {
    return (
      <input
        className={`px-4 py-2 rounded-lg border focus:outline-none ${className || ''}`}
        {...props}
      />
    );
  };
  