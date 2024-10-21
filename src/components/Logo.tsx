import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="https://i.imgur.com/8OgCsEA.png" // Ensure the URL is correct and accessible
        alt="Cyberian Electronics Logo"
        width={40}
        height={40}
        layout="fixed" // This ensures the image uses the provided width and height without responsive scaling
      />
      <span className="text-xl font-bold text-gray-900 dark:text-white">Cyberian Electronics</span>
    </div>
  );

}
