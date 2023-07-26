import React from 'react';
import {Link} from "react-router-dom"


function Sidebar  ()  {
    return (
        <div className="flex">
        <div className="flex flex-col h-screen p-3 bg-white shadow w-60 border-blue-400 border-solid border-x-2 " >
            <div className="space-y-3">
                <div className="flex items-center">
                    <h2 className=" text-4xl font-bold">Dashboard</h2>
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="rounded-sm">
                            <Link
                                to="/"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                                to="/"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                            <svg  className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                                to="/expensepage"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                </svg>
                                <span>Expenses</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                                to="/incomepage"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                            <svg className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 2.91992V10.9199" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21.2008 7.71997L18.0008 10.92L14.8008 7.71997" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.58 3.96997H6C4.93913 3.96997 3.92178 4.39146 3.17163 5.1416C2.42149 5.89175 2 6.9091 2 7.96997V17.97C2 19.0308 2.42149 20.0482 3.17163 20.7983C3.92178 21.5485 4.93913 21.97 6 21.97H18C19.0609 21.97 20.0783 21.5485 20.8284 20.7983C21.5786 20.0482 22 19.0308 22 17.97V13.8999" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 9.96997H5.37006C6.16571 9.96997 6.92872 10.286 7.49133 10.8486C8.05394 11.4112 8.37006 12.1743 8.37006 12.97C8.37006 13.7656 8.05394 14.5287 7.49133 15.0913C6.92872 15.6539 6.16571 15.97 5.37006 15.97H2" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> 
                                <span>Incomes</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                                to="/transactions"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                           <svg className="w-9 h-9" fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M221.419 490.47c103.339 0 180.565-39.936 180.565-75.605v-58.752c-39.467 29.141-104.235 47.488-180.565 47.488S80.32 385.254 40.854 356.113v58.752c0 35.669 77.227 75.605 180.565 75.605zm0 117.376c106.411 0 180.565-39.851 180.565-75.605v-48.427c-39.467 29.141-104.235 47.531-180.565 47.531S80.32 512.956 40.854 483.814v48.427c0 35.755 74.155 75.605 180.565 75.605zm0 127.019c103.339 0 180.565-39.936 180.565-75.605v-58.069c-39.467 29.141-104.235 47.531-180.565 47.531S80.32 630.333 40.854 601.191v58.069c0 35.669 77.227 75.605 180.565 75.605zm0 128.043c103.339 0 180.565-39.893 180.565-75.605V728.21c-39.467 29.141-104.235 47.531-180.565 47.531S80.32 757.352 40.854 728.21v59.093c0 35.712 77.227 75.605 180.565 75.605zm0-651.392c-106.411 0-180.565 39.851-180.565 75.605 0 35.797 74.155 75.648 180.565 75.648s180.565-39.851 180.565-75.648c0-35.755-74.155-75.605-180.565-75.605zm0-40.875c126.208 0 221.397 50.091 221.397 116.48v510.507c0 4.395-1.408 8.448-3.755 11.819-18.603 55.083-105.899 94.379-217.643 94.379S22.378 864.53 3.775 809.447C1.428 806.076.02 802.023.02 797.628V287.121c0-66.389 95.189-116.48 221.397-116.48zm685.376 288.431c67.797 23.424 113.365 87.381 113.365 159.147 0 92.843-75.52 168.363-168.363 168.363-61.44 0-118.059-33.536-147.669-87.509-5.419-9.856-1.792-22.272 8.107-27.691 9.856-5.461 22.315-1.835 27.733 8.064 22.443 40.875 65.28 66.261 111.829 66.261 70.315 0 127.488-57.216 127.488-127.488 0-54.357-34.475-102.784-85.803-120.533-10.667-3.669-16.341-15.317-12.672-25.984s15.317-16.299 25.984-12.629zm-82.804-2.863c0 92.843-75.52 168.363-168.32 168.363-92.843 0-168.32-75.52-168.32-168.363 0-92.8 75.477-168.32 168.32-168.32 92.8 0 168.32 75.52 168.32 168.32zm-168.32 127.488c70.272 0 127.488-57.173 127.488-127.488 0-70.272-57.216-127.488-127.488-127.488s-127.488 57.216-127.488 127.488c0 70.315 57.216 127.488 127.488 127.488z"></path></g></svg>
                                <span>Transactions</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
    );
}

export default Sidebar;
