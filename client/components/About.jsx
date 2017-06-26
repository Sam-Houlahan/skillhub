import React from 'react'

const profiles = [
  {
    name : 'Sam Houlahan',
    shortName : 'Sam H',
    avatar : 'https://avatars2.githubusercontent.com/u/24367156?v=3&s=400',
    github : 'Sam-Houlahan',
  },
  {
    name : 'Julie Crutchley',
    shortName : 'Julie',
    avatar : 'https://avatars3.githubusercontent.com/u/26125769?v=3&s=400',
    github : 'juliecrutchley',
  },
  {
    name : 'Sam Manongga',
    shortName : 'Sam M',
    avatar : 'https://avatars3.githubusercontent.com/u/9649569?v=3&s=400',
    github : 'smanongga',
    linkedIn : 'smanongga',
  },
  {
    name : 'Rory Macdonald',
    shortName : 'Rory',
    avatar : 'https://avatars0.githubusercontent.com/u/24968416?v=3&s=400',
    github : 'rory-macdonald',
  },
  {
    name : 'Robert Fisher',
    shortName : 'Rob',
    avatar : 'https://avatars1.githubusercontent.com/u/5499398?v=3&s=400',
    github : 'rob-dev-builder',
    linkedIn : 'robert-fisher-b1b68314',
  },
]

class About extends React.Component {
  render() {
    return (
      <div>
        <div className='container page'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='title'>The skillHub Team</h1>
              <p>
                Created in Auckland, New Zealand, SkillHub is a community for people to share, discover and develop skills together. SkillHub was built by the following <a href='https://www.devacademy.co.nz/'> EDA </a> students in June 2017:
              </p>
            </div>
          </div>
          <div className='row'>
            {
              profiles.map(profile =>
                <div className='col-md-4'>
                  <div className='dev-profile'>
                    <h2>{profile.name}</h2>
                    <img className='dev-profile-image' src={profile.avatar} alt={'Picture of ' + profile.shortName} />
                    <div className='social-media-links'>
                      {
                        profile.github
                          ? <a href={'https://github.com/' + profile.github} className='fa fa-github-square fa-2x favi-icon'></a>
                          : null
                      }
                      {
                        profile.linkedIn
                          ? <a href={'https://www.linkedin.com/in/' + profile.linkedIn + '/'} className='fa fa-linkedin-square fa-2x'></a>
                          : null
                      }
                    </div>
                  </div>
                </div>
              )
            }
          </div>
          <div className='row'>
            <div className='col-md-12'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
