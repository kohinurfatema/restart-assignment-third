import img1 from './demo-app (1).webp'
import img2 from './demo-app (2).webp'
import img3 from './demo-app (3).webp'
import img4 from './demo-app (4).webp'
import img5 from './demo-app (5).webp'
import img6 from './demo-app (6).webp'
import logoImg from './logo.png'
import heroImg from './hero.png'
import appErrorImg from './App-Error.png'
import error404Img from './error-404.png'
import iconDownloads from './icon-downloads.png'
import iconRatings from './icon-ratings.png'
import iconReview from './icon-review.png'

export const demoImages = [img1, img2, img3, img4, img5, img6]
export const getAppImage = (id) => demoImages[(id - 1) % 6]

export { logoImg, heroImg, appErrorImg, error404Img, iconDownloads, iconRatings, iconReview }
