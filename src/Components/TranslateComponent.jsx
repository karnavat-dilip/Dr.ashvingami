import React, { useEffect, useRef } from 'react';


function TranslateComponent() {
  const googleTranslateRef = useRef(null);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (document.getElementById('google-translate-script')) return;

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hi,gu', // Add your desired languages here
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        googleTranslateRef.current
      );
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div className="translate-container">
      <div ref={googleTranslateRef} className="google-translate-box"></div>
    </div>
  );
}

export default TranslateComponent;
