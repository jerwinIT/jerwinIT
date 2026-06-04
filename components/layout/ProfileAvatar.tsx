import Image from "next/image";

interface ProfileAvatarProps {
  isDarkMode: boolean;
  name: string;
}

/**
 * Crossfades between a dark-mode and light-mode profile image.
 */
export function ProfileAvatar({ isDarkMode, name }: ProfileAvatarProps) {
  return (
    <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-primary/10">
      {/* Dark mode image */}
      <Image
        src="/images/profile-darkmode.png"
        alt={name}
        fill
        sizes="96px"
        className={`object-cover object-center transition-opacity duration-700 ease-out ${
          isDarkMode ? "opacity-100" : "opacity-0"
        }`}
        priority
      />
      {/* Light mode image */}
      <Image
        src="/images/profile-lightmode.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="96px"
        className={`object-cover object-center transition-opacity duration-700 ease-out ${
          isDarkMode ? "opacity-0" : "opacity-100"
        }`}
        priority
      />
    </div>
  );
}
