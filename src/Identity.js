import './App.css';

const imageSource = 'https://images.news18.com/ibnlive/uploads/2021/10/gus-fring--16336703954x3.jpg'
function Identity() {
  return (
    <header className="Identity">
      <div >
        <img src={imageSource} className='ProfilePicture'/>
        <h1>Gus Fring</h1>
        <h2>CEO von Los Pollos Hermanos</h2>
        <h3>Los Pollos Hermanos Website</h3>
        <div className='Contacts'>
        <button>
        <i class="fa-regular fa-envelope"></i> Email</button>
        <button><i class="fa-brands fa-linkedin"></i> Linkedin</button>
        </div>
      </div >
    </header>
  );
}

export default Identity;
