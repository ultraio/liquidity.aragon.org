import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function Header({ logoMode }) {
  return (
    <div>
    <div className="page-header">
      <div className="container">
        <div className="social-links header-socials" css={`visibility: hidden;`}>
            <div className="social-link-wrapper">
              <div className="social-link-item">
                  <a href="https://www.youtube.com/channel/UCkYmCuZkV0ogKGj5l7IV1eA">
                    <img src="https://api.website.staging.ultra.io/uploads/4c3d350b3ba04a9a88f16e167e3ce7ba.svg" alt="Youtube" />
                  </a>
              </div>
            </div>
            <div className="social-link-wrapper">
              <div className="social-link-item">
                  <a href="https://t.me/ultra_io">
                    <img src="https://api.website.staging.ultra.io/uploads/7ed2e63ca9f84edd9e4f340c4656b351.svg" alt="Telegram" />
                  </a>
              </div>
            </div>
            <div className="social-link-wrapper">
              <div className="social-links-dropdown">
                <a>
                  <img src="https://api.website.staging.ultra.io/uploads/bc969cc65de548d9a3dacc0f7ed43086.svg" alt="Ultra (@ultra_io)" />
                  <div data-v-6a0d232a="" className="dropdown-component full-width">
                    <button data-v-58324c14="" data-v-6a0d232a="" type="button" className="button-component with-icon themed">
                      <span data-v-58324c14="">Twitter</span> 
                      <span data-v-58324c14="">
                        <img data-v-58324c14="" src="https://website.staging.ultra.io/images/icons/arrow-down.png" alt="Twitter" />
                      </span>
                    </button>
                  </div>
                </a>
              </div>
              <div className="social-links-dropdown">
              </div>
            </div>
          </div>
        
          <nav className="navigation-bar">
            <div className="main-navigation-wrapper">
              <div className="main-navigation">
                  <div role="button" aria-label="Toggle menu" className="navigation-toggler-icon"><span></span></div>
                  <section data-v-0ac2d5a1="" className="logotype-component logotype">
                    <a data-v-0ac2d5a1="" href="https://ultra.io/" className="active-link" aria-label="Logotype">
                        <svg data-v-0ac2d5a1="" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="logotype-icon icon">
                          <path d="M0 22.5C0 14.0885 0 9.88269 1.80866 6.75C2.99353 4.69774 4.69774 2.99353 6.75 1.80866C9.88269 0 14.0885 0 22.5 0C30.9115 0 35.1173 0 38.25 1.80866C40.3023 2.99353 42.0065 4.69774 43.1913 6.75C45 9.88269 45 14.0885 45 22.5C45 30.9115 45 35.1173 43.1913 38.25C42.0065 40.3023 40.3023 42.0065 38.25 43.1913C35.1173 45 30.9115 45 22.5 45C14.0885 45 9.88269 45 6.75 43.1913C4.69774 42.0065 2.99353 40.3023 1.80866 38.25C0 35.1173 0 30.9115 0 22.5Z" fill="#fff"></path>
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 23.0153V14.55H16.1999V23.0813C16.2107 25.2345 16.8352 26.683 17.8685 27.6882C18.927 28.7069 20.3406 29.2962 22.4999 29.2962C24.6639 29.2962 26.0927 28.7043 27.1484 27.6881C28.1729 26.6914 28.7999 25.2274 28.7999 23.0153V14.55H32.9999V23.0153C32.9999 26.0542 32.0991 28.7012 30.0818 30.661C28.0941 32.5764 25.5357 33.45 22.4999 33.45C19.4597 33.45 16.9201 32.5738 14.9351 30.6609C12.9279 28.7111 12.0134 26.018 11.9999 23.0153ZM24.5999 22.8578V14.55H20.3999V22.8809C20.4034 23.6644 20.6116 24.1913 20.9561 24.557C21.3089 24.9274 21.7801 25.1417 22.4999 25.1417C23.2213 25.1417 23.6975 24.9265 24.0494 24.557C24.3909 24.1945 24.5999 23.6622 24.5999 22.8578Z" fill="#232026"></path>
                        </svg>
                        <svg data-v-59b17a5e="" data-v-0ac2d5a1="" width="171" height="25" viewBox="0 0 171 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="logotype-text text">
                          <path data-v-59b17a5e="" d="M41.2379 0H46.9259V19.5055H63.9898V24.7253H41.2379V0Z" fill="#fff"></path>
                          <path data-v-59b17a5e="" d="M68.2557 0H93.8517V5.21978H83.8977V24.7253H78.2097V5.21978H68.2557V0Z" fill="#fff"></path>
                          <path data-v-59b17a5e="" fillRule="evenodd" clipRule="evenodd" d="M128.864 2.4533C127.142 0.910714 124.661 0 121.605 0H106.65V24.7253H112.338V16.1415H121.709L126.629 24.7253H133.668L127.515 14.8022C129.979 13.3805 131.444 11.0453 131.444 8.24176C131.444 6.08516 130.58 3.98901 128.864 2.4533V2.4533ZM112.338 10.989V5.21978H121.481C123.148 5.21978 124.136 5.68956 124.713 6.22939C125.315 6.79121 125.602 7.54808 125.602 8.28983C125.602 9.00275 125.335 9.64011 124.784 10.103C124.235 10.5632 123.24 10.989 121.48 10.989H112.338Z" fill="#fff"></path>
                          <path data-v-59b17a5e="" d="M142.199 24.7253H148.243L156.419 6.86813L164.596 24.7253H170.639L159.263 0H153.575L142.199 24.7253Z" fill="#fff"></path>
                          <path data-v-59b17a5e="" d="M0 11.1978V0H5.68798V11.2843C5.7022 14.1332 6.54829 16.0495 7.94895 17.3791C9.3809 18.7253 11.2949 19.5055 14.22 19.5055C17.1493 19.5055 19.086 18.7225 20.5151 17.3777C21.903 16.0591 22.7519 14.1223 22.7519 11.1964V0H28.4399V11.1978C28.4399 15.217 27.2198 18.7184 24.4868 21.3104C21.7978 23.8462 18.3324 25 14.22 25C10.1033 25 6.66347 23.8407 3.97448 21.3104C1.25704 18.7321 0.0184859 15.1703 0 11.1978Z" fill="#fff"></path>
                        </svg>
                    </a>
                  </section>
                  <nav data-v-72ea3a74="" className="nav-list navigation-menu nav-primary">
                    <a data-v-72ea3a74="" className="nav-item" href="https://ultra.io/">
                    Home
                    </a><a data-v-72ea3a74="" className="nav-item" href="https://ultra.io/developers">
                    Developers
                    </a><a data-v-72ea3a74="" className="nav-item" href="https://ultra.io/technology">
                    Technology
                    </a><a data-v-72ea3a74="" className="nav-item" href="https://ultra.io/articles">
                    Articles
                    </a><a data-v-72ea3a74="" className="nav-item" href="https://ultra.io/company">
                    Company
                    </a><a data-v-72ea3a74="" className="nav-item" href="https://ultra.io/career">
                    Join Us
                    </a><a data-v-72ea3a74="" className="nav-item active-link">
                    Staking Program
                    </a>
                  </nav>
                  <div className="social-links header-nav-socials">
                  </div>
              </div>
            </div>
        </nav>
      </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="l-12">
            <div className="page-introduction page-intro-block">
              <h1 className="intro-title text-bold">
                Uniswap Staking Program
              </h1>
              <div
                className="divider-component divider"
                css={`width: 37.5px; height: 3px`}
              ></div>
              <div className="staking-program-block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  logoMode: PropTypes.string,
}

export default Header
