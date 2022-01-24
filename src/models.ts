type Champion = {
  imageUrl: string;
  level: number;
};

export type ChampionWinRate = {
  id: number;
  imageUrl: string;
  key: string;
  losses: number;
  name: string;
  wins: number;
};

type FellowPlayer = {
  champion: Champion;
  summonerId: string;
  summonerName: string;
};

type MapInfo = {
  imageUrl: string;
  mapId: number;
};

type General = {
  assist: number;
  contributionForKillRate: string;
  cs: number;
  csPerMin: number;
  death: number;
  goldEarned: number;
  kdaString: string;
  kill: number;
  largestMultiKillString: string;
  opScoreBadge: string;
  totalDamageDealtToChampions: number;
};

type Ward = {
  sightWardsBought: number;
  visionWardsBought: number;
};

export type GameInfo = {
  champion: Champion;
  createDate: number;
  gameId: string;
  gameLength: number;
  gameType: string;
  isWin: boolean;
  items: ImageObj[];
  mapInfo: MapInfo;
  mmr: number;
  needRenew: boolean;
  peak: string[];
  spells: ImageObj[];
  stats: GameInfoStats;
  summonerId: string;
  summonerName: string;
  tierRankShort: string;
};

type GameInfoStats = {
  general: General;
  ward: Ward;
};

type ImageObj = {
  imageUrl: string;
};

type LadderRank = {
  rank: number;
  rankPercentOfTop: number;
};

type TierRank = {
  division: string;
  imageUrl: string;
  lp: number;
  name: string;
  season: number;
  shortString: string;
  string: string;
  tier: string;
  tierDivision: string;
  tierRankPoint: number;
};

type League = {
  hasResults: boolean;
  losses: number;
  tierRank: TierRank;
  wins: number;
};

type Team = {
  players: FellowPlayer[];
  teamId: number;
};

type Summary = {
  assists: number;
  deaths: number;
  kills: number;
  losses: number;
  wins: number;
};

type Position = {
  games: number;
  losses: number;
  position: string;
  positionName: string;
  wins: number;
};

export type MostChampion = {
  assists: number;
  cs: number;
  deaths: number;
  games: number;
  id: number;
  imageUrl: string;
  key: string;
  kills: number;
  losses: number;
  name: string;
  rank: number;
  wins: number;
};

export type Summoner = {
  ladderRank: LadderRank;
  leagues: League[];
  level: number;
  name: string;
  previousTiers: TierRank[];
  profileBackgroundImageUrl: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  url: string;
};

/**
 * 소환사 기본 정보
 */
export type SummonerDTO = {
  summoner: Summoner;
};

/**
 * 소환사 most info
 */
export type MostInfoDTO = {
  champions: MostChampion[];
  recentWinRate: ChampionWinRate[];
};

/**
 * 소환사 match list
 */
export type MatchesDTO = {
  champions: Champion[];
  games: GameInfo[];
  positions: Position[];
  summary: Summary;
};

/**
 * 소환사 match 상세정보
 */
export type MatchDetailDTO = {
  gameId: string;
  teams: Team[];
};
