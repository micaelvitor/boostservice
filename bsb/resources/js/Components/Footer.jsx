import React from 'react';

export default class Footer extends React.Component {  

    year = () => {
       return new Date().getFullYear()
    }
      
    render(){
        return(
            <footer className="bg-dark text-center text-white mt-40">
                <div className="text-center p-3" style={{'backgroundColor' : 'rgba(0, 0, 5)', 'bottom': '0px', 'position': 'fixed', 'left': '0px', 'right': '0px'}}>
                    © {this.year()} Copyright: YourDotaBooster - Made with 🌿🚬 and 💙 with React and PHP(Laravel) by Compu-Global MegaNet Brasil
                </div>
            </footer>
        )
    }
}