import { Link } from "react-router-dom"
const Footer = () =>{
    return(
        <>
        <footer className="bg-[#0f0f0f] text-white px-4 py-2 lg:px-24 lg:py-5">
            <p>Questions? Call 000-800-919-1743</p>
            <div className="py-4 lg:py-8">
                <ul className="flex flex-wrap gap-y-3">
                    <li className="w-1/2 lg:w-1/4"><Link to="/">FAQ</Link></li>
                    <li className="w-1/2 lg:w-1/4"><Link to="/">Help Center</Link></li>
                    <li className="w-1/2 lg:w-1/4"><Link to="/">Account</Link></li>
                    <li className="w-1/2 lg:w-1/4"><Link to="/">Media Center</Link></li>
                    <li className="w-1/2 lg:w-1/4"><Link to="/">Investor Relations</Link></li>
                    <li className="w-1/2 lg:w-1/4"><Link to="/">Jobs</Link></li>
                    <li className="w-1/2 lg:w-1/4"><Link to="/">
                    Ways to Watch</Link></li>
                    <li className="w-1/2 lg:w-1/4"><Link to="/">
                    Terms of Use</Link></li>
                    <li className="w-1/2 lg:w-1/4"><Link to="/">Privacy</Link></li>
                    <li className="w-1/2 lg:w-1/4"><Link to="/">
                    Cookie Preferences</Link></li>
                    <li className="w-1/2 lg:w-1/4"><Link to="/">
                    Corporate Information</Link></li>
                    <li className="w-1/2 lg:w-1/4"><Link to="/">
                    Contact Us</Link></li>
                    <li className="w-1/2 lg:w-1/4"><Link to="/">
                    Speed Test</Link></li>
                    <li className="w-1/2 lg:w-1/4"><Link to="/">
                    Legal Notices</Link></li>
                    <li className="w-1/2 lg:w-1/4"><Link to="/">
                    Only on Netflix</Link></li>
                </ul>
            </div>
            <select className="mb-6 py-1 px-3 pr-7 bg-pink-700 rounded-md appearance-none bg-no-repeat bg-[90%_50%] sepia cursor-pointer outline-none bg-[url(https://static.pbcdn.in/e2e-cdn/assets/icons/icon-arrow-down-grey.svg)]">
                <option>English</option>
                <option>Hindi</option>
            </select>
            <p>Netflix India</p>
        </footer>
        </>
    )
}
export default Footer