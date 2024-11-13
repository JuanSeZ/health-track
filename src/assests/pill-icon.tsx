interface PlusIconProps {
  color: string;
}

const PillIcon = ({ color }: PlusIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
  >
    <path
      d="M14.25 25.3333L25.3333 14.25C27.5195 12.0639 27.5195 8.51946 25.3333 6.33333C23.1472 4.14721 19.6028 4.14721 17.4167 6.33333L6.33333 17.4167C4.14721 19.6028 4.14721 23.1472 6.33333 25.3333C8.51946 27.5195 12.0639 27.5195 14.25 25.3333Z"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.7917 19.7917V19.7917C16.2342 18.2671 13.3996 15.4324 11.875 11.875V11.875"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="27.7085"
      cy="27.7084"
      r="6.625"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.0835 25.3334L25.3335 30.0834"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default PillIcon;
