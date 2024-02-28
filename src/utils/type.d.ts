export interface TwitterContextValue {
    user: User,
    stats: Stats,
    changeAvatar: (url: string | null) => void,
    changeName: (name: string | null) => void,
    changeStats: (statsType: StatsType, sum: number) => void
}

export interface HeroInfo {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
  }

  export interface Planets {
    planets: string[]
  }
  