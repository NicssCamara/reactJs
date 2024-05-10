import React, { Component } from 'react'

export class Students extends Component {
  render() {
    return (
        <main className="flex-1 bg-gray-100 p-8">
            <h2 className="text-2xl font-semibold mb-4">Students</h2>

            {/* Your client table code */}
            <div className="mt-4 mx-4">
          <div className="w-full overflow-hidden rounded-lg shadow-xs">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <th className="px-4 py-3">Students</th>
                    <th className="px-4 py-3">Program</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                  <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img className="object-cover w-full h-full rounded-full" src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/04/2024/02/18/Megumi-3690692619.jpg" alt="" loading="lazy" />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                          <p className="font-semibold">Megumi Santos</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">10x Developer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">Information Technology</td>
                    <td className="px-4 py-3 text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span>
                    </td>
                    <td className="px-4 py-3 text-sm">15-01-2024</td>
                  </tr>

                  <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img className="object-cover w-full h-full rounded-full" src="https://www.enwallpaper.com/wp-content/uploads/2023/04/potential-kaiser-backstory-incoming-v0-s0i6curdtn0a1.png" alt="" loading="lazy" />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                          <p className="font-semibold">Michael Kaiser</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Football Player</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">Computer Science</td>
                    <td className="px-4 py-3 text-xs">
                    <span class="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full"> Pending </span>
                    </td>
                    <td className="px-4 py-3 text-sm">23-03-2024</td>
                  </tr>

                  <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img className="object-cover w-full h-full rounded-full" src="https://images.immediate.co.uk/production/volatile/sites/3/2023/03/Jujutsu-Kaisen-Cropped-dbe733b.jpg?quality=90&resize=844,563" alt="" loading="lazy" />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                          <p className="font-semibold">Toru Reyes</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Model</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">Technology Communication Management</td>
                    <td className="px-4 py-3 text-xs">
                    <span class="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full"> Pending </span>
                    </td>
                    <td className="px-4 py-3 text-sm">09-02-2024</td>
                  </tr>

                  <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img className="object-cover w-full h-full rounded-full" src="https://cdn.epicstream.com/images/ncavvykf/epicstream/6323acdf0e323cb006a5eed01872df7b5cef6042-1360x755.png?rect=0,21,1360,714&w=1200&h=630&auto=format" alt="" loading="lazy" />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                          <p className="font-semibold">Cho dela Cruz</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Influencer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">Data Science</td>
                    <td className="px-4 py-3 text-xs">
                    <span class="px-2 py-1 font-semibold leading-tight text-blue-900 bg-blue-200 rounded-full dark:text-blue-900 dark:bg-blue-700"> Ongoing </span>
                    </td>
                    <td className="px-4 py-3 text-sm">17-04-2024</td>
                  </tr>

                  <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img className="object-cover w-full h-full rounded-full" src="https://i.ytimg.com/vi/weCXtZbk-_c/maxresdefault.jpg" alt="" loading="lazy" />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                          <p className="font-semibold">Shu Garcia</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Martial Artist</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">Technology Communication Management</td>
                    <td className="px-4 py-3 text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span>
                    </td>
                    <td className="px-4 py-3 text-sm">11-01-2024</td>
                  </tr>

                  <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img className="object-cover w-full h-full rounded-full" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/08/toshira-hitsugaya-bleach-featured.jpg" alt="" loading="lazy" />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                          <p className="font-semibold">Mike Cruz</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Dancer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">Information Technology</td>
                    <td className="px-4 py-3 text-xs">
                    <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"> Denied </span>
                    </td>
                    <td className="px-4 py-3 text-sm">15-01-2021</td>
                  </tr>
                  
                  {/* Add more table rows here */}
                </tbody>
              </table>
            </div>
            <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
              <span className="flex items-center col-span-3"> Showing 1-10 of 50 </span>
              <span className="col-span-2"></span>
            </div>
          </div>
        </div>
        
        {/* End of your client table code */}

        </main>
    )
  }
}

export default Students