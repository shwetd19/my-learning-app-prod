export const Button = ({ children, className, ...props }: { children: React.ReactNode; className?: string; [key: string]: any }) => {
    return (
      <button
        className={`px-4 py-2 rounded-lg focus:outline-none ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  