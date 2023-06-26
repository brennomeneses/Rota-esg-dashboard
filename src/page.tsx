import { Pie } from '@ant-design/plots';
import { Button } from 'antd';
import { useState } from "react";

const Page = () => {
  const data = [
    {
      type: 'Exemplo1',
      value: 27,
    },
    {
      type: 'Exemplo 2',
      value: 25,
    },
    {
      type: 'Exemplo 3',
      value: 18,
    },
    {
      type: 'Exemplo 4',
      value: 15,
    },
    {
      type: 'Exemplo 5',
      value: 10,
    },
    {
      type: 'Exemplo 6',
      value: 5,
    },
  ];

  const [dataState, setDataState] = useState(data);

  const config = {
    appendPadding: 10,
    data: dataState,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
      {
        type: "element-highlight"
      }
    ],
  };

  return (<>
    <Button
      type="primary"
      onClick={() => { }}
    >
      Remove 1
    </Button>
    <Pie {...config} />
  </>);
}

export default Page;