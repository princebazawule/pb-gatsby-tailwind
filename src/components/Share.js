import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  TumblrShareButton,
  TumblrIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'

export default function ShareButtons({title, url, twitterHandle, tags, caption}) {

    return(
        <div>
          <FacebookShareButton url={url} >
                <FacebookIcon  size={34} round={false} className='rounded mr-1' />
         </FacebookShareButton>

          <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
                <TwitterIcon  size={34} round={false} className='rounded mr-1'  />
          </TwitterShareButton>

          <LinkedinShareButton url={url} >
            <LinkedinIcon  size={34} round={false} className='rounded mr-1' />
          </LinkedinShareButton>

          <TumblrShareButton url={url} title={title} caption={caption}>
            <TumblrIcon  size={34} round={false} className='rounded mr-1'  />
          </TumblrShareButton>

          <WhatsappShareButton url={url} title={title}>
               <WhatsappIcon  size={34} round={false} className='rounded mr-1' />
           </WhatsappShareButton>
        </div>
      )

}