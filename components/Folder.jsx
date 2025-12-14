


const Folder = ({ 
  name, 
  folderColor ,     // Bright Yellow (main body)
  accentColor ,     // Dark Yellow/Brown (folds/tab)
  contentColor = '#1a1a1a'     // Text Color
}) => {
    // const data = props;
  return (
    <svg
      width="150" 
      height="120"
      viewBox="50 90 110 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      <g id="layer1">
        <rect
          style={{paintOrder: "stroke markers fill"}}
          id="rect4"
          width="100.09392"
          height="78.215469"
          x="60.165749"
          y="106.65746"
          ry="10.392265"
          fill={accentColor} 
        />
        <rect
          style={{paintOrder: "stroke markers fill"}}
          id="rect5"
          width="84.779007"
          height="52.508278"
          x="67.276237"
          y="114.86188"
          ry="0"
          fill="#ffffff"
        />
        <rect
          style={{paintOrder: "stroke markers fill"}}
          id="rect1"
          width="106.1105"
          height="65.088394"
          x="57.430939"
          y="122.51934"
          ry="10.529005"
          fill={folderColor} 
        />
        
        <path style={{fill: "ffffff"}} d="m 138.38121,96.812154 c 0,0 6.56354,-11.486189 0,0 z" id="path2" />
        <path style={{fill: "ffffff"}} d="m 140.0221,94.624309 c 0,0 11.48619,-15.314919 0,0 z" id="path3" />
        <path 
          style={{fill: accentColor}} 
          d="m 60.712708,109.39226 c -0.148299,-5.04217 -0.216181,-8.71724 -0.236351,-11.395875 -0.02996,-3.978925 3.468806,-7.200807 7.456241,-7.200807 l 9.298341,10e-7 a 6.8226601,6.8226601 43.410084 0 1 6.812155,6.444206 l 0.735912,13.246395" 
          id="path5" 
          transform="matrix(1,0,0,0.88214883,-3.3333333e-8,17.050365)" 
        />
        
        <text
          style={{fontSize: '16.9333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start'}}
          x="88.771942"
          y="157.79811"
          id="text7"
          fill={contentColor} 
        >
          <tspan
            id="tspan7"
            x="88.771942"
            y="157.79811"
            fill={contentColor}
          >
            {name}
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default Folder;