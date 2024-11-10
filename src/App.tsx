import {useEffect, useState} from "react";
import assets from "./assets";

const App = () => {
  const [height, setHeight] = useState(500);

  useEffect(() => {
    console.log(window.innerWidth);
    setHeight((window.innerWidth || 0) * 0.09083);
  }, []);

  const data = {
    title: "Holistical View Report ",
    subtitle: "For the period 20240701 — 20240930",
    userInfo: {
      name: "Fadi Labadi",
      data: [
        {
          label: "CIC",
          value: "22613456"
        },
        {
          label: "Portfolio No.",
          value: "012003564276"
        },
        {
          label: "Date",
          value: "2024-10-29  -  2024-09-30"
        },
        {
          label: "Opening Balance",
          value: "201.07"
        },
        {
          label: "Closing Balance",
          value: "5,552.44"
        }
      ]
    },
    cards: [
      {
        title: "Saudi Market Portfolios Summary Card",
        sections: [
          {
            icon: "saudiMap",
            color: "#20580D",
            title: "Saudi Market Portfolios",
            data: {
              headers: [
                "Portfolio no.",
                "Total Value",
                "Market Value",
                "Gain/Loss %",
                "Total Cost",
                "Total Cash",
                "Blocked Amount",
                "Blocked Amount",
                "Total UPL PL",
                "Total Cost Value PL"
              ],
              rows: [
                [
                  "2112124789",
                  "143,764.00",
                  "143,764.00",
                  "10%",
                  "143,764.00",
                  "143,764.00",
                  "143,764.00",
                  "143,764.00",
                  "143,764.00",
                  "143,764.00"
                ]
              ]
            }
          }
        ]
      }
      // {
      //   title: "",
      //   chartInfo: [
      //     {
      //       color: "",
      //       icon: "",
      //       label: "",
      //       value: 0,
      //       formattedValue: ""
      //     }
      //   ]
      // },
      // {
      //   title: "",
      //   summary: {
      //     icon: "",
      //     color: "",
      //     title: "",
      //     data: [
      //       {
      //         label: "",
      //         value: ""
      //       }
      //     ]
      //   }
      // }
    ]
  };

  return (
    <div className='relative w-full h-full overflow-x-hidden overflow-y-auto p-6 bg-[#221AFB] pe-6'>
      {/* <div className=' w-6 h-[1000px] z-50 absolute top-0 end-0 bg-white'></div> */}

      <div className='rounded-s-2xl rounded-b-2xl overflow-hidden bg-[#F7F7F7]'>
        {/* HEADER */}
        <div
          className='flex w-full overflow-hidden'
          style={{
            backgroundImage: `url(${assets.reportHeader})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top"
          }}
        >
          <img
            src={assets?.reportHeaderLogo}
            style={{
              height: `${height}px`
            }}
          />
          <div className='-ms-10 w-full flex items-center justify-between gap-4 text-white pe-10 whitespace-nowrap'>
            <div className='flex flex-col gap-2'>
              <p className='text-xl font-bold'>{data?.title}</p>
              <p>{data?.subtitle}</p>
            </div>
            <div className='flex flex-col gap-1 text-right'>
              <p>Alrajhi Capital</p>
              <p>CMA Number: 22251-25</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-8 pt-20 px-10 pb-[100rem]'>
          {/* USER CARD */}
          <div className='flex justify-between items-start bg-white p-6 rounded-xl'>
            {/* USER NAME */}
            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 rounded-full flex items-center justify-center bg-[#10B981]'>
                <p className='font-bold text-white'>
                  {data?.userInfo?.name?.slice(0, 1)}
                </p>
              </div>
              <p className='font-bold'>{data?.userInfo?.name}</p>
            </div>

            {/* USER INFO */}
            <div className='mt-4'>
              {data?.userInfo?.data?.map((item, indx) => (
                <div key={indx} className='flex items-center justify-between gap-16'>
                  <p> {item?.label}:</p>
                  <p> {item?.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CARDS */}
          {data?.cards?.map((item, indx) => (
            <div key={indx} className='bg-white p-8 rounded-xl'>
              <p className='font-bold text-2xl mb-10'>{item?.title}</p>
              {item?.sections?.map((section, indx) => (
                <div className=''>
                  {/* section header */}
                  <div key={indx} className='flex items-center gap-2'>
                    <div
                      className='w-10 h-10 rounded-full flex items-center justify-center'
                      style={{backgroundColor: section?.color}}
                    >
                      <img src={assets?.[section?.icon]} className='p-2' />
                    </div>
                    <p className='font-bold text-xl'>{section?.title}</p>
                  </div>

                  {/* section data */}
                  <div className='mt-4'>
                    <table className='table-fixed w-full'>
                      <thead className='bg-[#F4F4FF]'>
                        <tr>
                          {section?.data?.headers?.map((header, indx) => (
                            <th key={indx} className='text-left py-3 px-2'>
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section?.data?.rows?.map((row, indx) => (
                          <tr key={indx}>
                            {row?.map((cell, indx) => (
                              <td key={indx} className='py-4 px-2'>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
