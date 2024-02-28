import { useState, useEffect } from 'react'
import style from "../css_modules/contact.module.css"
import { base_url} from "../utils/constants"
import { Planets } from '../utils/type';

const Contact = () => {

  const [planets, setPlanets] = useState<string[]>(['wait...']);

  async function fillPlanets(url: string) {
    const response = await fetch(url);
    const json = await response.json();
    const planets = json.map((item: any) => item.name);
    setPlanets(planets);
  }

  useEffect(() => {
    fillPlanets(`${base_url}/v1/planets`);
  }, [])


  return (
    <div>
      <form className={style.container} onSubmit={(e) => {
        e.preventDefault();
      }}>
        <label>First Name
          <input type="text" name="firstname" placeholder="Your first name..." />
        </label>
        <label>Last Name
          <input type="text" name="lastname" placeholder="Your last name..." />
        </label>
        <label>Planet
          <select name="planet">{
            planets.map(item => <option value={item} key={item}>{item}</option>)
          }
          </select>
        </label>
        <label>Subject
          <textarea name="subject" placeholder="Write something..." />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )

}

export default Contact