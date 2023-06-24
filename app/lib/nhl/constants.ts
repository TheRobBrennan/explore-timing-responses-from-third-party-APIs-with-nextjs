export const NHL_LIVE_GAME_URL = "https://statsapi.web.nhl.com/api/v1/game/2022030324/feed/live"
export const NHL_SCHEDULE_URL = "https://statsapi.web.nhl.com/api/v1/schedule?startDate=2023-06-24&endDate=2023-06-24&hydrate=team,linescore,broadcasts(all),tickets,game(content(media(epg)),seriesSummary),radioBroadcasts,metadata,seriesSummary(series)&site=en_nhl&teamId=&gameType=&timecode="

export const generateAPIRequests = () => {
  return [
    { endpoint: NHL_LIVE_GAME_URL, shortName: "NHL Live Game URL" },
    { endpoint: NHL_SCHEDULE_URL, shortName: "NHL Schedule URL" }
  ]
}