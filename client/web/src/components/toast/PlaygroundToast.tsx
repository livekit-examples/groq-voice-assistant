export type ToastType = "error" | "success" | "info";
export type ToastProps = {
  message: string;
  type: ToastType;
  onDismiss: () => void;
};

export const PlaygroundToast = ({ message, type, onDismiss }: ToastProps) => {
  const color =
    type === "error" ? "red" : type === "success" ? "green" : "amber";
  return (
    <div
      className={`absolute text-sm break-words px-4 pr-12 py-2 bg-${color}-950 rounded-sm border border-${color}-800 text-${color}-400 top-4 left-4 right-4`}
    >
      <button
        className={`absolute right-2 border border-transparent rounded-md px-2 hover:bg-${color}-900 hover:text-${color}-300`}
        onClick={onDismiss}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
            fill="currentColor"
          />
        </svg>
      </button>
      {message}
    </div>
  );
};
