export enum Provider {
  JILI = "JILI",
  FACHAI = "FACHAI",
  UUSLOTS = "UUSLOTS",
  FS = "FS",
  SBPLAY = "SBPLAY",
  WE = "WE",
  AESEXY = "AESEXY",
  ALLBET = "ALLBET",
  PP = "PP",
  MAXPLAY = "MAXPLAY",
  LIVE22 = "LIVE22",
  PG = "PG"
}

export enum GameType {
  MAXGAME = "MaxGame",
  KENO = "Keno",
  LOTTERY = "Lottery",
  TABLEGAME = "TableGame",
  SABAPLAY = "SabaPlay",
  LIVE22 = "Live22",
  FACHAI = "FaChai",
  FS = "FastSpin",
  PRAGMATIC_PLAY = "PragmaticPlay",
  PRAGMATIC_PLAY_CASINO = "PragmaticPlayCasino",
  UUSLOTS = "UuSlots",
  WORLDENTERTAINMENT = "WorldEntertainment",
  GTLIVE = "GTLive",
  ALLBET = "AllBet",
  JILI = "JiLi",
  SEXYCASINO = "SexyCasino",
  PG = "PocketGames"
}

export const ProviderGameTypes = {
  [Provider.ALLBET]: [GameType.ALLBET],
  [Provider.FACHAI]: [GameType.FACHAI],
  [Provider.FS]: [GameType.FS],
  [Provider.JILI]: [GameType.JILI],
  [Provider.LIVE22]: [GameType.LIVE22],
  [Provider.MAXPLAY]: [GameType.KENO, GameType.LOTTERY, GameType.MAXGAME, GameType.TABLEGAME],
  [Provider.PP]: [GameType.PRAGMATIC_PLAY, GameType.PRAGMATIC_PLAY_CASINO],
  [Provider.SBPLAY]: [GameType.SABAPLAY],
  [Provider.UUSLOTS]: [GameType.UUSLOTS],
  [Provider.WE]: [GameType.WORLDENTERTAINMENT],
};