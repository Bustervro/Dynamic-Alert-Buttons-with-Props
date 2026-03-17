import AlertButton from './AlertButton';

function Toolbar() {
  const buttons = [
    { message: 'Downloading!', children: 'Download File' },
    { message: 'Sharing!', children: 'Share Document' },
    { message: 'Deleted!', children: 'Delete File' },
  ];

  return (
    <div>
      {buttons.map((btn, index) => (
        <AlertButton
          key={index}
          message={btn.message}
        >
          {btn.children}
        </AlertButton>
      ))}
    </div>
  );
}

export default Toolbar;
