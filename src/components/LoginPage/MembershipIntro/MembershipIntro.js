import './MembershipIntro.scss'

const MembershipIntro = () => {
    return(
        <div className='membershipIntroComponent'>
            <div className="discover">
                <h1 className="discoverTitle underlineDec">
                    Discover lululemon Membership
                </h1>
                <p>
                    One account. Tons of benefits. Endless possibilities.
                </p>
            </div>
            <ul className="membershipBenefits">
                <h1 className="benefitsTitle underlineDec">
                    Membership benefits include
                </h1>
                <li>
                    <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" className="perk-icons_icons__z3u2_"
                         focusable="false" role="img" aria-hidden="true">
                        <path
                            d="M10.672 15.79c.289-.11.469-.392.469-.7a.768.768 0 00-.47-.7.599.599 0 01-.23-.16c-.132-.128-.242-.34-.312-.609a.751.751 0 00-.719-.562c-.34 0-.64.23-.719.562-.07.258-.171.469-.3.598a.611.611 0 01-.243.16.739.739 0 00-.468.7.77.77 0 00.468.702c.09.028.172.09.23.149.134.14.243.34.313.61.09.331.38.562.72.562.339 0 .64-.23.718-.563.07-.258.172-.46.3-.598a.585.585 0 01.243-.16zm2.078 2.722s-.078-.051-.121-.09a.979.979 0 01-.2-.371.754.754 0 00-1.44 0 .916.916 0 01-.188.37.587.587 0 01-.13.09.745.745 0 000 1.36c.04.02.079.05.118.09.082.078.152.21.191.367.098.32.391.531.72.531a.76.76 0 00.722-.539c.047-.16.11-.289.2-.37.026-.04.07-.06.116-.09a.745.745 0 000-1.36zm-4.469.699a3.043 3.043 0 01-1.043-.691C6.73 18 6.352 17.28 6.11 16.37a.75.75 0 00-.73-.562c-.348 0-.64.23-.73.562-.239.899-.61 1.617-1.11 2.129-.3.32-.66.559-1.059.71a.739.739 0 00-.468.7c0 .309.187.578.468.7.391.152.739.39 1.04.69.511.52.89 1.24 1.128 2.15.09.331.383.562.73.562a.75.75 0 00.731-.563c.243-.898.61-1.61 1.11-2.129.3-.32.66-.558 1.062-.71.29-.11.469-.391.469-.7a.764.764 0 00-.469-.7zm-2.14 1.07c-.282.29-.532.63-.75 1-.23-.39-.493-.73-.782-1.031a6.173 6.173 0 00-.37-.34 4.99 4.99 0 001.152-1.37c.23.39.488.73.78 1.03.118.121.24.23.368.34-.14.11-.27.238-.398.371zm0 0"></path>
                        <path
                            d="M20.25 6h-3.82c-.418-3.102-1.258-6-3.68-6S9.488 2.898 9.07 6H5.25c-.41 0-.75.36-.75.781v7.578H5c.55 0 1-.449 1-1V7.5h13.5v13.031c0 1.09-.879 1.969-1.969 1.969h-8.57c-.55 0-.961.45-.961 1v.5h9.531A3.466 3.466 0 0021 20.531V6.781c0-.41-.34-.781-.75-.781zm-7.5-4.5c1.012 0 1.719 1.48 2.16 4.5h-4.32c.441-3.02 1.148-4.5 2.16-4.5zm0 0"></path>
                    </svg>
                    <span>Early Access to Product Drops</span>
                </li>
                <li>
                    <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" className="perk-icons_icons__z3u2_"
                         focusable="false" role="img" aria-hidden="true">
                        <path
                            d="M22.14 8.941c-.57-4.293-4.199-7.671-8.519-7.921C8.601.719 4.5 4.422 3.95 9.09l-.418-.399a1.002 1.002 0 00-1.41.02l-.351.36 2.3 2.218c.29.281.75.281 1.04 0l2.3-2.219-.351-.36a.983.983 0 00-1.41-.019l-.16.149a7.693 7.693 0 018.23-6.32c2.902.242 5.472 2.19 6.5 4.921 1.59 4.23-.778 8.649-4.668 9.989-.473.16-.73.66-.63 1.148l.118.55c4.652-1.026 7.73-5.378 7.09-10.187"></path>
                        <path
                            d="M15.238 12.059a2.453 2.453 0 00-2.449-2.45H9.922c-.652 0-1.274.262-1.73.72L2.487 16.03c-.847.848-.847 2.239 0 3.11l3.25 3.25c.453.41 1 .62 1.551.62.55 0 1.11-.21 1.531-.64l5.7-5.7c.46-.46.718-1.081.718-1.73zm-1.5 2.87c0 .262-.09.493-.277.673L7.76 21.3c-.32.32-.75.21-.991 0l-3.22-3.223a.705.705 0 010-.988l5.7-5.7a.953.953 0 01.672-.28h2.867c.52 0 .95.43.95.949zm0 0"></path>
                        <path d="M11.52 12.59c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75"></path>
                    </svg>
                    <span>Returns on Sale Items</span>
                </li>
                <li>
                    <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" className="perk-icons_icons__z3u2_"
                         focusable="false" role="img" aria-hidden="true">
                        <path
                            d="M14.441 10.61l-2.14-1.59a1.785 1.785 0 00-1.883-.168c-.61.304-.992.925-.988 1.609v3.2c-.004.679.379 1.304.988 1.609.61.304 1.34.238 1.883-.168l2.14-1.614c.457-.34.72-.867.72-1.437 0-.57-.263-1.102-.72-1.442m-.902 1.68L11.4 13.9a.271.271 0 01-.31.03.29.29 0 01-.16-.269v-3.2a.281.281 0 01.301-.288c.051 0 .11.02.168.058l2.141 1.59c.102.078.121.18.121.239 0 .062-.012.16-.12.242"></path>
                        <path
                            d="M12.031 5.531c-3.59 0-6.511 2.918-6.511 6.508a6.52 6.52 0 006.511 6.512c3.59 0 6.508-2.922 6.508-6.512a6.513 6.513 0 00-6.508-6.508m0 11.52a5.02 5.02 0 01-5.011-5.012 5.019 5.019 0 015.011-5.008 5.018 5.018 0 015.008 5.008 5.019 5.019 0 01-5.008 5.012"></path>
                        <path
                            d="M20 0H4a1.5 1.5 0 00-1.5 1.5v21A1.5 1.5 0 004 24h16a1.5 1.5 0 001.5-1.5v-21A1.5 1.5 0 0020 0zm0 22.5H4v-21h5.762v.11c0 .628.508 1.14 1.136 1.14h2.23a1.14 1.14 0 001.142-1.14V1.5H20zm0 0"></path>
                    </svg>
                    <span>Select lululemon Studio Content</span>
                </li>
                <li>
                    <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" className="perk-icons_icons__z3u2_"
                         focusable="false" role="img" aria-hidden="true">
                        <path
                            d="M12 6.852c1.531 0 2.719-1.68 2.719-3.133C14.719 2.269 13.5 1 12 1a2.72 2.72 0 00-2.719 2.719c0 1.5 1.188 3.133 2.719 3.133zM12 2.5c.672 0 1.219.55 1.219 1.219 0 .672-.598 1.633-1.219 1.633-.621 0-1.219-.942-1.219-1.633A1.21 1.21 0 0112 2.5zm10.5 16H22V8c0-.281-.219-.5-.5-.5h-2.969c-.55 0-1 .36-1 .91L17.5 9h3v9.5h-17V9h3l-.031-.59c0-.55-.45-.91-1-.91H2.5c-.281 0-.5.219-.5.5v10.5h-.5c-.281 0-.5.219-.5.5v1.34C1 21.8 2.191 23 3.648 23h16.704A2.658 2.658 0 0023 20.34V19c0-.281-.219-.5-.5-.5zm-1 1.84c0 .64-.52 1.16-1.16 1.16H3.66c-.64 0-1.16-.52-1.16-1.16V20h19zm0 0"></path>
                        <path
                            d="M5.39 10.898a.996.996 0 00-.609 1.18l.149.57c.101-.027.199-.058.308-.09.563-.18 1.313-.449 1.774-.68 1.117-.577 2.027-1.288 2.687-2.108.031.78-.16 1.59-.86 2.171-.269.22-.609.38-.968.547-.25.121-.5.242-.742.371-1.129.653-1.649 1.442-1.527 2.352.136 1.09 1.136 1.738 2.68 1.738h7.507c1.54 0 2.54-.648 2.68-1.738.12-.91-.399-1.7-1.528-2.352a8.216 8.216 0 00-.742-.37c-.36-.169-.71-.329-.98-.548-.707-.582-.899-1.39-.86-2.171.66.82 1.563 1.53 2.692 2.109.527.27 1.328.582 2.027.781l.152-.57c.122-.488-.14-1-.609-1.18-.27-.101-.55-.21-.71-.3-.95-.489-1.88-1.141-2.411-1.81a4.048 4.048 0 01-.648-1.16c-.153-.421-.59-.6-1.012-.55a.636.636 0 00-.34.14c-.23.2-.309.649-.39.942-.09.328-.169.668-.212 1.008-.078.601-.078 1.218.063 1.808.187.84.648 1.582 1.32 2.121.41.332.86.54 1.29.743.21.097.429.199.628.32.313.18.832.527.79.867-.04.313-.65.41-1.06.43l-.23-.278c-.36-.453-.738-.921-1.23-1.32-.27-.23-.61-.48-1.04-.601-.538-.16-1.007-.04-1.398.082-.09.027-.203.027-.383.02h-.476c-.3 0-.8.339-.8.75v.75h1.25c.237 0 .526.007.858-.09.29-.09.418-.11.532-.071.168.05.36.187.52.32.16.13.308.29.448.438H8.29c-.392 0-1.15-.09-1.188-.43-.043-.328.476-.68.789-.867.199-.121.418-.211.629-.313.43-.199.878-.41 1.289-.738.89-.73 1.37-1.781 1.421-2.922.02-.449-.02-.91-.109-1.347-.09-.473-.2-1.012-.422-1.43a.57.57 0 00-.23-.25c-.438-.25-1.078.027-1.239.488-.14.399-.359.79-.652 1.16-.527.668-1.508 1.32-2.457 1.801-.16.078-.43.188-.7.3zm0 0"></path>
                    </svg>
                    <span>Virtual Community Events</span>
                </li>
                <li>
                    <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" className="perk-icons_icons__z3u2_"
                         focusable="false" role="img" aria-hidden="true">
                        <path
                            d="M16.121 19.14L12.04 21.06v-9.86l8.031-3.8v.05c0 .832.668 1.5 1.5 1.5V6.22a.775.775 0 00-.308-.61c-.043-.03-.09-.03-.133-.05V5.53L11.94 1.148c-.41-.199-.882-.199-1.293 0L1.43 5.531v.02s-.07.02-.102.039A.76.76 0 001 6.219v11.543c0 .289.172.558.43.68l9.539 4.5a.764.764 0 00.64 0l6.063-2.864-.211-.45a1.012 1.012 0 00-1.332-.48m-7.82-10.66l7.793-3.68 2.976 1.422-7.777 3.68L8.309 8.5zM11.3 2.52l3.05 1.449-7.8 3.691-3.04-1.43zM2.5 7.398l3.27 1.543v1.38c0 .577.332 1.109.859 1.359l.652.308V9.66l3.27 1.54v9.87l-8.04-3.789V7.398zm0 0"></path>
                        <path
                            d="M19.012 15a1.5 1.5 0 001.5-1.5H14.5A1.5 1.5 0 0013 15zm-2.024-4.48a1.5 1.5 0 00-1.5 1.5H21.5c.828 0 1.5-.668 1.5-1.5zM14 18h6.012a1.5 1.5 0 001.5-1.5H15.5A1.5 1.5 0 0014 18"></path>
                    </svg>
                    <span>Receipt-Free and Fast-Track Returns</span>
                </li>
                <li>
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                         className="perk-icons_icons__z3u2_" focusable="false" role="img" aria-hidden="true">
                        <path
                            d="M22.16,13.18a5.23,5.23,0,0,1-3.33-2c.21-.23.45-.48.74-.77L21,9a2.6,2.6,0,0,0,.75-1.89A3.78,3.78,0,0,0,20.6,4.46c-1.32-1.31-3.42-1.5-4.52-.41L16,4.12A6.75,6.75,0,0,0,3.75,8h.59a1,1,0,0,0,1-.85A5.24,5.24,0,0,1,14.93,5.2l-.28.28c-.4.4-.75.71-1,1A3.71,3.71,0,0,0,12,9.83c0,1.75,0,2.12-1.74,4h0C9,14.89,7.35,16.57,4.75,19.18L1.47,22.47l.35.35a1,1,0,0,0,1.42,0l2.58-2.58c6.87-6.91,6.87-6.91,9.28-7.17l.21,0a4.26,4.26,0,0,0,2.43-.83A6.77,6.77,0,0,0,23,14.75v-.59A1,1,0,0,0,22.16,13.18Zm-7-1.63-.21,0a11,11,0,0,0-1.65.26,8,8,0,0,0,.17-2c0-1.23.2-1.41,1.15-2.26.27-.25.6-.54,1-.9A5,5,0,0,1,15.75,8a.66.66,0,0,0,0,.21l-.35.35a.74.74,0,0,0,0,1.06.71.71,0,0,0,.53.22.74.74,0,0,0,.53-.22l1.87-1.87A.75.75,0,0,0,17.3,6.69l-.16.16a6.39,6.39,0,0,0-.38-1.36l.38-.37A1.09,1.09,0,0,1,18,4.81a2.32,2.32,0,0,1,1.58.71,2.29,2.29,0,0,1,.71,1.56,1.1,1.1,0,0,1-.3.82L18.52,9.33l-.84.86A3,3,0,0,1,15.15,11.55Z"
                            fill="currentColor"></path>
                    </svg>
                    <span>Free Hemming</span>
                </li>
            </ul>
            <div className="experienceMembership">Experience Membership</div>
        </div>
    )
}

export default MembershipIntro