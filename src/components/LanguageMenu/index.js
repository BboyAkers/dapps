import React from 'react'
import { useTranslation } from 'react-i18next';
import './index.css';

function LanguageMenu() {

  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="language__menu-position language__menu-box">
      <div>
        <svg height="35" viewBox="0 0 60 60" width="35" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 0H26a4 4 0 00-4 4v4.34C1.68 11.45-7.23 36.15 6.81 51.52c0 
                  0 .08.06.11.1 11.28 11.62 28.31 10.65 38.17 0 0 0 .06 0 .08-.07A25.87 25.87 
                  0 0051.29 28H56a4 4 0 004-4V4a4 4 0 00-4-4zM35.91 30.93c0 .68.06 1.37.07 2.07H32.8zM50 
                  35a23.85 23.85 0 01-5.76 14.61 25.55 25.55 0 00-7.6-3.28A52.21 52.21 
                  0 0038 35zM2 35h12a52.21 52.21 0 001.38 11.33 25.55 25.55 0 00-7.6 3.28A23.85 23.85 
                  0 012 35zm5.79-16.61a25.49 25.49 0 007.63 3.29A52 52 0 0014 33H2a23.88 23.88 0 015.79-14.61zM22 
                  20.8a37.8 37.8 0 01-4.12-.6A21.09 21.09 0 0122 12.13zm-6.07-1.06a23.69 23.69 0 01-6.75-2.83 23.88 
                  23.88 0 0111.51-6.3 22.51 22.51 0 00-4.76 9.13zm0 28.52a22.74 22.74 0 004.78 9.14 23.94 23.94 0 
                  01-11.54-6.31 24 24 0 016.74-2.83zm2-.45a41.1 41.1 0 0116.24 0c-4.12 13.56-12.17 13.58-16.29 
                  0zm18.21.45a24 24 0 016.74 2.83 23.94 23.94 0 01-11.57 6.31 22.74 22.74 0 004.78-9.14zm-1.45-2.38a43 
                  43 0 00-17.28 0A50.34 50.34 0 0116 35h11a1 1 0 001 1c.38 0 .45-.1 1.8-1H36a50.34 50.34 0 01-1.36 10.88zM27 
                  33H16a50.38 50.38 0 011.33-10.87 39.83 39.83 0 004.64.68V24a4 4 0 004 4 1 1 0 011 1zm23 0H38c0-1.14-.07-2.26-.15-3.35L40.3 
                  28h8.92c.44 1.634.701 3.31.78 5zm8-9a2 2 0 01-2 2H40c-.44 0 .43-.49-11 7.13V29a3 3 0 00-3-3 2 2 0 01-2-2V4a2 2 0 012-2h30a2 2 0 012 2z"/>
          <path d="M33.5 5a5.51 5.51 0 00-5.5 5.5V17a1 1 0 002 0v-4h7v4a1 1 0 002 0v-6.5A5.51 5.51 0 0033.5 5zM30 11v-.5a3.5 3.5 0 017 0v.5zM54 12h-4v-2a1 1 0 00-2 0v2h-4a1 
                  1 0 000 2h7a8.26 8.26 0 01-1.68 5.32c-.11.12-.24.21-.36.32a5.9 5.9 0 01-1.69-2.91 1 1 0 00-1.93.53 8.25 8.25 0 001.8 3.41A7.34 7.34 0 0145 21a1 1 0 000 2 8.46 8.46 
                  0 004-.91 8.5 8.5 0 004 .91 1 1 0 000-2 7 7 0 01-2.18-.32A10 10 0 0053 14h1a1 1 0 000-2z"
          />
        </svg>
      </div>
      <div>
        <button onClick={() => handleClick('en')}>English</button>
        <label htmlFor="languages">Choose a language:</label>
        <select name="languages" onChange={e => handleClick(e.currentTarget.value)}>
          <option value="en">English</option>
          <option value="chi">Chinese</option>
        </select>
        <p>{t('HOMEPAGE.TEST')}</p>
      </div>
    </div>
  )
}

export default LanguageMenu;