interface PlusIconProps {
  color: string;
}

const PlusIcon = ({ color }: PlusIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 6C12.7761 6 13 6.22386 13 6.5L13 18.5C13 18.7761 12.7761 19 12.5 19C12.2239 19 12 18.7761 12 18.5L12 6.5C12 6.22386 12.2239 6 12.5 6Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 12.5C19 12.7761 18.7761 13 18.5 13L6.5 13C6.22386 13 6 12.7761 6 12.5C6 12.2239 6.22386 12 6.5 12L18.5 12C18.7761 12 19 12.2239 19 12.5Z"
      fill={color}
    />
  </svg>
);

export default PlusIcon;
