import  { useEffect, useState } from 'react'
import { base_url, period_month } from '../utils/constants';
import { HeroInfo } from '../utils/type';

const AboutMe = () => {

  const [hero, setHero] = useState<HeroInfo>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const localHero = localStorage.getItem('hero');
    const heroData = localHero && JSON.parse(localHero);

    if (heroData && (Date.now() - heroData.time) < period_month) {
      setHero(heroData.payload);
      setIsLoading(false);
    } else {
      fetch(`${base_url}/v1/peoples/1`)
        .then(response => response.json())
        .then(data => {
          const info: HeroInfo = {
            name: data.name,
            height: data.height,
            mass: data.mass,
            hair_color: data.hair_color,
            skin_color: data.skin_color,
            eye_color: data.eye_color,
            birth_year: data.birth_year,
            gender: data.gender
          };
          setHero(info);
          localStorage.setItem('hero', JSON.stringify({
            time: Date.now(),
            payload: info
          }));
          setIsLoading(false);
        });
    }
  }, []);


  if (isLoading) {
    return (
      <div className='spinner-border text-primary'></div>
    );
  } else {
    return (
      <div className=''>
        <div className='row col-sm-12 mt-5 mb-5'>
          <div className='col-sm-8 p-5'>
            <h2>hi! my name:</h2>
            <h1>{hero?.name}</h1>
            <div className='persinfo border mx-1 row col-sm-6 mt-5 p-3'>
              <p>birth year: {hero?.birth_year}</p>
              <p>gender: {hero?.gender}</p>
              <p>height: {hero?.height} sm</p>
              <p>eye color: {hero?.eye_color}</p>
              <p>mass: {hero?.mass} kilo</p>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
};

export default AboutMe