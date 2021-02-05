import { PaperMC } from '../'
const paper = new PaperMC()


; (async () => {
  
  console.log('Base URL:', paper.BASE_URL)
  console.log('Projects:', await paper.getProjects())
  console.log('Versions of paper:', (await paper.getProjectInfo('paper')).versions)
  
  console.log('Fetching last 10 build messages of mc 1.16.x...')
  const info = await paper.getVersionGroupBuilds('paper', '1.16')

  for (let c = 1; c < 11; c++) {
    const current = info.builds[info.builds.length - c]
    console.log('ㄴ', current.build, ':', current.changes[0]?.summary || '<empty>')
  }

  console.log('Downloading last build of mc 1.16.x...')
  const lastBuild = info.builds[info.builds.length - 1]

  const blob = await paper.download('paper', lastBuild.version, lastBuild.build, lastBuild.downloads.application.name)
  console.log('ㄴ done. (', blob.size, 'bytes )')

})()
