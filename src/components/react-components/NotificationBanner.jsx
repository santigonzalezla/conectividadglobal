import './css/notificationbanner.css';

const NotificationBanner = ({ bannerClass }) =>
{
    return (
        <div className={`banner ${bannerClass}`}>
            <span>Mensaje Enviado Correctamente</span>
        </div>
    );
}

export default NotificationBanner;