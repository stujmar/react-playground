import React, { useState } from 'react';

type FaderProps = {
  settings: any;
  onChange: (e: any) => void;
  base?: boolean;
};

const Fader = ({settings, onChange, base}: FaderProps) => {
  const [aniActive, setAniActive] = useState<boolean>(settings.isAnimated ? settings.animation.isActive : false);
  const { attribute, label, min, max, value, step, invert } = settings;
  
  const handlePropertyChange = (e: any) => {
    onChange({target: {type: base ? "base" : "property", name: attribute, value: e.target.value}});
  }
  const handleAniChange = (e: any) => {
    onChange({target: {type: "animation", name: e.target.name, value: e.target.value}});
  }

  const toggleIsAnimated = () => {
    onChange({target: {type: "animation", name: `${attribute}-isActive`, value: !aniActive}});
    setAniActive(!aniActive);
  }

  return (
    <div className="flex flex-col gap-2 sm:module-border w-40">
      <div className="flex justify-between items-center">
        <span className="font-nunito font-bold text-left text-slate-800">{label}</span>
        {settings.isAnimated && 
          <button onClick={toggleIsAnimated}>
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              className={`w-5 h-5 curson-pointer ${aniActive ? "text-slate-800" : "text-slate-400"}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg></button>}

      </div>
      {settings.isAnimated && aniActive ?
      <>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col justify-between items-start">
            <span className="font-nunito font-bold text-left text-slate-800">Min</span>
            <input
              style={{background: `linear-gradient(to right, rgb(148 163 184) 0%, rgb(148 163 184) ${((settings.animation.min - min)/(max - min)) * 100}%, #fff 0%, #fff 100%)`}}
              className={`accent-lime-500 bg-slate-200 border text-red-400 border-slate-400 rounded-full mt-2 h-2 appearance-none ${invert ? "rtl" : ""}`} type="range" name={`${attribute}-min`} onChange={(e) => handleAniChange(e)} value={settings.animation.min} min={min} max={max} step={step}></input>
          </div>
          <div className="flex flex-col justify-between items-start">
            <span className="font-nunito font-bold text-left text-slate-800">Max</span>
            <input
              style={{background: `linear-gradient(to right, rgb(148 163 184) 0%, rgb(148 163 184) ${((settings.animation.max - min)/(max - min)) * 100}%, #fff 0%, #fff 100%)`}}
              className={`accent-lime-500 bg-black ${invert ? "rtl" : ""}`} type="range" name={`${attribute}-max`} onChange={(e) => handleAniChange(e)} value={settings.animation.max} min={min} max={max} step={step}></input>
          </div>
        </div>
        {/*<!-- Double range slider (flat design)  -->*/}
        {/* <div class="range-slider flat" data-ticks-position='top' style={{ min: -500, '--max':500, '--value-a':-220, '--value-b':400, '--suffix':"%", '--text-value-a':"-220", '--text-value-b':"400"}}>
          <input type="range" min="-500" max="500" value="-220" onInput="this.parentNode.style.setProperty('--value-a',this.value); this.parentNode.style.setProperty('--text-value-a', JSON.stringify(this.value))"></input>
          <output></output>
          <input type="range" min="-500" max="500" value="400" onInput="this.parentNode.style.setProperty('--value-b',this.value); this.parentNode.style.setProperty('--text-value-b', JSON.stringify(this.value))"></input>
          <output></output>
          <div className='range-slider__progress'></div>
        </div> */}
      </>
      :
      <input
      style={{background: `linear-gradient(to right, rgb(148 163 184) 0%, rgb(148 163 184) ${((value - min)/(max - min)) * 100}%, #fff 0%, #fff 100%)`}}
        className={invert ? "rtl" : ""} type="range" name="timeSlider" onChange={(e) => handlePropertyChange(e)} value={value} min={min} max={max} step={step}></input>}
    </div>
  );
};

export default Fader;