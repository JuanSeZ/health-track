interface ProgressBarProps {
  percentage: number;
  color: string;
}

const ProgressBar = ({ color, percentage }: ProgressBarProps) => {
  const containerStyle = {
    backgroundColor: `${color}4D`,
    height: '8px',
    borderRadius: '4px',
    overflow: 'hidden',
  };

  const filledStyle = {
    width: `${percentage}%`,
    backgroundColor: color,
    height: '100%',
  };

  return (
    <div style={containerStyle}>
      <div style={filledStyle} />
    </div>
  );
};

export default ProgressBar;
