import { SocialIcon } from 'react-social-icons';

export default function Socials() {
  const iconSize = "w-8 h-8 flex items-center justify-center";

  return (
    <div className="flex gap-1.5">
      <div className={iconSize}>
        <SocialIcon
          network="spotify"
          bgColor="white"
          fgColor="black"
          href="https://open.spotify.com/artist/3qdY9gVyV0KChva0f7VdA8?si=uDItZGXiQaCEgd-2-Qn9xA"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
      <div className={iconSize}>
        <SocialIcon
          network="itunes"
          bgColor="white"
          fgColor="black"
          href="https://music.apple.com/us/artist/thisisgoodman/1275784818"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
      <div className={iconSize}>
        <SocialIcon
          network="instagram"
          bgColor="white"
          fgColor="black"
          href="https://www.instagram.com/thisisgoodman"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
      <div className={iconSize}>
        <SocialIcon
          network="soundcloud"
          bgColor="white"
          fgColor="black"
          href="https://soundcloud.com/thisisgoodman"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
      <div className={iconSize}>
        <SocialIcon
          network="facebook"
          bgColor="white"
          fgColor="black"
          href="https://www.facebook.com/thisisgoodman"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
      <div className={iconSize}>
        <SocialIcon
          network="tiktok"
          bgColor="white"
          fgColor="black"
          href="https://www.tiktok.com/@thisisgoodmanmusic"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
      <div className={iconSize}>
        <SocialIcon
          network="threads"
          bgColor="white"
          fgColor="black"
          href="https://www.threads.net/@thisisgoodman"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  );
}
