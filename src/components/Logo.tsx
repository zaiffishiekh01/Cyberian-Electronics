export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="20" fill="#4338ca" />
        <path
          d="M30 70C30 53.4315 43.4315 40 60 40H70V50C70 66.5685 56.5685 80 40 80H30V70Z"
          fill="white"
        />
        <rect x="30" y="20" width="40" height="10" fill="white" />
        <rect x="30" y="40" width="30" height="10" fill="white" />
        <rect x="30" y="60" width="20" height="10" fill="white" />
      </svg>
    )
  }