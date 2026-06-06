function MobileLayout({ children }) {
  return (
    <div className="page-wrapper">
      <div className="mobile-container">
        {children}
      </div>
    </div>
  );
}

export default MobileLayout;