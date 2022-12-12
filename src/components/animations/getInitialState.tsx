const getInitialState = (mode: string) => {
  switch (mode) {
    case "waves":
      return {
        mode: "waves",
        x: 0,
        y: 100,
        increment: 0,
        properties: [
          {
            label: "Line Color",
            attribute: "lineColor",
            type: "color",
            value: "#475569"
          },
          {
            label: "Background Color",
            attribute: "backgroundColor",
            type: "color",
            value: "#cbd5e1"
          },
          {
            label: "Amplitude",
            attribute: "amplitude",
            type: "range",
            min: -250,
            max: 250,
            value: 60,
            step: 1
          },
          {
            label: "Line Width",
            attribute: "lineWidth",
            type: "range",
            min: 0,
            max: 24,
            value: 12,
            step: 3
          },
          {
            label: "Wave Length",
            attribute: "waveLength",
            type: "range",
            min: 0.01, 
            max: 0.1,
            value: 0.012,
            step: 0.001
          },
          {
            label: "Frequency",
            attribute: "frequency",
            type: "range",
            min: 0.01, 
            max: 0.1,
            value: 0.01,
            step: 0.01
          },
        ],
        trails: 0.016,
        echo: 10,
        echoOffset: 120,
      }
    case "default": 
    return {
      mode: "default",
      properties: [
        {
          label: "Color",
          attribute: "background",
          type: "color",
          value: "#cbd5e1"
        }
      ],
    }
  };
}

export default getInitialState;
