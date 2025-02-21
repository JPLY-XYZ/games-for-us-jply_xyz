import { Accessibility, ChevronsLeftRightEllipsis } from "lucide-react";

function PlatformsIcons({ platforms = [] }) {
  return (
    <div className="flex pt-3 gap-2 text-3xl text-black">
      {/* PC */}

      

      {platforms.includes(4) || platforms.includes(6) ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 14 14"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M.5 6.5v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1m2.5 7h3m-1.5 0v-2"></path>
            <path d="M7.5 3.5V3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H9"></path>
            <path d="M11.375 4.875a.125.125 0 1 1 0-.25m0 .25a.125.125 0 1 0 0-.25M10.5 7h3"></path>
          </g>
        </svg>
      ) : null}
      {/* XBOX */}
      {platforms.includes(1) ||
      platforms.includes(186) ||
      platforms.includes(14) ||
      platforms.includes(80) ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></path>
            <path d="M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5"></path>
            <path d="M17.5 5C9.78 7.266 7.463 12.597 5 17.5"></path>
          </g>
        </svg>
      ) : null}
      {/* NINTENDO */}
      {platforms.includes(7) ||
      platforms.includes(8) ||
      platforms.includes(9) ||
      platforms.includes(13) ||
      platforms.includes(83) ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
        >
          <g fill="currentColor">
            <path d="M9.34 8.005c0-4.38.01-7.972.023-7.982C9.373.01 10.036 0 10.831 0c1.153 0 1.51.01 1.743.05c1.73.298 3.045 1.6 3.373 3.326c.046.242.053.809.053 4.61c0 4.06.005 4.537-.123 4.976c-.022.076-.048.15-.08.242a4.14 4.14 0 0 1-3.426 2.767c-.317.033-2.889.046-2.978.013c-.05-.02-.053-.752-.053-7.979m4.675.269a1.62 1.62 0 0 0-1.113-1.034a1.61 1.61 0 0 0-1.938 1.073a1.9 1.9 0 0 0-.014.935a1.63 1.63 0 0 0 1.952 1.107c.51-.136.908-.504 1.11-1.028c.11-.285.113-.742.003-1.053M3.71 3.317c-.208.04-.526.199-.695.348c-.348.301-.52.729-.494 1.232c.013.262.03.332.136.544c.155.321.39.556.712.715c.222.11.278.123.567.133c.261.01.354 0 .53-.06c.719-.242 1.153-.94 1.03-1.656c-.142-.852-.95-1.422-1.786-1.256"></path>
            <path d="M3.425.053a4.14 4.14 0 0 0-3.28 3.015C0 3.628-.01 3.956.005 8.3c.01 3.99.014 4.082.08 4.39c.368 1.66 1.548 2.844 3.224 3.235c.22.05.497.06 2.29.07c1.856.012 2.048.009 2.097-.04c.05-.05.053-.69.053-7.94c0-5.374-.01-7.906-.033-7.952c-.033-.06-.09-.063-2.03-.06c-1.578.004-2.052.014-2.26.05Zm3 14.665l-1.35-.016c-1.242-.013-1.375-.02-1.623-.083a2.81 2.81 0 0 1-2.08-2.167c-.074-.335-.074-8.579-.004-8.907a2.85 2.85 0 0 1 1.716-2.05c.438-.176.64-.196 2.058-.2l1.282-.003v13.426Z"></path>
          </g>
        </svg>
      ) : null}
      {/* MOVIL */}
      {platforms.includes(21) || platforms.includes(3) ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5h10V6H7z"
          ></path>
        </svg>
      ) : null}
      {/* PLAYSTATION */}
      {platforms.includes(187) ||
      platforms.includes(18) ||
      platforms.includes(16) ||
      platforms.includes(15) ||
      platforms.includes(27) ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M22.585 17.011c-.43.543-1.483.93-1.483.93l-7.832 2.817V18.68l5.764-2.057c.654-.234.754-.566.223-.74s-1.492-.125-2.147.111l-3.84 1.354v-2.155l.221-.076s1.11-.393 2.67-.566c1.561-.172 3.472.024 4.972.593c1.69.535 1.88 1.323 1.452 1.866m-8.57-3.537V8.162c0-.624-.115-1.198-.7-1.36c-.447-.144-.725.272-.725.895V21l-3.583-1.139V4c1.523.283 3.743.953 4.936 1.355c3.035 1.043 4.064 2.342 4.064 5.267c0 2.851-1.758 3.932-3.992 2.852m-11.583 4.99c-1.736-.49-2.025-1.51-1.234-2.097c.731-.542 1.975-.95 1.975-.95l5.138-1.83v2.086l-3.698 1.325c-.653.234-.753.566-.223.74c.532.175 1.493.125 2.147-.11l1.774-.644v1.865l-.354.06c-1.774.29-3.663.169-5.525-.445"
          ></path>
        </svg>
      ) : null}
      {!platforms.includes(4) &&
      !platforms.includes(6) &&
      !platforms.includes(187) &&
      !platforms.includes(18) &&
      !platforms.includes(16) &&
      !platforms.includes(15) &&
      !platforms.includes(27) &&
      !platforms.includes(1) &&
      !platforms.includes(186) &&
      !platforms.includes(14) &&
      !platforms.includes(80) &&
      !platforms.includes(7) &&
      !platforms.includes(8) &&
      !platforms.includes(9) &&
      !platforms.includes(13) &&
      !platforms.includes(83) &&
      !platforms.includes(21) &&
      !platforms.includes(3) ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          >
            <path d="m12 3l7.794 4.5v7.845a2 2 0 0 1-1 1.732L13 20.423a2 2 0 0 1-2 0l-5.794-3.346a2 2 0 0 1-1-1.732V7.5z" />
            <path d="M12 7v5l-4.33 2.5M12 12l4.33 2.5" />
          </g>
        </svg>
      ) : null}
    </div>
    
  );
}

export default PlatformsIcons;

// codigos de plataformas: 4,6-pc 187,18,16,15,27-playstation  1,186,14,80-Xbox, 7,8,9,13,83-nintendo, 21,3-movil
