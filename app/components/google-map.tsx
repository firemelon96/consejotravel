"use client";

// import { Map } from 'pigeon-maps';

export const GoogleMap = () => {
  return (
    <div className="flex w-full items-center justify-center overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.878536912658!2d118.73907607508669!3d9.776343990317946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b563004e21eb37%3A0x9c33c2a25f7d6878!2sConsejo%20Travel%20and%20Tours!5e0!3m2!1sen!2sph!4v1791187644445!5m2!1sen!2sph"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};
