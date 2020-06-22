import React from 'react';
import myPDF from './CVRimaLinaburgyte.pdf';

export default function DownloadButton() {
    return (
        <div class="home-buttons">
        <a
          href={myPDF}
          class="btn btn-primary"
          download="CVRimaLinaburgyte.pdf"
        >
          Download CV
        </a>
      </div>
    );
}