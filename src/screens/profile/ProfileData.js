import editIcon from '../../assets/images/editProfileIcon.png'
import langIcon from '../../assets/images/langIicon.png'
import inviteFriend from '../../assets/images/inviteAsdiqa.png'
import faqIcon from '../../assets/images/faqIcon.png'
import suportIcon from '../../assets/images/supportIocn.png'
import logoutIcon from '../../assets/images/logoutIcon.png'

export const ProfileData = [
    {
        id: 1,
        titleFr: 'Modifier le profil',
        titleAr : 'تعديل المعطيات الشخصية',
        icon : editIcon,
        goTo : 'EditeProfile',
    },
    {
        id: 2,
        titleFr: 'Langue',
        titleAr : 'اللغات',
        icon : langIcon,
        goTo : 'LanguageP',
    },
    {
        id: 4,
        titleFr: 'FAQs',
        titleAr : 'تساؤلات',
        icon : faqIcon,
        goTo : 'Question',
    },
    {
        id: 5,
        titleFr: 'Support',
        titleAr : 'مساعدة',
        icon : suportIcon,
        goTo : 'Support',
    },
    {
        id: 6,
        titleFr: 'Inviter des amis',
        titleAr : 'دعوة أصدقاء',
        icon : inviteFriend,
        goTo : 'InviteFriends',
    },
    {
        id: 7,
        titleFr: 'Déconnexion',
        titleAr : 'تسجيل خروج',
        icon : logoutIcon,
        goTo : 'Login',
        hidArrow : true,
    },
]