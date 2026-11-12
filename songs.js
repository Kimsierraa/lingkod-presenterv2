const rawSongs = [
    {
        title: "A New Commandment",
        sections: [
            { name: "VERSE", lyrics: "A new commandment I give unto you\nThat you love one another\nAs I have loved you,\nThat you love one another\nAs I have loved you." },
            { name: "END", lyrics: "By this shall all men\nKnow you are my disciples\nIf you have love one to another.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "A New Spirit",
        sections: [
            { name: "VERSE", lyrics: "[F1](Men)[/F1]\nLord I want to serve before You\nWith tongues of fire and a heart set free\nCome rebuild this fallen temple\nI am Yours I surrender and I yield" },
            { name: "VERSE", lyrics: "[F1](Women)[/F1]\nLord I want to sing Your praises\nWith tongues of fire and a heart set free\nCome and fill this broken vessel\nI am Yours I surrender and I yield" },
            { name: "CHORUS", lyrics: "A new heart I will give you says the Lord\nAnd a new Spirit I will put within you\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Lord I’ll be sin’s slave no longer\nThe blood of Christ has set me free\nTake my heart my mind my voice Lord\nI am Yours I surrender and I yield" },
            { name: "CHORUS", lyrics: "A new heart I will give you says the Lord\nAnd a new Spirit I will put within you\n[F1](2x)[/F1]" },
            { name: "BRIDGE", lyrics: "Renew, revive, restore us O Lord\n[F1](3x)[/F1]" },
            { name: "BRIDGE", lyrics: "A new heart I will give you says the Lord\nAnd a new Spirit I will put within you\n\n[F1](Renew, revive, restore us O Lord)[/F1]\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "Lord we want to see Your kingdom\nA church renewed and a world redeemed\nCleanse our lips to speak Your gospel\nWe are Yours we surrender and we yield" }
        ]
    },
    {
        title: "A Sacrifice",
        sections: [
            { name: "VERSE", lyrics: "A sacrifice\nI give my life to Thee\nAs a living sacrifice\nWilling to die\nAnd willing to live for Thee." },
            { name: "VERSE", lyrics: "O Lord, I have heard\nThe song of Calvary\nFrom the cross You sacrificed\nYou gave Your all for me…\nSo I sing…" },
            { name: "END", lyrics: "O Lord, write Your law\nOf love and joy in my spirit.\nO Lord, break me now\nLike the bread to be given." }
        ]
    },
    {
        title: "All Hail King Jesus",
        sections: [
            { name: "VERSE", lyrics: "All hail King Jesus,\nAll hail Emmanuel!\nKing of kings, Lord of lords,\nBright Morning Star!\nAnd for all eternity, I’ll ever praise you\nAnd forever more, I will reign with you." }
        ]
    },
    {
        title: "All I Desire Is You",
        sections: [
            { name: "VERSE", lyrics: "O Lord, my God\nAll I desire is You.\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "More precious than silver\nMore costly than gold\nNo riches on the earth\ncompares with You.\nAnd what can this world offer\nWhen all I desire is You?" }
        ]
    },
    {
        title: "All I Want",
        sections: [
            { name: "VERSE", lyrics: "I believe that nothing can outweigh\nThe advantage of knowing Jesus Christ\nThe advantage of knowing\nChrist Jesus, my Lord." },
            { name: "REFRAIN", lyrics: "All I want is to know Jesus Christ\nAnd the power of His rising.\nAll I want is to know my Lord\nAnd in Him to abide.\nOoohh…" },
            { name: "VERSE", lyrics: "For Him I take the loss of everything\nAnd I look on everything as naught\nIf only I have Christ and a place in Him." },
            { name: "REFRAIN", lyrics: "All I want is to know Jesus Christ\nAnd the power of His rising.\nAll I want is to know my Lord\nAnd in Him to abide.\nOoohh…" },
            { name: "VERSE", lyrics: "I’m no longer trying on my own\nFor perfection coming from the Law.\nI want only that which comes\nThrough my faith in Him." },
            { name: "END", lyrics: "All I want is to know Jesus Christ\nAnd the power of His rising.\nAll I want is to know my Lord\nAnd in Him to abide.\nOoohh…" }
        ]
    },
    {
        title: "All My Days",
        sections: [
            { name: "REFRAIN", lyrics: "Till the end of my days, O Lord,\nI will bless Your name,\nSing Your praise, give You thanks,\nAll my days." },
            { name: "VERSE", lyrics: "You have made me little less than a God,\nAnd have lavished my heart with Your love.\nWith dignity and honor You’ve clothed me,\nGiven me rule over all." },
            { name: "REFRAIN", lyrics: "Till the end of my days, O Lord,\nI will bless Your name,\nSing Your praise, give You thanks,\nAll my days." },
            { name: "VERSE", lyrics: "You have blessed me\nwith good things and plenty\nAnd surrounded my table with friends.\nTheir love and their laughter enrich me;\nTogether we sing Your praise." },
            { name: "REFRAIN", lyrics: "Till the end of my days, O Lord,\nI will bless Your name,\nSing Your praise, give You thanks,\nAll my days." },
            { name: "VERSE", lyrics: "Your sun and Your moon give me light,\nAnd Your stars show the way\nthrough the night.\nYour rivers and streams\nhave refreshed me.\nI will sing Your praise!" },
            { name: "REFRAIN", lyrics: "Till the end of my days, O Lord,\nI will bless Your name,\nSing Your praise, give You thanks,\nAll my days." },
            { name: "VERSE", lyrics: "How great is Your love, O Father,\nThat you sent us Your Savior Son.\nHis death and His rising will heal us,\nAnd draw us all unto You." },
            { name: "END", lyrics: "Till the end of my days, O Lord,\nI will bless Your name,\nSing Your praise, give You thanks,\nAll my days." }
        ]
    },
    {
        title: "All Blessing All Glory",
        sections: [
            { name: "VERSE", lyrics: "We have heard we have seen\nWonders great mighty deeds\nFrom your hand we receive\nGoodness and mercy" },
            { name: "VERSE", lyrics: "Age to age you command\nWhat you speak ever stands\nBy your word and your power\nWe find hope rest secure\nSo by faith we will rise and declare" },
            { name: "CHORUS", lyrics: "You are holy\n[F1](3x)[/F1]" },
            { name: "VERSE", lyrics: "Nations rise kingdoms fail\nYou remain you prevail\nRobed in strength crowned with grace\nJustice and mercy" },
            { name: "VERSE", lyrics: "To your throne we draw near\nBrought by love without fear\nLifted hands hearts redeemed\nFreed from death unashamed\nSo by faith we will rise and declare" },
            { name: "CHORUS", lyrics: "You are holy\n[F1](3x)[/F1]" },
            { name: "BRIDGE", lyrics: "All blessing all glory all honor and praise\nOur God everlasting the Ancient of Days\nIn sovereignty reigning in wisdom and truth\nYour servants your people your children\nBring worship only to you\nWorship only to you" },
            { name: "END", lyrics: "For you are holy\nYou are holy\nYou are holy\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "All That Is Good",
        sections: [
            { name: "VERSE", lyrics: "All that is good, all that is love\nWhatever is holy, whatever is true –\nYou are their source,\nYou are their fount,\nYou, Lord, and You alone!" },
            { name: "REFRAIN", lyrics: "Holy,\nholy,\nholy, O Lord Most High!\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "All that is good, all that is love\nWhatever is holy, whatever is true –\nYou are their source,\nYou are their fount,\nYou, Lord, and You alone!" },
            { name: "END", lyrics: "Worthy, worthy,\nworthy, O Lord Most High!\nWorthy, worthy, worthy, O Lord\nYou are worthy, O Lord,\nYou are worthy, O Lord Most High!" }
        ]
    },
    {
        title: "Amazing Grace",
        sections: [
            { name: "VERSE", lyrics: "Amazing grace, how sweet the sound\nThat saved a wretch like me.\nI once was lost, but now am found,\nWas blind, but now I see." },
            { name: "VERSE", lyrics: "‘Twas grace that taught my heart to fear\nAnd grace my fears relieved.\nHow precious did that grace appear\nThe hour I first believed." },
            { name: "VERSE", lyrics: "Through many dangers, toils and snares\nI have already come.\n‘Tis grace has brought me safe thus far\nAnd grace will lead me home." },
            { name: "VERSE", lyrics: "The Lord has promised good to me,\nHis word my hope secures.\nHe will my shield and portion be\nAs long as life endures." },
            { name: "VERSE", lyrics: "And when this flesh and heart shall fail\nAnd mortal life shall cease,\nI shall possess within the veil\nA life of joy and peace." },
            { name: "END", lyrics: "When we’ve been there\nTen thousand years,\nBright shining as the sun.\nWe’ve no less days to sing God’s praise\nThan when we’d first begun." }
        ]
    },
    {
        title: "Amen Our Hearts Cry",
        sections: [
            { name: "REFRAIN", lyrics: "Amen, amen, our hearts cry.\nHis word is true.\nAll that the Lord has said we will do." },
            { name: "VERSE", lyrics: "You have borne us on eagle’s wings:\nWe have witnessed Your power.\nYahweh, You will be our Lord;\nYour word will be our law." },
            { name: "REFRAIN", lyrics: "Amen, amen, our hearts cry.\nHis word is true.\nAll that the Lord has said we will do." },
            { name: "VERSE", lyrics: "The One who called forth creation,\nWho raised up mankind from dust.\nThe One who set the stars in their place\nHas revealed His mind to us." },
            { name: "REFRAIN", lyrics: "Amen, amen, our hearts cry.\nHis word is true.\nAll that the Lord has said we will do." },
            { name: "VERSE", lyrics: "He has not spoken in secret\nOr in some darkened land.\nThe Word of God shines forth like the sun;\nHis truth is close at hand." },
            { name: "REFRAIN", lyrics: "Amen, amen, our hearts cry.\nHis word is true.\nAll that the Lord has said we will do." },
            { name: "VERSE", lyrics: "“See the first things have come to pass.\nAll that I spoke has come true.\nBefore a new thing breaks\nFrom the bud I declare it to you.”" },
            { name: "END", lyrics: "Amen, amen, our hearts cry.\nHis word is true.\nAll that the Lord has said we will do." }
        ]
    },
    {
        title: "And The Father Will Dance",
        sections: [
            { name: "REFRAIN", lyrics: "And the Father will dance\nAs on the day of joy.\nHe will exult over you\nAnd renew you by His love." },
            { name: "VERSE", lyrics: "Shout for joy, all you His people!\nSing aloud and exult with all your heart\nFor Yahweh, your God, is in your midst." },
            { name: "REFRAIN", lyrics: "And the Father will dance\nAs on the day of joy.\nHe will exult over you\nAnd renew you by His love." },
            { name: "VERSE", lyrics: "You have no more evil to fear, [F1](2x)[/F1]\nDo not let your hands fall limp,\nFor Yahweh, your God, is in your midst." },
            { name: "REFRAIN", lyrics: "And the Father will dance\nAs on the day of joy.\nHe will exult over you\nAnd renew you by His love." },
            { name: "VERSE", lyrics: "He will renew you by His love.\n“And when the time comes\nI will rescue the lame.\nAnd when the time comes\nI will gather the strays.”" },
            { name: "VERSE", lyrics: "“And when the time comes\nI will be your guide.\nI will gather you in and give you renown\nAmong all peoples.”" },
            { name: "END", lyrics: "And the Father will dance\nAs on the day of joy\nHe will exult over you\nAnd renew you by His love.\n\nHe will renew you by His love!" }
        ]
    },
    {
        title: "Arise O Lord",
        sections: [
            { name: "VERSE", lyrics: "The Lord our God is faithful\nIn all His words and deeds.\nHis steadfast love is\nFor all who call upon His name." },
            { name: "VERSE", lyrics: "And He has given us His word\nThat He will send His Spirit,\nAnd make His dwelling in our midst." },
            { name: "REFRAIN", lyrics: "Arise, O Lord,\nAnd come to Your resting place.\nLet Your glory fill this temple,\nAnd salvation clothe Your saints." },
            { name: "REFRAIN", lyrics: "Arise, O Lord,\nAnd may Your people rejoice in Your goodness.\nRemember Your promise to us, and arise." },
            { name: "VERSE", lyrics: "The highest heavens cannot\nContain the Lord our God,\nNor any temple that man has built\nUpon the earth." },
            { name: "VERSE", lyrics: "And who are we that God should come\nand Make His home within us?\nYet by Your word let it be done." },
            { name: "REFRAIN", lyrics: "Arise, O Lord,\nAnd come to Your resting place.\nLet Your glory fill this temple,\nAnd salvation clothe Your saints." },
            { name: "REFRAIN", lyrics: "Arise, O Lord,\nAnd may Your people rejoice in Your goodness.\nRemember Your promise to us, and arise...." },
            { name: "REFRAIN", lyrics: "Arise, O Lord,\nAnd come to Your resting place.\nLet Your glory fill this temple,\nAnd salvation clothe Your saints." },
            { name: "END", lyrics: "Arise, O Lord,\nAnd may Your people rejoice in Your goodness.\nRemember Your promise to us, and arise." }
        ]
    },
    {
        title: "As Earthen Vessels",
        sections: [
            { name: "VERSE", lyrics: "We are a people off to war to battle\nThe evil enemy\nNever more shall we fear men’s pow’rs\nFor vict’ry is ours with Jesus in our midst." },
            { name: "REFRAIN", lyrics: "As earthen vessels treasure filled\nDo we make known God’s glory.\n“Out of the darkness the light shall shine,”\nSays the Lord, most holy." },
            { name: "REFRAIN", lyrics: "As we are the incense of God\nWe spread His fragrance faithfully.\nFor it is not ourselves we preach\nBut Christ as Savior and Lord." },
            { name: "VERSE", lyrics: "By our faith, our strength is renewed.\nAs servants of God’s community,\nWe fix our gaze on the glory of God.\nThe splendor of God,\nWhom we do not see, yet love." },
            { name: "REFRAIN", lyrics: "As earthen vessels treasure filled\nDo we make known God’s glory.\n“Out of the darkness the light shall shine,”\nSays the Lord, most holy." },
            { name: "REFRAIN", lyrics: "As we are the incense of God\nWe spread His fragrance faithfully.\nFor it is not ourselves we preach\nBut Christ as Savior and Lord." },
            { name: "VERSE", lyrics: "Naught have we to boast of,\nSave the cross of our Risen Master\nThe armor of our Redeemer and Lord,\nThe Word of the Lord,\nOur source of strength and life." },
            { name: "REFRAIN", lyrics: "As earthen vessels treasure filled\nDo we make known God’s glory.\n“Out of the darkness the light shall shine,”\nSays the Lord, most holy." },
            { name: "END", lyrics: "As we are the incense of God\nWe spread His fragrance faithfully.\nFor it is not ourselves we preach\nBut Christ as Savior and Lord.\n\nBut Christ as Savior and Lord. [F1](2x)[/F1]" }
        ]
    },
    {
        title: "As We Behold",
        sections: [
            { name: "VERSE", lyrics: "As we behold your presence, O Lord,\nWe call out your name,\nWe praise and acclaim" },
            { name: "VERSE", lyrics: "That You alone\nAre our King and our Lord.\nYou are our all, our life\nNothing can compare,\nNo god can compare" },
            { name: "VERSE", lyrics: "So, Lord, we worship you\nNothing shall possess\nOur hearts until they rest" },
            { name: "VERSE", lyrics: "In you, our King and Lord.\nYour pleasure we will do,\nOur lives we give anew" },
            { name: "VERSE", lyrics: "That you may make your home\nAmong us as we stand\nAnd so to all the land" },
            { name: "VERSE", lyrics: "We give You praise, love,\nGlory and thanks,\nHonor and worship\nFor all you have done." },
            { name: "VERSE", lyrics: "Our lives, our wills,\nOur weakness, our strength\nAll for You, our King and Lord." },
            { name: "VERSE", lyrics: "As we behold your presence, O Lord,\nWe call out your name,\nWe praise and acclaim" },
            { name: "VERSE", lyrics: "That You alone\nAre our King and our Lord.\nYou are our all, our life\nNothing can compare,\nNo god can compare" },
            { name: "VERSE", lyrics: "So, Lord, we worship you\nNothing shall possess\nOur hearts until they rest" },
            { name: "VERSE", lyrics: "In you, our King and Lord.\nYour pleasure we will do,\nOur lives we give anew" },
            { name: "VERSE", lyrics: "That you may make your home\nAmong us as we stand\nAnd so to all the land" },
            { name: "VERSE", lyrics: "We give You praise, love,\nGlory and thanks,\nHonor and worship\nFor all you have done." },
            { name: "VERSE", lyrics: "Our lives, our wills,\nOur weakness, our strength\nAll for You, our King and Lord." },
            { name: "VERSE", lyrics: "We give You praise, love,\nGlory and thanks,\nHonor and worship\nFor all you have done." },
            { name: "END", lyrics: "Our lives, our wills,\nOur weakness, our strength\nAll for You, our King and Lord." }
        ]
    },
    {
        title: "As We Gather",
        sections: [
            { name: "VERSE", lyrics: "As we gather, may Your Spirit work within us\nAs we gather, may we glorify Your name,\nKnowing well that as our hearts\nBegin to worship\nWe’ll be blest because we came,\nWe’ll be blest because we came." }
        ]
    },
    {
        title: "Ascribe Greatness",
        sections: [
            { name: "VERSE", lyrics: "Ascribe greatness to our God, the Rock\nHis work is perfect\nAnd all His ways are just.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "A God of faithfulness and\nWithout injustice,\nGood and upright is He.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Ascribe greatness to our God, the Rock\nHis work is perfect\nAnd all His ways are just.\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "A God of faithfulness and\nWithout injustice,\nGood and upright is He.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Ascribe To The Lord",
        sections: [
            { name: "VERSE", lyrics: "[F1](Women)[/F1]\nAscribe to the Lord, O heav’nly beings\nAscribe to Him, glory and strength.\nO come, ascribe to the Lord\nThe glory of His name,\nAnd worship Him in holy array." },
            { name: "VERSE", lyrics: "[F1](Men)[/F1]\nThe voice of God is upon many waters\nThe God of glory thundering forth\nThe voice of God full of majesty\nAnd power." },
            { name: "VERSE", lyrics: "[F1](Women)[/F1] Hallelujah!\n[F1](Men)[/F1] The voice of the Lord breaks the cedars of Lebanon!\n[F1](Women)[/F1] Hallelujah!\n[F1](Men)[/F1] The voice of the Lord flashes forth flames of fire!" },
            { name: "VERSE", lyrics: "[F1](Women)[/F1] Hallelujah!\n[F1](Men)[/F1] The voice of the Lord strips the oaks and forests bare!\n[F1](Women)[/F1] Hallelujah!\n[F1](Men)[/F1] And in His temple all cry “Glory!”" },
            { name: "VERSE", lyrics: "[F1](Women)[/F1]\nThe Lord sits enthroned over all the flood\nFrom there He reigns\nEnthroned as King forever,\nGiving His strength to the people\nWho know His name\nThe Lord blessing His people with peace." },
            { name: "VERSE", lyrics: "[F1](Men)[/F1]\nThe voice of God is upon many waters\nThe God of glory thundering forth\nThe voice of God full of majesty\nAnd power." },
            { name: "VERSE", lyrics: "[F1](Women)[/F1] Hallelujah!\n[F1](Men)[/F1] The voice of the Lord breaks the cedars of Lebanon!\n[F1](Women)[/F1] Hallelujah!\n[F1](Men)[/F1] The voice of the Lord flashes forth flames of fire!" },
            { name: "VERSE", lyrics: "[F1](Women)[/F1] Hallelujah!\n[F1](Men)[/F1] The voice of the Lord strips the oaks and forests bare!\n[F1](Women)[/F1] Hallelujah!\n[F1](Men)[/F1] And in His temple all cry “Glory!”" },
            { name: "END", lyrics: "[F1](Men and Women)[/F1] Hallelujah! [F1](4x)[/F1]" }
        ]
    },
    {
        title: "At The Name Of Jesus",
        sections: [
            { name: "VERSE", lyrics: "At the name of Jesus every knee shall bow\nEvery tongue confess Him,\nKing of Glory now.\n‘Tis the Father’s pleasure\nWe should call Him “Lord”,\nWho from the beginning\nWas the mighty Word." },
            { name: "VERSE", lyrics: "Humbled for a season\nTo receive a name\nFrom the lips of sinners\nUnto which He came;\nFaithfully He bore it spotless to the last,\nBrought it back victorious\nWhen through death He passed." },
            { name: "VERSE", lyrics: "Bore it up triumphant with its human light,\nThrough all ranks of creatures\nTo the central height,\nTo the throne of Godhead,\nTo the Father’s breast,\nFilled it with the glory of that perfect rest." },
            { name: "VERSE", lyrics: "In your hearts enthrone Him,\nThere let Him subdue,\nAll that is not holy, all that is not true,\nCrown Him as your Captain\nIn temptation’s hour\nLet His will enfold you in its light and pow’r." },
            { name: "END", lyrics: "Jesus Lord and Savior shall return again,\nWith His Father’s Glory o’er the earth to reign.\nFor all wreaths of Empires\nMeet upon His brow,\nAnd our hearts confess Him,\nKing of Glory now." }
        ]
    },
    {
        title: "Awake O Israel",
        sections: [
            { name: "VERSE", lyrics: "Awake, O Israel! Put off thy slumber\nAnd the truth shall set you free.\nFor out of Zion, comes thy Deliv’rer\nIn the year of Jubilee!" },
            { name: "VERSE", lyrics: "For in the furnace of much affliction,\nI have chosen thee, behold!\nAnd so for iron, I’ll give thee silver\nAnd for brass, I’ll give thee gold." },
            { name: "VERSE", lyrics: "Thou art My chosen, for I have sought thee,\nThou art graven on My hand,\nAnd I will gather, all those that gather,\nThey shall come back to their land." },
            { name: "END", lyrics: "O Hallelujah! O Hallelujah, Hallelujah!\nO praise the Lord!\nO Hallelujah! O Hallelujah,\nHallelujah praise the Lord!" }
        ]
    },
    {
        title: "Be Exalted O God",
        sections: [
            { name: "VERSE", lyrics: "I will give thanks to Thee,\nO Lord, among the people.\nI will sing praises to Thee\nAmong the nations." },
            { name: "VERSE", lyrics: "For Thy steadfast love is great,\nIs great to the heavens\nAnd Thy faithfulness,\nThy faithfulness to the clouds." },
            { name: "REFRAIN", lyrics: "Be exalted, O God, above the heavens\nLet Thy glory be over all the earth.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "I will give thanks to Thee,\nO Lord, among the people.\nI will sing praises to Thee\nAmong the nations." },
            { name: "VERSE", lyrics: "For Thy steadfast love is great,\nIs great to the heavens\nAnd Thy faithfulness,\nThy faithfulness to the clouds." },
            { name: "END", lyrics: "Be exalted, O God, above the heavens\nLet Thy glory,\nlet Thy glory\nLet Thy glory be over all the earth." }
        ]
    },
    {
        title: "Be Still",
        sections: [
            { name: "VERSE", lyrics: "Be still for the presence of the Lord,\nThe Holy One, is here.\nCome, bow before Him now\nWith reverence and fear." },
            { name: "VERSE", lyrics: "In Him no sin is found,\nWe stand on holy ground.\nBe still for the presence of the Lord,\nThe Holy One, is here." },
            { name: "VERSE", lyrics: "Be still for the glory of the Lord\nIs shining all around.\nHe burns with holy fire\nWith splendor He is crowned." },
            { name: "VERSE", lyrics: "How awesome is the sight,\nOur radiant King of light!\nBe still for the glory of the Lord\nIs shining all around." },
            { name: "VERSE", lyrics: "Be still for the power of the Lord\nIs moving in this place.\nHe comes to cleanse and heal,\nTo minister His grace." },
            { name: "END", lyrics: "No work too hard for Him,\nIn faith receive from Him.\nBe still for the power of the Lord\nIs moving in this place." }
        ]
    },
    {
        title: "Be Thou My Vision",
        sections: [
            { name: "VERSE", lyrics: "Be Thou my vision, O Lord of my heart\nNaught be all else to me save that Thou art.\nThou my best thought by day or by night\nWaking or sleeping, Thy presence my light." },
            { name: "VERSE", lyrics: "Be Thou my wisdom and Thou my true word\nI ever with Thee and Thou with me, Lord.\nThou my great Father, I Thy true son\nThou in me dwelling and I with Thee one." },
            { name: "VERSE", lyrics: "Be Thou my battle shield, sword for my fight\nBe Thou my dignity, Thou my delight.\nThou my soul’s shelter, Thou my high tow’r\nRaise Thou me heav’nward,\nO Pow’r of my pow’r." },
            { name: "VERSE", lyrics: "Riches I heed not nor man’s empty praise\nThou mine inheritance now and always.\nThou and Thou only, first in my heart\nHigh King of heaven, my treasure Thou art." },
            { name: "END", lyrics: "High King of heaven, my victory won\nMay I reach heaven’s joys,\nO bright heaven’s Son.\nHeart of my own heart, whatever befall,\nStill be my vision, O Ruler of all." }
        ]
    },
    {
        title: "Behold",
        sections: [
            { name: "VERSE", lyrics: "Behold, God is my salvation\nI will trust and will not be afraid.\nFor the Lord, my God\nIs my strength and song,\nHe also has become my salvation." },
            { name: "VERSE", lyrics: "For the Lord, my God\nIs my strength and song,\nHe also has become my salvation." },
            { name: "END", lyrics: "La la la la la la… [F1](2x)[/F1]" }
        ]
    },
    {
        title: "Behold The Lamb",
        sections: [
            { name: "VERSE", lyrics: "Behold the Lamb, our sacrifice\nOnce bound in death, now stands alive.\nBehold His light, full shining forth\nAnd stand amazed,\nAll you nations on the earth!" },
            { name: "VERSE", lyrics: "All praise to the Son,\nWho rules o’er all men!\nAll praise to the One\nWho died for us and lives again!" },
            { name: "VERSE", lyrics: "Our Shepherd and King\nIs raised up on high.\nOur Lord Jesus Christ,\nBoth God and man, is glorified." },
            { name: "VERSE", lyrics: "He lives evermore,\nHis reign without end,\nOur gracious High Priest\nWhose blood has slain\nBoth death and sin." },
            { name: "VERSE", lyrics: "He has shaken the earth\nDestroying the veil\nHe opens the way\nThe Father’s throne is now revealed!" },
            { name: "VERSE", lyrics: "Come, enter His gates,\nYou righteous draw near,\nGive thanks to His name\nWith songs of joy His vict’ry share." },
            { name: "VERSE", lyrics: "All creatures below,\nAll heavenly choirs,\nAll servants of God, proclaim His truth:\nHe is alive!" },
            { name: "END", lyrics: "[F1](Men)[/F1] He reigns on high!\n[F1](Women)[/F1] Hallelujah!\n[F1](3x)[/F1]\n[F1](Both)[/F1] He reigns on high!" }
        ]
    },
    {
        title: "Blessed Be The Name",
        sections: [
            { name: "VERSE", lyrics: "Blessed be the name of the Lord.\nHe is worthy to be praised and adored.\nSo we lift up holy hands in one accord\nSinging: Blessed be the name,\nBlessed be the name,\nBlessed be the name of the Lord." }
        ]
    },
    {
        title: "I Am Blessed",
        sections: [
            { name: "VERSE", lyrics: "You called me out of my darkness\nYou loved me and showed me the way\nYou filled me with hope and with yearning\nTo know you and give you all I am" },
            { name: "CHORUS", lyrics: "I am blessed to be in your service\nI am blessed to call you my friend\nI am blessed to share you with others\nMy Rock, my Refuge and my Lord" },
            { name: "VERSE", lyrics: "My past, my present and my future\nI place them all in your hands\nFor I trust you, I trust you, my Jesus\nI am yours; use me as you will" },
            { name: "CHORUS", lyrics: "I am blessed to be in your service\nI am blessed to call you my friend\nI am blessed to share you with others\nMy Rock, my Refuge and my Lord" },
            { name: "VERSE", lyrics: "I hear your voice on the water\n“Come out, come out into the deep”\nThough I fear, I will follow your calling\nIn your will is where I want to be" },
            { name: "CHORUS", lyrics: "I am blessed to be in your service\nI am blessed to call you my friend\nI am blessed to share you with others\nMy Rock, my Refuge and my Lord" },
            { name: "END", lyrics: "I am blessed to be in your service\nI am blessed to call you my friend\nI am blessed to share you with others\nMy Rock, my Refuge and my Lord [F1](3x)[/F1]" }
        ]
    },
    {
        title: "Bethlehem Rejoices",
        sections: [
            { name: "VERSE", lyrics: "Bethlehem rejoices\nHark! The voices clear\nSinging in the starlight\nNearer and more near." },
            { name: "REFRAIN", lyrics: "Unto God be glory\nPeace to men be given.\nThis is His will who dwelleth\nIn the heights of heaven." },
            { name: "VERSE", lyrics: "Heaven cannot contain Him\nNor the bounds of earth.\nYet, O glorious mystery,\nVirgin gives Him birth." },
            { name: "REFRAIN", lyrics: "Unto God be glory\nPeace to men be given.\nThis is His will who dwelleth\nIn the heights of heaven." },
            { name: "VERSE", lyrics: "Now the light ariseth\nIn the darkened skies.\nNow the proud are humbled\nAnd the lowly rise." },
            { name: "END", lyrics: "Unto God be glory\nPeace to men be given.\nThis is His will who dwelleth\nIn the heights of heaven.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Blessing And Glory",
        sections: [
            { name: "REFRAIN", lyrics: "Blessing and glory,\nWisdom and thanksgiving,\nHonor and power and might\nBe to our God, forever and ever.\nAmen. Amen. Amen." },
            { name: "VERSE", lyrics: "The kingdom of the world has become\nThe kingdom of our Lord\nAnd of His Christ\nAnd He shall reign forever and ever.\nAmen." },
            { name: "REFRAIN", lyrics: "Blessing and glory,\nWisdom and thanksgiving,\nHonor and power and might\nBe to our God, forever and ever.\nAmen. Amen. Amen." },
            { name: "VERSE", lyrics: "Now the salvation and the power\nAnd the kingdom of our God\nAnd the authority of His Christ have come." },
            { name: "END", lyrics: "Blessing and glory,\nWisdom and thanksgiving,\nHonor and power and might\nBe to our God, forever and ever.\nAmen. Amen. Amen.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Blest Be The Lord",
        sections: [
            { name: "REFRAIN", lyrics: "Blest be the Lord, blest be the Lord\nThe God of Mercy, the God who saves.\nI shall not fear the dark of night,\nNor the arrow that flies by day." },
            { name: "VERSE", lyrics: "He will release me from the nets of sinful men.\nHe will protect me from their wicked hands.\nBeneath the shadow of His wings I will rejoice\nTo find a dwelling place secure." },
            { name: "REFRAIN", lyrics: "Blest be the Lord, blest be the Lord\nThe God of Mercy, the God who saves.\nI shall not fear the dark of night,\nNor the arrow that flies by day." },
            { name: "VERSE", lyrics: "I need not shrink before the terrors of the night.\nNor stand alone before the light of day.\nNo harm shall come to me,\nNo arrow strike me down,\nNo evil settle in my heart." },
            { name: "REFRAIN", lyrics: "Blest be the Lord, blest be the Lord\nThe God of Mercy, the God who saves.\nI shall not fear the dark of night,\nNor the arrow that flies by day." },
            { name: "VERSE", lyrics: "Although a thousand men\nHave fallen at my side,\nI’ll not be shaken with the Lord at hand.\nHis faithful love is all the armor that I need.\nTo wage my battle with the foe." },
            { name: "END", lyrics: "Blest be the Lord, blest be the Lord\nThe God of Mercy, the God who saves.\nI shall not fear the dark of night,\nNor the arrow that flies by day." }
        ]
    },
    {
        title: "Blest The Man",
        sections: [
            { name: "VERSE", lyrics: "Blest the man whose trust is the Lord\nAnd his heart delights\nNot in false reward.\nBut his hope is at the end of his days\nTo behold his God and on Him gaze." },
            { name: "VERSE", lyrics: "Greater joy a man has not\nThan to lay his life before his God.\nHe will find a treasure held secure\nIn that place of rest forever more." },
            { name: "VERSE", lyrics: "Sacrifice Thou hast not desired\nBut obedience that’s tried by fire\nAn offering of life unreserved\nPoured out in love to You, O Lord." },
            { name: "END", lyrics: "We give loyalty and honor to You,\nOur King and Captain, Master true.\nAnd to You alone be honor and laud\nOur souls’ delight, the Triune God." }
        ]
    },
    {
        title: "Born Into A Battle",
        sections: [
            { name: "VERSE", lyrics: "Born into a battle,\nA warfare to know\nBeyond the visible we see it,\nThe army, the field and the foe." },
            { name: "VERSE", lyrics: "God alone in the garden\nWhere it began long ago\nWhere the enemy who rose up\nDeceived the man God made\nWhere God stated His intention\nTo crush that serpent’s head." },
            { name: "REFRAIN", lyrics: "For the kingdom of this world it shall become\nThe kingdom of our Lord and of His Christ\nAnd He shall reign forever and evermore." },
            { name: "VERSE", lyrics: "Entered into vict’ry,\nWhat wisdom this plan?\nGod’s Son, born of a woman,\nMessiah, an ordinary man.\nSatan said, “It seems so easy.”" },
            { name: "VERSE", lyrics: "As nail through flesh and blood ran\n“Sure this foolishness can’t threaten\nMy reign of death and sin.”\nBut the third day Jesus rose up\nAnd triumphed over him." },
            { name: "REFRAIN", lyrics: "For the kingdom of this world it shall become\nThe kingdom of our Lord and of His Christ\nAnd He shall reign forever and evermore." },
            { name: "VERSE", lyrics: "Toward the final conflict\nGod’s Word our command\nWe move inevitably onward\nGod’s weapons held in our hands." },
            { name: "VERSE", lyrics: "In Him we shall do more than conquer\nBefore our Lord, who can stand?\nMan shall glorify his Maker\nGod shall be enjoyed\nAnd that one called the deceiver\nHis works shall be destroyed." },
            { name: "REFRAIN", lyrics: "For the kingdom of this world it shall become\nThe kingdom of our Lord and of His Christ\nAnd He shall reign forever and ever" },
            { name: "END", lyrics: "For the kingdom of this world it shall become\nThe kingdom of our Lord and of His Christ\nAnd He shall reign forever and evermore." }
        ]
    },
    {
        title: "Breathe On Us",
        sections: [
            { name: "VERSE", lyrics: "We seek the Lord\nO come Holy Spirit\nAnd teach us to worship\nThe one enthroned on high" },
            { name: "VERSE", lyrics: "Inspire O Spirit\nWith words for the Father\nWe join all creation\nTo fill his courts with praise" },
            { name: "CHORUS", lyrics: "We sing breathe on us O Breath of God\nBreathe on us O Breath of God" },
            { name: "CHORUS", lyrics: "[F1](Men)[/F1]\nBreathe on us O Breath of God\n\n[F1](Women)[/F1]\nO Holy Spirit hover over us\nAnd we will take new form" },
            { name: "CHORUS", lyrics: "[F1](Men)[/F1]\nBreathe on us O Breath of God\n\n[F1](Women)[/F1]\nWe want to praise the Father lifted high\nAnd see his kingdom come" },
            { name: "VERSE", lyrics: "We seek the Lord\nO come Holy Spirit\nAnd teach us to worship\nThe one enthroned on high" },
            { name: "VERSE", lyrics: "Inspire O Spirit\nWith words for the Father\nWe join all creation\nTo fill his courts with praise" },
            { name: "CHORUS", lyrics: "We sing breathe on us O Breath of God\nBreathe on us O Breath of God" },
            { name: "CHORUS", lyrics: "[F1](Men)[/F1]\nBreathe on us O Breath of God\n\n[F1](Women)[/F1]\nO Holy Spirit hover over us\nAnd we will take new form" },
            { name: "CHORUS", lyrics: "[F1](Men)[/F1]\nBreathe on us O Breath of God\n\n[F1](Women)[/F1]\nWe want to praise the Father lifted high\nAnd see his kingdom come" },
            { name: "END", lyrics: "[F1](Men)[/F1]\nBreathe on us O Breath of God\n\n[F1](Women)[/F1]\nO Holy Spirit hover over us\nAnd we will take new form" },
            { name: "END", lyrics: "[F1](Men)[/F1]\nBreathe on us O Breath of God\n\n[F1](Women)[/F1]\nWe want to praise the Father lifted high\nAnd see his kingdom come" }
        ]
    },
    {
        title: "The Bringer Of Joy",
        sections: [
            { name: "VERSE", lyrics: "As a doe yearns for water, Lord\nMy soul yearns for You.\nAs a weary land waits for rain\nSo I will wait for You." },
            { name: "VERSE", lyrics: "And I will gladly sing of Your love\nAnd proclaim Your mighty deed\nFor You have saved me from distress." },
            { name: "VERSE", lyrics: "As a mighty cedar reaches high\nSo I will reach for You.\nAs a mountain river seeks the sea\nSo I will seek for You." },
            { name: "VERSE", lyrics: "And I will gladly sing of Your love\nAnd proclaim Your mighty deed\nFor You have saved me from distress." },
            { name: "REFRAIN", lyrics: "Holy One, mighty God,\nWord made flesh, Wonder Counselor,\nGlorious in majesty are You!" },
            { name: "VERSE", lyrics: "You’re the Alpha and the Omega,\nThe Great Bright Morning Star.\nYou’re the Lion of Judah,\nKing of kings, the only Son of God." },
            { name: "VERSE", lyrics: "And I will gladly sing of Your love\nI will wait for Your return\nFor You have saved me from distress." },
            { name: "REFRAIN", lyrics: "Holy One, mighty God,\nWord made flesh, Wonder Counselor,\nGlorious in majesty are You!" },
            { name: "END", lyrics: "You’re the Alpha and the Omega,\nThe Great Bright Morning Star.\nYou’re the Lion of Judah,\nKing of kings, the only Son of God." }
        ]
    },
    {
        title: "Build Your Throne",
        sections: [
            { name: "VERSE", lyrics: "See God rise up in shouts\nOf jubilant praise\nHe appears with robes of light.\nO exalt Him, acclaim the Ancient of days\nCelebrate with all your might." },
            { name: "REFRAIN", lyrics: "Build Your throne in our assembly\nFor we prepare Your habitation.\nPitch Your tent in our praise and glory\nBuild Your throne, O Lord." },
            { name: "VERSE", lyrics: "Our enemies attack with iron and steel\nWe advance with harps and lyre.\nThey do battle in vain using their skill\nFor we fight with holy fire." },
            { name: "REFRAIN", lyrics: "Build Your throne in our assembly\nFor we prepare Your habitation.\nPitch Your tent in our praise and glory\nBuild Your throne, O Lord." },
            { name: "VERSE", lyrics: "Admire the towers, the walls,\nThe fortress of God\nWe are hid beneath His wings.\nLord and warrior is armed\nWith scepter and rod\nAnd triumph we see Him bring." },
            { name: "REFRAIN", lyrics: "Build Your throne in our assembly\nFor we prepare Your habitation.\nPitch Your tent in our praise and glory\nBuild your throne, O Lord." },
            { name: "VERSE", lyrics: "O Jerusalem, declare:\n“Who is your King?”\nElohim, dreaded and strong.\nAll dominions, the pow’rs,\nSpirits of the air\nShall receive the full wrath of God." },
            { name: "REFRAIN", lyrics: "Build Your throne in our assembly\nFor we prepare Your habitation.\nPitch Your tent in our praise and glory\nBuild Your throne, O Lord.\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "Build Your throne, build Your throne\nBuild Your throne, O Lord!" }
        ]
    },
    {
        title: "By Your Steadfast Love",
        sections: [
            { name: "VERSE", lyrics: "By Your steadfast love,\nI will enter Your house.\nI will worship You in Your holy temple" },
            { name: "VERSE", lyrics: "And revere Your name\nAs I bow before You,\nExalt in You, my Lord, my shield.\nAlleluia! [F1](8x)[/F1]" },
            { name: "VERSE", lyrics: "By Your steadfast love, [F1](Alleluia)[/F1]\nI will enter Your house. [F1](Alleluia)[/F1]\nI will worship You [F1](Alleluia)[/F1]\nin Your holy temple [F1](Alleluia)[/F1]" },
            { name: "VERSE", lyrics: "And revere Your name [F1](Alleluia)[/F1]\nAs I bow before You, [F1](Alleluia)[/F1]\nExalt in You, [F1](Alleluia)[/F1]\nmy Lord, my shield. [F1](Alleluia)[/F1]" },
            { name: "END", lyrics: "Alleluia! [F1](8x)[/F1]" }
        ]
    },
    {
        title: "Can It Be O My Soul",
        sections: [
            { name: "VERSE", lyrics: "Can it be, O my soul,\nI have found the one true treasure?\nHidden deeply at the source\nOf every heart’s desire" },
            { name: "VERSE", lyrics: "Precious hope, priceless faith,\nPurest love beyond all measure;\nAt what cost, Lord,\nWhat could such a prize require?" },
            { name: "REFRAIN", lyrics: "Only all, only love,\nSelfless love all love surpassing;\nIt is You, the Fount of Life\nYou O Lord our heart’s desire\nLet us die to let Him live;\nSilent be your true surrender." },
            { name: "REFRAIN", lyrics: "Hopeful watching, humble giving,\nFaithful love.\nIt is You, Fount of Life,\nYou have been our heart’s desire,\nIt is You, it is You, the Pearl of Great Price." },
            { name: "VERSE", lyrics: "Can it be, O my soul,\nI have found the one true treasure?\nHidden deeply at the source\nOf every heart’s desire" },
            { name: "VERSE", lyrics: "Precious hope, priceless faith,\nPurest love beyond all measure;\nAt what cost, Lord,\nWhat could such a prize require?" },
            { name: "REFRAIN", lyrics: "Only all, only love,\nSelfless love all love surpassing;\nIt is You, the Fount of Life\nYou O Lord our heart’s desire\nLet us die to let Him live;\nSilent be your true surrender." },
            { name: "REFRAIN", lyrics: "Hopeful watching, humble giving,\nFaithful love.\nIt is You, Fount of Life,\nYou have been our heart’s desire,\nIt is You, it is You, the Pearl of Great Price." },
            { name: "END", lyrics: "Can it be, O my soul,\nI have found the one true treasure?" }
        ]
    },
    {
        title: "Celebrate Jesus Celebrate",
        sections: [
            { name: "REFRAIN", lyrics: "Celebrate Jesus, celebrate! [F1](4x)[/F1]" },
            { name: "VERSE", lyrics: "He is risen, He is risen!\nAnd He lives forever more.\nHe is risen, He is risen!\nCome on and celebrate\nThe resurrection of our Lord." },
            { name: "REFRAIN", lyrics: "Celebrate Jesus, celebrate! [F1](4x)[/F1]" },
            { name: "VERSE", lyrics: "He is risen, He is risen!\nAnd He lives forever more.\nHe is risen, He is risen!\nCome on and celebrate [F1](3x)[/F1]\nThe resurrection of our Lord." },
            { name: "END", lyrics: "Celebrate Jesus, celebrate! [F1](4x)[/F1]" }
        ]
    },
    {
        title: "Change My Heart",
        sections: [
            { name: "VERSE", lyrics: "Change my heart, O God,\nMake it ever true.\nChange my heart, O God,\nMay I be like You." },
            { name: "END", lyrics: "You are the potter, I am clay.\nMold me and make me\nThis is what I pray." }
        ]
    },
    {
        title: "Chosen And Precious",
        sections: [
            { name: "VERSE", lyrics: "Chosen and precious,\nBeloved as my own,\nSet apart for Me, destined for My throne.\nGo, for I send you, My will you are to do.\nYou did not choose Me\nbut I have chosen you." },
            { name: "END", lyrics: "Go, for I send you, My will you are to do.\nYou did not choose me,\nBut from eternity, My own love to be,\nI have chosen you." }
        ]
    },
    {
        title: "Come All Ye Nations",
        sections: [
            { name: "VERSE", lyrics: "[F1](Men)[/F1] Come, ye nations! [F1](7x)[/F1]\n[F1](Women)[/F1] Come, all ye nations, and\nPraise the Lord!\nCome, all ye people, in one accord.\n[F1](Both)[/F1] Don’t you know Jesus is our Savior?\nDon’t you know He is the Lord?" },
            { name: "VERSE", lyrics: "[F1](Men)[/F1] Jesus is coming. [F1](4x)[/F1]\n[F1](Women)[/F1] People are gathering and\nSinging a song.\nJesus is coming, it won’t be long.\n[F1](Both)[/F1] The Holy Spirit has been given\nTo bring us into heaven." },
            { name: "REFRAIN", lyrics: "[F1](Women)[/F1] There we will see Jesus,\nWe will behold His face.\n[F1](Men)[/F1] From the river of life we’ll drink\nAnd we’ll dance all over the place.\n[F1](Both)[/F1] Yes, we’ll dance\nWhen we see His face!" },
            { name: "VERSE", lyrics: "[F1](Men)[/F1] We’ve got vict’ry. [F1](7x)[/F1]\n[F1](Women)[/F1] Play the timbrel and make melody.\nSound the horn for the victory!\n[F1](Both)[/F1] The Lord is strong in war,\nFull of might. Into the darkness\nHe has brought us light." },
            { name: "VERSE", lyrics: "[F1](Men)[/F1] Alleluia. [F1](4x)[/F1]\n[F1](Women)[/F1] Let alleluias ring o’er the land.\nPeople of God, now clap your hands.\n[F1](Both)[/F1] Rest your hearts in a full salvation,\nRejoice in the new creation!" },
            { name: "END", lyrics: "[F1](Men)[/F1] Come, ye nations. [F1](4x)[/F1]\n[F1](Women)[/F1] Come, all ye nations, and\nPraise the Lord!\nCome, all ye people, in one accord.\n[F1](Both)[/F1] Don’t you know Jesus is our Savior?\nDon’t you know He is the Lord?\nHe is the Lord!" }
        ]
    },
    {
        title: "Come And Worship",
        sections: [
            { name: "VERSE", lyrics: "Come and worship, royal priesthood.\nCome and praise Him, holy nation.\nWorship Jesus, our Redeemer.\nHe is precious, King of glory!" }
        ]
    },
    {
        title: "Come Holy Spirit",
        sections: [
            { name: "VERSE", lyrics: "Come Holy Spirit\nCome great Fire of God\nEnkindle in us the fire of your love\nTransform us that we may become\nThe image of God's only Son\n[F1](2x)[/F1]" },
            { name: "CHORUS", lyrics: "Make us h-o-ly, h-o-ly\nAs you are h-o-ly" },
            { name: "VERSE", lyrics: "Come Holy Spirit\nCome great Fire of God\nEnkindle in us the fire of your love\nTransform us that we may become\nThe image of God's only Son" },
            { name: "CHORUS", lyrics: "Make us h-o-ly, h-o-ly\nAs you are h-o-ly" },
            { name: "END", lyrics: "Come Holy Spirit\nCome great Fire of God\nEnkindle in us the fire of your love\nTransform us that we may become\nThe image of God's only Son" }
        ]
    },
    {
        title: "Come Let Us Go Up",
        sections: [
            { name: "REFRAIN", lyrics: "Come, let us go up\nTo the mountain of the Lord\nUnto the house\nOf the God of Jacob.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "And the law will go forth from Zion\nAnd the word of the Lord from Jerusalem.\nWe will walk in His footsteps\nAnd He will teach us His ways." },
            { name: "REFRAIN", lyrics: "Come, let us go up\nTo the mountain of the Lord\nUnto the house\nOf the God of Jacob.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "And He will judge many peoples,\nAnd decide for mighty nations far and wide.\nSwords will be beaten into plowshares\nAnd nations will not learn war again." },
            { name: "REFRAIN", lyrics: "Come, let us go up\nTo the mountain of the Lord\nUnto the house of the God of Jacob!\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "Unto the house of the God of Jacob! [F1](2x)[/F1]" }
        ]
    },
    {
        title: "Come Thou Long Expected Jesus",
        sections: [
            { name: "VERSE", lyrics: "Come, thou long expected Jesus,\nBorn to set thy people free\nFrom our fears and sins release us,\nLet us find our rest in thee." },
            { name: "VERSE", lyrics: "Israel’s strength and consolation,\nHope of all the earth thou art;\nDear desire of ev’ry nation,\nJoy of ev’ry longing heart." },
            { name: "VERSE", lyrics: "Born thy people to deliver,\nBorn a child and yet a king\nBorn to reign in us forever,\nNow thy gracious kingdom bring." },
            { name: "VERSE", lyrics: "By thine own eternal Spirit\nRule in all our hearts alone:\nBy thine all sufficient merit\nRaise us to thy glorious throne." },
            { name: "END", lyrics: "Come, thou long expected Jesus,\nBorn to set thy people free\nFrom our fears and sins release us,\nLet us find our rest in thee." }
        ]
    },
    {
        title: "Come Together And Worship",
        sections: [
            { name: "REFRAIN", lyrics: "Come together and worship the living God. [F1](2x)[/F1]\nCome together and worship the living God.\n\nCome together and worship the King of kings. [F1](2x)[/F1]\nCome together and worship the King of kings." },
            { name: "VERSE", lyrics: "For He is the source of all creation\nThe giver of life to all the nations\nFreed us from sin and its dominion\nHe is our God, the living God." },
            { name: "REFRAIN", lyrics: "Come together and worship the living God. [F1](2x)[/F1]\nCome together and worship the living God.\n\nCome together and worship the King of kings. [F1](2x)[/F1]\nCome together and worship the King of kings." },
            { name: "VERSE", lyrics: "Come, let us bow down before His presence.\nCome, let us lay down our life before Him\nAnd make known His deeds to all the nations.\nHe is our God, the living God." },
            { name: "END", lyrics: "Come together and worship the living God. [F1](2x)[/F1]\nCome together and worship the living God.\n\nCome together and worship the King of kings. [F1](2x)[/F1]\nCome together and worship the King of kings." }
        ]
    },
    {
        title: "Consider The Lilies",
        sections: [
            { name: "REFRAIN", lyrics: "Consider the lilies of the field,\nThey neither toil nor spin.\nYet I tell you that even Solomon\nWas not arrayed like these." },
            { name: "VERSE", lyrics: "What shall we eat, Lord?\nWhat shall we drink?\nWhat shall we put on today?\nIs not life more than food,\nThe body more than clothes?" },
            { name: "REFRAIN", lyrics: "Consider the lilies of the field,\nThey neither toil nor spin.\nYet I tell you that even Solomon\nWas not arrayed like these." },
            { name: "VERSE", lyrics: "The birds of the air don’t toil nor reap,\nYet our good Father feeds them.\nAre you not of more worth\nIn the eyes of God?" },
            { name: "REFRAIN", lyrics: "Consider the lilies of the field,\nThey neither toil nor spin.\nYet I tell you that even Solomon\nWas not arrayed like these." },
            { name: "VERSE", lyrics: "If God so clothes the grass of the field\nWhich is alive and then be burned.\nWill the Lord not much more\nGive clothes to His children?" },
            { name: "REFRAIN", lyrics: "Consider the lilies of the field,\nThey neither toil nor spin.\nYet I tell you that even Solomon\nWas not arrayed like these." },
            { name: "VERSE", lyrics: "Do not be anxious for tomorrow\nLet each day’s trouble suffice.\nSeek first His kingdom,\nAnd all things will be yours." },
            { name: "END", lyrics: "Consider the lilies of the field,\nThey neither toil nor spin.\nYet I tell you that even Solomon\nWas not arrayed like these." }
        ]
    },
    {
        title: "Psalm 34 - Come Let Us Magnify The Lord",
        sections: [
            { name: "VERSE", lyrics: "Fear the Lord, you His holy ones, fear the Lord.\nFor those who fear the Lord,\nThey will lack no perfect thing." },
            { name: "VERSE", lyrics: "Trust the Lord, you His servants,\nTrust the Lord.\nFor those who trust the Lord,\nThey will never be ashamed." },
            { name: "REFRAIN", lyrics: "Come let us magnify the Lord,\nLet His praise be upon our lips.\nCome let us bless Him at all times.\nFor we have tasted and seen.\nWe have tasted and seen." },
            { name: "VERSE", lyrics: "Seek the Lord, you His children, seek the Lord.\nFor those who seek the Lord,\nThey will find Him who redeems." },
            { name: "VERSE", lyrics: "Love the Lord, love and serve Him\nForever more.\nFor those who love the Lord,\nThey will see Him face to face." },
            { name: "END", lyrics: "Come let us magnify the Lord,\nLet His praise be upon our lips.\nCome let us bless Him at all times.\nFor we have tasted and seen.\nWe have tasted and seen.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Create In Me",
        sections: [
            { name: "REFRAIN", lyrics: "Create in me a clean heart,\nPut a new and right spirit within me.\nCast me not away from Your presence\nAnd take not Your Holy Spirit from me." },
            { name: "VERSE", lyrics: "Have mercy on me,\nO God, in Your goodness,\nIn Your compassion blot out all my sin.\nThoroughly cleanse me\nFrom all of my guilt,\nWash me till I’m whiter than snow." },
            { name: "REFRAIN", lyrics: "Create in me a clean heart,\nPut a new and right spirit within me.\nCast me not away from Your presence\nAnd take not Your Holy Spirit from me." },
            { name: "VERSE", lyrics: "Restore to me the joy of Your salvation.\nUphold me with a willing spirit.\nSo I will teach transgressors Your ways\nAnd sinners will return to You." },
            { name: "REFRAIN", lyrics: "Create in me a clean heart,\nPut a new and right spirit within me.\nCast me not away from Your presence\nAnd take not Your Holy Spirit from me." },
            { name: "VERSE", lyrics: "You are pleased with sincerity of heart,\nNot with sacrifices or with holocausts.\nMy sacrifice is a broken spirit\nFor You will not refuse a humble heart." },
            { name: "REFRAIN", lyrics: "Create in me a clean heart,\nPut a new and right spirit within me.\nCast me not away from Your presence\nAnd take not Your Holy Spirit from me." },
            { name: "END", lyrics: "Create in me a clean heart." }
        ]
    },
    {
        title: "Crown Him Lord Of Lords",
        sections: [
            { name: "VERSE", lyrics: "All glory and praise to the Lamb! [F1](2x)[/F1]\nFor He that was slain is risen again\nAll glory and praise to the Lamb!" },
            { name: "END", lyrics: "Praise Him, praise Him!\nMagnify His name and\nPraise Him, praise Him!\nGlorify His name and crown Him Lord!\n\nCrown Him Lord of lords!" }
        ]
    },
    {
        title: "Crown Him With Many Crowns",
        sections: [
            { name: "VERSE", lyrics: "Crown Him with many crowns\nThe Lamb upon His throne.\nHark! How the heav’nly anthem drowns\nAll music but its own.\nAwake, my soul, and sing\nOf Him who died for thee\nAnd hail Him as thy matchless King\nThrough all eternity." },
            { name: "VERSE", lyrics: "Crown Him the Lord of life\nWho triumphed o’er the grave\nWho rose victorious in the strife\nFor those He came to save.\nHis glories now we sing\nWho died and rose on high\nWho died eternal life to bring\nAnd lives that death may die." },
            { name: "VERSE", lyrics: "Crown Him the Lord of lords\nWho over all doth reign\nWho once on earth, the incarnate Word\nFor ransomed sinners slain\nNow lives in realms of light\nWhere saints with angels sing\nTheir songs before Him day and night\nTheir God, Redeemer and King." },
            { name: "END", lyrics: "Crown Him the Lord of heav’n\nEnthroned in worlds above\nCrown Him the King to whom is giv’n\nThe wondrous name of love.\nCrown Him with many crowns\nAs thrones before Him fall\nCrown Him, ye kings, with many crowns\nFor He is King of all." }
        ]
    },
    {
        title: "Days Of Elijah",
        sections: [
            { name: "VERSE", lyrics: "These are the days of Elijah\nDeclaring the word of the Lord.\nAnd these are the days\nOf Your servant, Moses\nRighteousness being restored." },
            { name: "VERSE", lyrics: "And these are the days of great trials\nOf famine and darkness and sword;\nStill we are the voice in the desert crying,\n\"Prepare ye the way of the Lord\"" },
            { name: "REFRAIN", lyrics: "Behold, He comes, riding on the clouds\nShining like the sun at the trumpet call.\nSo lift your voice, it’s the year of jubilee\nAnd out of Zion’s Hill salvation comes." },
            { name: "VERSE", lyrics: "And these are the days of Ezekiel\nThe dry bones becoming as flesh\nAnd these are the days\nOf Your servant, David\nRebuilding a temple of praise." },
            { name: "VERSE", lyrics: "And these are the days of the harvest\nThe fields are as white in the world\nAnd we are the laborers\nIn Your vineyard\nDeclaring the word of the Lord." },
            { name: "REFRAIN", lyrics: "Behold, He comes, riding on the clouds\nShining like the sun at the trumpet call\nSo lift your voice, it’s the year of jubilee\nAnd out of Zion’s Hill salvation comes." },
            { name: "BRIDGE", lyrics: "There's no God like Jehovah.\n[F1](8x)[/F1]" },
            { name: "REFRAIN", lyrics: "Behold, He comes, riding on the clouds\nShining like the sun at the trumpet call\nSo lift your voice, it’s the year of jubilee\nAnd out of Zion’s Hill salvation comes.\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "Out of Zion’s Hill salvation comes!\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Deeply In Love",
        sections: [
            { name: "VERSE", lyrics: "Called out of darkness into Your light\nCrowned with Your goodness\nYour choicest delights" },
            { name: "VERSE", lyrics: "Formed in Your image\nBy power from above\nFilled with Your Spirit\nAnd deeply in love." },
            { name: "VERSE", lyrics: "We love You, Lord,\nWith all our heart and soul.\nAnd Lord, You are our treasure\nAnd our all." },
            { name: "VERSE", lyrics: "For You first loved us\nWith an everlasting love.\nIn You we shall live forever,\nDeeply in love." },
            { name: "VERSE", lyrics: "Called out of darkness into Your light\nCrowned with Your goodness\nYour choicest delights" },
            { name: "VERSE", lyrics: "Formed in Your image\nBy power from above\nFilled with Your Spirit\nAnd deeply in love." },
            { name: "VERSE", lyrics: "We love You, Lord,\nWith all our heart and soul.\nAnd Lord, You are our treasure\nAnd our all." },
            { name: "END", lyrics: "For You first loved us\nWith an everlasting love.\nIn You we shall live forever,\nDeeply in love." }
        ]
    },
    {
        title: "Draw In",
        sections: [
            { name: "VERSE", lyrics: "Draw me to Your presence, O Lord,\nBring me into that holy place.\nSo I may see Your glory,\nThe beauty of Your face." },
            { name: "VERSE", lyrics: "Draw me to Your presence, O Lord,\nBring me into that holy place.\nWe bow down before Your throne\nIn this holy place." },
            { name: "END", lyrics: "One thing I ask of You, O Lord,\nThe desire of my heart –\nThat I may live in Your temple, O Lord,\nFrom this day forth." }
        ]
    },
    {
        title: "Emmanuel",
        sections: [
            { name: "VERSE", lyrics: "Baby born in a stall\nLong ago now and hard to recall\nCold wind, darkness and sin\nYour welcoming from us all." },
            { name: "VERSE", lyrics: "How can it be true?\nA world grown so old now\nHow can it be new?\nSorrow’s end, Godsend,\nBorn now for me and you." },
            { name: "CHORUS", lyrics: "Emmanuel, Emmanuel, what are we\nThat You have loved us so well?\nA song on high: “A Savior’s nigh!”\nAngel hosts rejoice, Thy glory to tell." },
            { name: "VERSE", lyrics: "Lord, lead us to know.\nYou lay like a beggar,\nSo humble, so low.\nNo place for Your head\nAnd straw for a bed,\nThe glory of God to show." },
            { name: "VERSE", lyrics: "Babe on mother’s knee,\nChild so soon to be nailed to a tree.\nAll praise, till the end of our days!\nO Lord, You have set us free." },
            { name: "END", lyrics: "Emmanuel, Emmanuel, what are we\nThat You have loved us so well?\nA song on high: “A Savior’s nigh!”\nAngel hosts rejoice, Thy glory to tell." }
        ]
    },
    {
        title: "Enter In",
        sections: [
            { name: "VERSE", lyrics: "Enter in, enter in, I am free to enter in.\nIn His name, in His blood,\nIn His Spirit I come freely\nTo the throne of grace\nAnd worship face to face.\nO praise the living God!\nI am free, I am free to enter in." }
        ]
    },
    {
        title: "Everyday In Every Way",
        sections: [
            { name: "VERSE", lyrics: "Everyday, in every way\nI’m gonna lift my life and soul\nRight up to you, Lord.\nYeah, yeah, yeah\nI love you, Lord." },
            { name: "END", lyrics: "In every little thing you do give Him glory\nIn every little thing you say,\nYeah, yeah, yeah.\nIt doesn’t matter how you feel,\nJust give Him glory.\nOpen your eyes and look up to the Father\nLift up your voice and sing." }
        ]
    },
    {
        title: "Exodus 15",
        sections: [
            { name: "VERSE", lyrics: "The Lord is my strength and my song.\nAnd He is become my salvation,\nHe is my God!\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "And I shall prepare Him my heart!\n[F1](3x)[/F1]" },
            { name: "VERSE", lyrics: "The Lord, He shall reign\nForever and ever, Amen!\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "And I shall prepare Him my heart!\n[F1](3x)[/F1]" }
        ]
    },
    {
        title: "Exult You Just Ones",
        sections: [
            { name: "INTRO", lyrics: "Prepare in the wilderness\nA highway for our God!" },
            { name: "VERSE", lyrics: "Prepare in the wilderness\nA highway for our God!\nLet mountains and hills be made low\nLet the lowlands and valleys be raised.\nFor the Lord reveals His power\nThe Lord comes as a lamb\nThe Lord is born as a man!" },
            { name: "CHORUS", lyrics: "Exult, you just ones, in the Lord!\nLet hills and mountains\nBe shaken by your song,\nFor the Lord walks among us\nIn our land." },
            { name: "VERSE", lyrics: "Yahweh, the Mighty One, says this:\n“Behold, I make all things new.”\nA new day has dawned\nFor the nations of the earth.\nLet all creation rejoice!" },
            { name: "CHORUS", lyrics: "Exult, you just ones, in the Lord!\nLet hills and mountains\nBe shaken by your song,\nFor the Lord walks among us\nIn our land." },
            { name: "VERSE", lyrics: "Yahweh, the Holy One, says this:\n“I myself give you a sign:\nA virgin conceives\nAnd bears you a Son;\nHis name: Emmanuel.”" },
            { name: "END", lyrics: "Exult, you just ones, in the Lord!\nLet hills and mountains\nBe shaken by your song,\nFor the Lord walks among us\nIn our land." }
        ]
    },
    {
        title: "Father Father Into Your Hand",
        sections: [
            { name: "VERSE", lyrics: "Father, Father, into Your hand,\nSpirit, body, soul I commend.\nTake and receive, Lord, my sacrifice.\nInto Your hands I commit my life.\nFather, Your will, not mine be done.\nTo Your glory through Christ Your Son.\nTake and receive, Lord, my sacrifice.\nInto Your hands I commit my life." }
        ]
    },
    {
        title: "Fight The Good Fight",
        sections: [
            { name: "REFRAIN", lyrics: "Fight the good fight with all thy might,\nChrist is thy strength\nAnd Christ thy right.\nLay hold on life and it shall be\nThy joy and crown eternally." },
            { name: "END", lyrics: "Run the straight race\nThrough God’s good grace.\nLift up thine eyes and seek His face.\nLife with its way before thee lies,\nChrist is the path and Christ the prize." }
        ]
    },
    {
        title: "Fight The Good Fight Of Faith",
        sections: [
            { name: "REFRAIN", lyrics: "Fight the good fight of faith, people of God\nUnstained and without reproach\nBefore the eyes of men." },
            { name: "REFRAIN", lyrics: "Run the good race, you sons of the Most High\nAnd inherit the crown of life\nFrom our Lord Jesus Christ!" },
            { name: "VERSE", lyrics: "We who are not rich in the world’s goods\nHave been richly provided for\nAnd so have wealth in many good things\nAn abundance rich in joy" },
            { name: "VERSE", lyrics: "The kingdom that we build on earth\nIs not built by earthly means\nBut by the love and laws of Christ\nWho is the King of kings!" },
            { name: "REFRAIN", lyrics: "Fight the good fight of faith, people of God\nUnstained and without reproach\nBefore the eyes of men." },
            { name: "REFRAIN", lyrics: "Run the good race, you sons of the Most High\nAnd inherit the crown of life\nFrom our Lord Jesus Christ!" },
            { name: "VERSE", lyrics: "For though we live in corrupted flesh\nThat craves its lawless ways\nWe yield to Christ\nAnd the power of His word\nAnd the Spirit of Him who saves." },
            { name: "VERSE", lyrics: "Through tribulation, trial and death\nWe advance in one accord.\nTo know Him, praise Him,\nLove Him, serve Him\nIs our great reward!" },
            { name: "REFRAIN", lyrics: "Fight the good fight of faith, people of God\nUnstained and without reproach\nBefore the eyes of men." },
            { name: "REFRAIN", lyrics: "Run the good race, you sons of the Most High\nAnd inherit the crown of life\nFrom our Lord Jesus Christ!" },
            { name: "VERSE", lyrics: "When the sea turns red\nAnd the mountains into dust\nAnd the stars fall from the sky\nWhen wicked men\nFrom their thrones are cast\nAnd martyrs for vengeance cry" },
            { name: "VERSE", lyrics: "When on the clouds He shall appear\nAnd advance in bright array\nWhat glory then shall eclipse the earth\nAs Christ on judgment day!" },
            { name: "REFRAIN", lyrics: "Fight the good fight of faith, people of God\nUnstained and without reproach\nBefore the eyes of men." },
            { name: "REFRAIN", lyrics: "Run the good race, you sons of the Most High\nAnd inherit the crown of life\nFrom our Lord Jesus Christ!" },
            { name: "END", lyrics: "And inherit the crown of life\nFrom our Lord Jesus Christ!" }
        ]
    },
    {
        title: "Find Us Faithful",
        sections: [
            { name: "VERSE", lyrics: "We’re pilgrims on the journey\nOf the narrow road\nAnd those who’ve gone before us line the way\nCheering on the faithful,\nEncouraging the weary,\nTheir lives a stirring testament\nTo God’s sustaining grace." },
            { name: "VERSE", lyrics: "Surrounded by so great a cloud of witnesses\nLet us run the race not only for the prize.\nBut as those who’ve gone before us\nLet us leave to those behind us\nA heritage of faithfulness\nPassed on through godly lives." },
            { name: "REFRAIN", lyrics: "O may all who come behind us find us faithful.\nMay the fire of our devotion light their way.\nMay the footprints that we leave\nLead them to believe\nAnd the lives we live inspire them to obey.\nO may all who come behind us find us faithful." },
            { name: "VERSE", lyrics: "After all our hopes and dreams\nHave come and gone\nAnd our children sift through\nAll we’ve left behind\nMay the clues that they discover\nAnd the mem’ries they uncover\nBecome the light that leads them\nTo the road we each must find." },
            { name: "REFRAIN", lyrics: "O may all who come behind us find us faithful.\nMay the fire of our devotion light their way.\nMay the footprints that we leave\nLead them to believe\nAnd the lives we live inspire them to obey." },
            { name: "END", lyrics: "O may all who come behind us find us faithful.\nMay the fire of our devotion light their way.\nMay the footprints that we leave\nLead them to believe\nAnd the lives we live inspire them to obey.\nO may all who come behind us find us faithful." }
        ]
    },
    {
        title: "Firm Foundation",
        sections: [
            { name: "CHORUS", lyrics: "Jesus You’re my firm foundation\nI know I can stand secure\nJesus You’re my firm foundation\nI put my hope in Your holy Word\nI put my hope in Your holy Word\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "[F1](Men)[/F1] I have a living hope\n[F1](Women)[/F1] I have a living hope\n[F1](Men)[/F1] I have a future\n[F1](Women)[/F1] I have a future\n[F1](Men)[/F1] God has a plan for me\n[F1](Women)[/F1] God has a plan for me\n[F1](All)[/F1] Of this I’m sure, of this I’m sure" },
            { name: "CHORUS", lyrics: "Jesus You’re my firm foundation\nI know I can stand secure\nJesus You’re my firm foundation\nI put my hope in Your holy Word\nI put my hope in Your holy Word" },
            { name: "VERSE", lyrics: "[F1](Men)[/F1] Your Word is faithful\n[F1](Women)[/F1] Your Word is faithful\n[F1](Men)[/F1] Mighty with power\n[F1](Women)[/F1] Mighty with power\n[F1](Men)[/F1] God will deliver me\n[F1](Women)[/F1] God will deliver me\n[F1](All)[/F1] Of this I’m sure, of this I’m sure" },
            { name: "CHORUS", lyrics: "Jesus You’re my firm foundation\nI know I can stand secure\nJesus You’re my firm foundation\nI put my hope in Your holy Word\nI put my hope in Your holy Word\n[F1](2x)[/F1]" },
            { name: "CHORUS", lyrics: "Jesus You’re my firm foundation\nI know I can stand secure\nJesus You’re my firm foundation\nI put my hope in Your holy Word\nI put my hope in Your holy Word\nI put my hope in Your holy Word" },
            { name: "END", lyrics: "[F1](Women)[/F1] You're my firm foundation\n[F1](Men)[/F1] You're the rock of my salvation\n[F1](All)[/F1] You're my firm foundation" }
        ]
    },
    {
        title: "Fit For The Fight",
        sections: [
            { name: "VERSE", lyrics: "Fit for the fight, O Lord, to which You call me,\nFit for the fight, by Your grace I aim to be.\nAll of my life, I will fight the good fight\nOf the faith in Jesus Christ my Lord.\nYou have taken my life from darkness to light,\nAnd You make me fit for the fight." },
            { name: "REFRAIN", lyrics: "[F1](Men)[/F1]\nNot by power and not by might,\nBut by Your Spirit, O Lord\nShall we overcome the enemy!" },
            { name: "REFRAIN", lyrics: "[F1](Women)[/F1]\nIn all our trials and sufferings\nWe are more than conquerors\nThrough Your love for us\nWhich saves and set us free,\nThrough Your death\nAnd resurrection victory." },
            { name: "VERSE", lyrics: "Fit for the fight, O Lord, to which You call me,\nFit for the fight, by Your grace I aim to be.\nAll of my life, I will fight the good fight\nOf the faith in Jesus Christ my Lord.\nYou have taken my life from darkness to light,\nAnd You make me fit for the fight." },
            { name: "END", lyrics: "You have taken my life\nFrom darkness to light,\nAnd You make me fit for the fight.\nO Lord, make me fit for the fight." }
        ]
    },
    {
        title: "For All The Saints",
        sections: [
            { name: "VERSE", lyrics: "For all the saints\nWho from their labors rest\nWho Thee by faith before\nThe world confessed,\nThy name, O Jesus, be forever blest.\nAlleluia! Alleluia!" },
            { name: "VERSE", lyrics: "Thou wast their rock,\nTheir fortress and their might\nThou, Lord, their Captain\nIn the well-fought fight\nThou in the darkness\nDrear their one true light.\nAlleluia! Alleluia!" },
            { name: "VERSE", lyrics: "O, may Thy soldiers\nFaithful, true and bold\nFight as the saints\nWho nobly fought of old\nAnd win with them\nThe victor’s crown of gold.\nAlleluia! Alleluia!" },
            { name: "VERSE", lyrics: "O blest communion, fellowship divine!\nWe feebly struggle, they in glory shine.\nYet all are one in Thee for all are Thine.\nAlleluia! Alleluia!" },
            { name: "VERSE", lyrics: "And when the strife is fierce,\nThe warfare long\nSteals on the ear the\nDistant triumph song\nAnd hearts are brave again\nAnd arms are strong.\nAlleluia! Alleluia!" },
            { name: "VERSE", lyrics: "The golden evening\nBrightens in the west\nSoon, soon to faithful\nWarriors cometh rest\nSweet is the calm\nOf Paradise the blest.\nAlleluia! Alleluia!" },
            { name: "VERSE", lyrics: "But lo! There breaks\nA yet more glorious day.\nThe saints triumphant\nRise in bright array.\nThe King of glory\nPasses on His way.\nAlleluia! Alleluia!" },
            { name: "END", lyrics: "From earth’s wide bounds,\nFrom ocean’s farthest coast,\nThrough gates of pearl streams\nIn the countless host\nSinging to Father,\nSon and Holy Ghost.\nAlleluia! Alleluia! [F1](2x)[/F1]" }
        ]
    },
    {
        title: "For God So Loved",
        sections: [
            { name: "VERSE", lyrics: "For God so loved the world\nThat He gave His only begotten Son.\nThat whosoever believes in Him\nShould not perish but ..." },
            { name: "REFRAIN", lyrics: "Have life everlasting,\nHave life everlasting. [F1](2x)[/F1]\nFor God so loved the world\nThat He gave His only begotten Son." },
            { name: "VERSE", lyrics: "For God did not send\nHis Son into the world\nTo bring condemnation\nBut rather that through\nThe receiving of Him\nMen might find true salvation and ..." },
            { name: "REFRAIN", lyrics: "Have life everlasting,\nHave life everlasting. [F1](2x)[/F1]\nFor God so loved the world\nThat He gave His only begotten Son." },
            { name: "VERSE", lyrics: "He came into the world\nAnd He dwelt among His own\nBut His own, they would not receive.\nBut power to become the sons of God,\nHe gave to all who believed. He ..." },
            { name: "END", lyrics: "Gave life everlasting [F1](2x)[/F1]\nHis life everlasting [F1](2x)[/F1]\nFor God so loved the world\nThat He gave His only begotten Son\nHis only begotten Son. [F1](2x)[/F1]" }
        ]
    },
    {
        title: "For Such A Time As This",
        sections: [
            { name: "REFRAIN", lyrics: "[F1](Women)[/F1] For such a time as this\n[F1](Men)[/F1] We are called to give our all\n[F1](Women)[/F1] For such a time as this\n[F1](Men)[/F1] Let us leave all else behind" },
            { name: "REFRAIN", lyrics: "To follow Christ, to spread His light\nTo do not our will but His\nWe were born to live\nFor such a time as this." },
            { name: "VERSE", lyrics: "Behold a new day is dawning\nA new time now is at hand\nBut still the call of our God\nRings out in our land." },
            { name: "VERSE", lyrics: "And now our race is beginning\nAnd by God’s grace may we run\nThe course which He sets before us\nIn Jesus His Son." },
            { name: "VERSE", lyrics: "[F1](Men)[/F1]\nIf not now, when?\nIf not us, who?\nWhom is He equipping to stand?" },
            { name: "VERSE", lyrics: "[F1](Women)[/F1]\nIf not here, where?\nIf not we, who?\nWho will run our race till the end?" },
            { name: "REFRAIN", lyrics: "[F1](Women)[/F1] For such a time as this\n[F1](Men)[/F1] We are called to give our all\n[F1](Women)[/F1] For such a time as this\n[F1](Men)[/F1] Let us leave all else behind" },
            { name: "REFRAIN", lyrics: "To follow Christ, to spread His light\nTo do not our will but His\nWe were born to live\nFor such a time as this." },
            { name: "VERSE", lyrics: "Behold a new day is dawning\nA new time now is at hand\nBut still the call of our God\nRings out in our land." },
            { name: "VERSE", lyrics: "And now our race is beginning\nAnd by God’s grace may we run\nThe course which He sets before us\nIn Jesus His Son." },
            { name: "VERSE", lyrics: "[F1](Men)[/F1]\nIf not now, when?\nIf not us, who?\nWhom is He equipping to stand?" },
            { name: "VERSE", lyrics: "[F1](Women)[/F1]\nIf not here, where?\nIf not we, who?\nWho will run our race till the end?" },
            { name: "REFRAIN", lyrics: "[F1](Women)[/F1] For such a time as this\n[F1](Men)[/F1] We are called to give our all\n[F1](Women)[/F1] For such a time as this\n[F1](Men)[/F1] Let us leave all else behind" },
            { name: "REFRAIN", lyrics: "To follow Christ, to spread His light\nTo do not our will but His\nWe were born to live\nFor such a time as this." },
            { name: "END", lyrics: "We were born to live\nFor such a time as this." }
        ]
    },
    {
        title: "For The Lord He Reigns",
        sections: [
            { name: "VERSE", lyrics: "God of all ages the Mighty\nWhom heaven and earth adore\nAll of your creatures acclaim you\nAs the Maker of all\nAs the Giver of life\nAs the Sovereign and only God" },
            { name: "VERSE", lyrics: "Lord of all nations our Father\nTo whom every knee must bend\nLet all the peoples confess you\nAs their Shepherd and King\nAs their Master and Lord\nAs the Ruler of all the world" },
            { name: "CHORUS", lyrics: "For the Lord he reigns over all the earth\nAnd his name is great to the highest heaven\nAnd the firm earth shakes\nAnd the waves lie still\nAnd the hard heart breaks to his sovereign will\nFor the Lord he reigns—Amen [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Jesus Redeemer our Savior\nWho purchased us by your blood\nAll of your people acclaim you\nAs the light of the world\nAs the hope of our soul\nAs the king who will come again" },
            { name: "CHORUS", lyrics: "For the Lord he reigns over all the earth\nAnd his name is great to the highest heaven\nAnd the firm earth shakes\nAnd the waves lie still\nAnd the hard heart breaks to his sovereign will\nFor the Lord he reigns—Amen [F1](2x)[/F1]" },
            { name: "BRIDGE", lyrics: "[F1](Men)[/F1] For the Lord he reigns! Amen!\n[F1](Women)[/F1] He reigns in the highest!\n[F1](Men)[/F1] For the Lord he reigns! Amen!\n[F1](Women)[/F1] He reigns in the earth!" },
            { name: "BRIDGE", lyrics: "[F1](Men)[/F1] For the Lord he reigns! Amen!\n[F1](Women)[/F1] He reigns in the nations!\n[F1](Men)[/F1] For the Lord he reigns! Amen!\n[F1](Women)[/F1] He reigns in his Church!" },
            { name: "CHORUS", lyrics: "For the Lord he reigns over all the earth\nAnd his name is great to the highest heaven\nAnd the firm earth shakes\nAnd the waves lie still\nAnd the hard heart breaks to his sovereign will\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "For the Lord he reigns—Amen [F1](2x)[/F1]\nFor the Lord he reigns\nHe reigns—Amen" }
        ]
    },
    {
        title: "For You Are My God",
        sections: [
            { name: "REFRAIN", lyrics: "For You are my God\nYou alone are my joy\nDefend me, O Lord." },
            { name: "VERSE", lyrics: "You give marvelous comrades to me\nThe faithful who dwell in Your land\nThose who choose alien gods\nHave chosen an alien band." },
            { name: "REFRAIN", lyrics: "For You are my God\nYou alone are my joy\nDefend me, O Lord." },
            { name: "VERSE", lyrics: "You are my portion and cup\nIt is You that I claim for my prize\nYour heritage is my delight\nThe lot You have given to me." },
            { name: "REFRAIN", lyrics: "For You are my God\nYou alone are my joy\nDefend me, O Lord." },
            { name: "VERSE", lyrics: "Glad are my heart and my soul\nSecurely my body shall rest\nFor You will not leave me for dead\nNor lead Your beloved astray." },
            { name: "REFRAIN", lyrics: "For You are my God\nYou alone are my joy\nDefend me, O Lord." },
            { name: "VERSE", lyrics: "You show me the path for my life\nIn Your presence the fullness of joy\nTo be at Your right hand forever\nFor me would be happiness always." },
            { name: "END", lyrics: "For You are my God\nYou alone are my joy\nDefend me, O Lord." }
        ]
    },
    {
        title: "From Heaven The Lord Looks Down",
        sections: [
            { name: "VERSE", lyrics: "From heaven the Lord looks down\nUpon the children of men,\nTo see if there be one who does good,\nAnd keeps the law in his heart" },
            { name: "REFRAIN", lyrics: "My heart overflows, I sing my ode to the King.\nMy tongue flows like the pen of a scribe.\nI sing the praise of the Lord. Oooh." },
            { name: "VERSE", lyrics: "Our hearts are restless for Thee,\nAnd restless always shall be.\nUntil they drink of the springs of Your love,\nAnd rise restless no more." },
            { name: "REFRAIN", lyrics: "My heart overflows, I sing my ode to the King.\nMy tongue flows like the pen of a scribe.\nI sing the praise of the Lord. Oooh." },
            { name: "VERSE", lyrics: "How lovely is this place,\nThe dwelling place of the Lord.\nMy heart and soul have yearned\nAnd pined for God, the living God." },
            { name: "END", lyrics: "My heart overflows, I sing my ode to the King.\nMy tongue flows like the pen of a scribe.\nI sing the praise of the Lord. Oooh." }
        ]
    },
    {
        title: "From Heavens Light",
        sections: [
            { name: "VERSE", lyrics: "From heaven’s light a voice within cries,\n‘further up, come further in!’\nBehold the One in glory, ruling in power,\nseated upon his throne." },
            { name: "VERSE", lyrics: "So bow as mighty Cherubim\njoin ceaseless voice with Seraphim,\nSurrounded by the heavenly throng\nnow lift your voice in heaven’s song!" },
            { name: "CHORUS", lyrics: "Holy, Holy, Holy Lord, God almighty\nYou who were, who are, who will be!\nWorthy, worthy of glory, honor and majesty\nFor all things – have their being in you\nwho sit on the throne." },
            { name: "VERSE", lyrics: "And from the throne a mighty voice,\nas angels bow and saints rejoice,\nAs thunder rolls and lightnings flash\nbefore the shining sea of glass." },
            { name: "VERSE", lyrics: "The worship turns, the censor fills,\nwith prayers of saints as heaven stills,\nFor now has come the reign of God\no’er every race, nation and tongue!" },
            { name: "CHORUS", lyrics: "Holy, Holy, Holy Lord, God almighty\nYou who were, who are, who will be!\nWorthy, worthy of glory, honor and majesty\nFor all things – have their being in you" },
            { name: "END", lyrics: "You are Holy, Holy, Holy Lord, God almighty\nYou who were, who are, who will be!\nWorthy, worthy of glory, honor and majesty\nFor all things – have their being in you\nwho sit on the throne." }
        ]
    },
    {
        title: "From The Rising Of The Sun",
        sections: [
            { name: "REFRAIN", lyrics: "From the rising of the sun\nTo the setting of the same\nThe name of the Lord\nOur God is to be praised." },
            { name: "VERSE", lyrics: "When the Lord brought the captives home\nIt all seemed like a dream\nThen our mouths were filled with laughter\nAnd our lips with songs of joy." },
            { name: "REFRAIN", lyrics: "From the rising of the sun\nTo the setting of the same\nThe name of the Lord\nOur God is to be praised." },
            { name: "VERSE", lyrics: "All the people living ‘round us\nSaid, “The Lord has done great things!\nYes, the Lord has done great things\nFor us and we are glad!”" },
            { name: "REFRAIN", lyrics: "From the rising of the sun\nTo the setting of the same\nThe name of the Lord\nOur God is to be praised." },
            { name: "VERSE", lyrics: "O Lord, bring all people back\nLet your rivers overflow.\nMay all those who’ve sown in tears\nNow reap with songs of joy." },
            { name: "REFRAIN", lyrics: "From the rising of the sun\nTo the setting of the same\nThe name of the Lord\nOur God is to be praised." },
            { name: "VERSE", lyrics: "Yes, we went away with weeping\nCarrying the seed.\nNow we’ve all come home with singing\nCarrying the sheaves." },
            { name: "END", lyrics: "From the rising of the sun\nTo the setting of the same\nThe name of the Lord\nOur God is to be praised." }
        ]
    },
    {
        title: "Given A Chance",
        sections: [
            { name: "VERSE", lyrics: "In every heart a question forms:\nWhat should I do with this life?\nYes, we were made to know the answer,\nThose who seek will find." },
            { name: "VERSE", lyrics: "What can I do and\nWhat’s most important for me, for me?\nIf one single path led me on,\nHow simple life would be!" },
            { name: "REFRAIN", lyrics: "We’re given a chance to love Him,\nGiven a chance to stand for the truth.\nWe’re given a chance to live for Him,\nGiven a chance to walk in His strength." },
            { name: "REFRAIN", lyrics: "We’re given a chance\nTo love one another\nTo serve our Master and Brother\nWho died for us and sets us free!" },
            { name: "VERSE", lyrics: "How can we speak the truth to others\nWhen no one who listens is found?\nGod hears our words\nAnd he honors them all\nNone of them fall to the ground." },
            { name: "VERSE", lyrics: "We’ll tell all our friends\nSo their lives never end\nLet them hear, let them see.\nWe’ll stand for what’s right\nThough it costs us our lives,\nAnd not fear: We are free!" },
            { name: "REFRAIN", lyrics: "We’re given a chance to love Him,\nGiven a chance to stand for the truth.\nWe’re given a chance to live for Him,\nGiven a chance to walk in His strength." },
            { name: "REFRAIN", lyrics: "We’re given a chance\nTo love one another\nTo serve our Master and Brother\nWho died for us and sets us free!" },
            { name: "BRIDGE", lyrics: "Death behind and fear aside,\nWe stand ready to go.\nOur victory won, we’ve only begun\nTo run the race for the prize." },
            { name: "REFRAIN", lyrics: "We’re given a chance to love Him,\nGiven a chance to stand for the truth.\nWe’re given a chance to live for Him,\nGiven a chance to walk in His strength." },
            { name: "END", lyrics: "We’re given a chance\nTo love one another\nTo serve our Master and Brother\nWho died for us and sets us free! [F1](2x)[/F1]" }
        ]
    },
    {
        title: "Glorify Thy Name",
        sections: [
            { name: "VERSE", lyrics: "Father we love Thee, we praise Thee,\nWe adore Thee." },
            { name: "REFRAIN", lyrics: "Glorify Thy Name in all the earth\nGlorify Thy Name [F1](3x)[/F1]\nIn all the earth." },
            { name: "VERSE", lyrics: "Jesus we love Thee, we praise Thee,\nWe adore Thee." },
            { name: "REFRAIN", lyrics: "Glorify Thy Name in all the earth\nGlorify Thy Name [F1](3x)[/F1]\nIn all the earth." },
            { name: "VERSE", lyrics: "Spirit we love Thee, we praise Thee,\nWe adore Thee." },
            { name: "END", lyrics: "Glorify Thy Name in all the earth\nGlorify Thy Name [F1](3x)[/F1]\nIn all the earth." }
        ]
    },
    {
        title: "Glorious In Majesty",
        sections: [
            { name: "VERSE", lyrics: "Glorious in majesty\nHoly in His praises\nJesus, our Savior and our King.\nBorn a man yet God of old\nLet us all adore Him\nFilled with His Spirit let us sing." },
            { name: "REFRAIN", lyrics: "Living is to love Him\nServing Him to know His freedom\nCome along with us\nTo join the praise of Jesus.\nCome to Jesus now\nGo to live His word rejoicing." },
            { name: "VERSE", lyrics: "Victory He won for us\nFreeing us from darkness\nDying and rising from the dead.\nLiving with the Father now\nYet He is among us\nWe are the body, He the head." },
            { name: "REFRAIN", lyrics: "Living is to love Him\nServing Him to know His freedom\nCome along with us\nTo join the praise of Jesus.\nCome to Jesus now\nGo to live His word rejoicing." },
            { name: "VERSE", lyrics: "Brethren, we live in love\nLiving with each other\nGladly we share each other’s pain.\nYet He will not leave us so\nSoon He is returning\nTaking us back with Him to reign." },
            { name: "END", lyrics: "Living is to love Him\nServing Him to know His freedom\nCome along with us\nTo join the praise of Jesus.\nCome to Jesus now\nGo to live His word rejoicing." }
        ]
    },
    {
        title: "Glory",
        sections: [
            { name: "VERSE", lyrics: "Glory, glory in the highest, glory to the Almighty\nGlory to the Lamb of God;\nGlory to the living Word;\nGlory to the Lamb.\n\nI give glory [F1](glory)[/F1], glory [F1](glory)[/F1];\nGlory, glory to the Lamb!\nI give glory to the Lamb!" }
        ]
    },
    {
        title: "Glory And Praise",
        sections: [
            { name: "VERSE", lyrics: "Singing all the glory and praises\nO, singing with the angels\nAnd the host of heavens\nPraises to the Lord Most High\nGlory and honor and praise." },
            { name: "VERSE", lyrics: "Raising all our voice in praise\nLifting all our hands\nTo Him, our Lord and King\nLet’s give our all\nGlory and honor and praise." },
            { name: "VERSE", lyrics: "He is our God and King,\nOur loving God and King.\nWorthy are You, O Lord, of our praise." },
            { name: "END", lyrics: "He is our God and King,\nOur loving God and King.\nWe bless Your name,\nWe give You glory and praise." }
        ]
    },
    {
        title: "Glory Cry The Angel Choirs",
        sections: [
            { name: "VERSE", lyrics: "What no man could hope for now conceived\nEarth is raised to heaven on this eve.\nGod on earth and man in heaven\nWho can such a wonder fathom?\nFor where God wills, there nature yields." },
            { name: "REFRAIN", lyrics: "“Glory,” cry the angel choirs,\nGlory fills creation’s song,\nHope of hearts, most pure desire\nUnto us the Lord God is born." },
            { name: "VERSE", lyrics: "Sprung from Jesse’s root, the promised Son\nHope of prophets, our Desired One\nKey of David, Star of Light\nMan is raised to heaven’s height\nRejoice, for our Emmanuel is come!" },
            { name: "REFRAIN", lyrics: "“Glory,” cry the angel choirs\nGlory fills creation’s song\nHope of hearts, most pure desire\nUnto us the Lord God is born." },
            { name: "VERSE", lyrics: "Word of God made flesh in perfect love\nMan made Son of God to reign above\nGod descends in mortal flesh\nMan is clothed in holiness\nThe child is born to set the nations free!" },
            { name: "END", lyrics: "“Glory,” cry the angel choirs\nGlory fills creation’s song\nHope of hearts, most pure desire\nUnto us the Lord God is born." }
        ]
    },
    {
        title: "Glory To God",
        sections: [
            { name: "VERSE", lyrics: "Glory to God in the highest\nAnd peace to His people on earth.\nLord God, heavenly King,\nAlmighty God and Father,\nWe worship You, we give You thanks,\nWe praise You for Your glory." },
            { name: "VERSE", lyrics: "Lord Jesus Christ, the only Son of the Father,\nLord God, Lamb of God,\nYou take away the sins of the world\nHave mercy on us.\nYou are seated\nAt the right hand of the Father;\nReceive our prayer." },
            { name: "END", lyrics: "For You alone are the Holy One,\nYou alone are the Lord.\nYou alone are the most high, Jesus Christ.\nWith the Holy Spirit\nIn the glory of God the Father,\nAmen. Amen." }
        ]
    },
    {
        title: "Your Glorious Grace",
        sections: [
            { name: "VERSE", lyrics: "We kneel before you Father\nFrom whom your sons and daughters have their name\nWe have your name\nFor from the world's foundation\nYou chose us to be blameless in your sight" },
            { name: "VERSE", lyrics: "And in your love you destined us\nTo be your own true children\nThat we might live to praise your glorious grace" },
            { name: "CHORUS", lyrics: "Then Father make us one\nFather make us one\nThat all might live to praise your glorious grace\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "You lavished love upon us\nYou sent us your beloved only Son\nYour only Son\nIn him we have redemption\nForgiveness of transgressions by his blood\nBy his blood" },
            { name: "VERSE", lyrics: "And you made known the mystery\nOf your great will and pleasure\nTo bring all things together under him" },
            { name: "CHORUS", lyrics: "Then Father make us one\nFather make us one\nThat all might live to praise your glorious grace" },
            { name: "END", lyrics: "Then Father make us one\nFather make us one\nThat all might live to praise your glorious grace [F1](2x)[/F1]" }
        ]
    },
    {
        title: "God Alone",
        sections: [
            { name: "VERSE", lyrics: "God alone, God alone\nIn Your courts O my Lord, is my home.\nYou are my treasure, my portion,\nDelight of my soul." },
            { name: "VERSE", lyrics: "My life, my salvation, my fortress,\nMy God and my all.\nO my soul, claim nothing as your own,\nFor you, there is God and God alone!" },
            { name: "VERSE", lyrics: "God alone, God alone\nIn Your courts O my Lord, is my home.\nYou are my treasure, my portion,\nDelight of my soul." },
            { name: "VERSE", lyrics: "My life, my salvation, my fortress,\nMy God and my all.\nO my soul, claim nothing as your own,\nFor you, there is God and God alone!" },
            { name: "VERSE", lyrics: "God alone, God alone\nIn Your courts O my Lord, is my home.\nYou are my treasure, my portion,\nDelight of my soul." },
            { name: "END", lyrics: "My life, my salvation, my fortress,\nMy God and my all.\nO my soul, claim nothing as your own,\nFor you, there is God and God alone! [F1](2x)[/F1]" }
        ]
    },
    {
        title: "God And Man At Table Are Sat Down",
        sections: [
            { name: "VERSE", lyrics: "O welcome all ye noble saints of old,\nAs now before your very eyes unfold.\nThe wonders all so long ago foretold." },
            { name: "REFRAIN", lyrics: "God and man at table are sat down. [F1](3x)[/F1]" },
            { name: "VERSE", lyrics: "Elders, martyrs, all are falling down.\nProphets, patriarchs are gath’ring ‘round.\nWhat angels longed to see,\nNow man has found." },
            { name: "REFRAIN", lyrics: "God and man at table are sat down. [F1](3x)[/F1]" },
            { name: "VERSE", lyrics: "Who is this who spreads the vict’ry feast?\nWho is this who makes our warring cease?\nJesus, risen Savior, Prince of Peace." },
            { name: "REFRAIN", lyrics: "God and man at table are sat down. [F1](3x)[/F1]" },
            { name: "VERSE", lyrics: "Beggars, lame and harlots also here.\nRepentant publicans are drawing near;\nWayward sons come home without a fear." },
            { name: "REFRAIN", lyrics: "God and man at table are sat down. [F1](3x)[/F1]" },
            { name: "VERSE", lyrics: "Worship in the presence of the Lord.\nWith joyful songs and hearts in one accord;\nAnd let our Host at table be adored." },
            { name: "REFRAIN", lyrics: "God and man at table are sat down. [F1](3x)[/F1]" },
            { name: "VERSE", lyrics: "When at last this earth shall pass away,\nWhen Jesus and His bride are one to stay\nThe feast of love has just begun that day." },
            { name: "END", lyrics: "God and man at table are sat down. [F1](3x)[/F1]" }
        ]
    },
    {
        title: "God Is Good",
        sections: [
            { name: "VERSE", lyrics: "God is good, we sing and shout it.\nGod is good, we celebrate.\nGod is good, no more we doubt it.\nGod is good, we know it’s true" },
            { name: "END", lyrics: "And when I think of His love for me\nMy heart fills with praise\nAnd I feel like dancing.\nFor in His heart there is room for me\nAnd I run with arms open wide." }
        ]
    },
    {
        title: "God Is My Refuge",
        sections: [
            { name: "VERSE", lyrics: "God is my refuge,\nmy trust and my deliverer.\nA help close at hand in times of distress." },
            { name: "VERSE", lyrics: "So I will lift my eyes unto the mountains,\nFrom whence comes my help?\nFrom the Lord, enthroned on high;\nHe is my rock and my salvation, I’ll stand firm." },
            { name: "VERSE", lyrics: "God is my refuge,\nmy trust and my deliverer.\nA help close at hand in times of distress." },
            { name: "VERSE", lyrics: "So I will lift my eyes unto the mountains,\nFrom whence comes my help?\nFrom the Lord, enthroned on high;\nHe is my rock and my salvation, I’ll stand firm.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "God Is Raising An Army",
        sections: [
            { name: "REFRAIN", lyrics: "God is raising an army\nA people to follow His word.\nSound the horns\nAnd raise the vict’ry shout\nProclaim the day of the Lord!\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "All of creation longs for the day\nTo shed her humiliation\nTo leap with boundless joy\nFrom her broken chains." },
            { name: "REFRAIN", lyrics: "God is raising an army\nA people to follow His word.\nSound the horns\nAnd raise the vict’ry shout\nProclaim the day of the Lord!\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "As watchmen wait for morning\nSo we await our God.\nLet all who breathe now praise Him\nLet even stones break forth\nWith songs of praise!" },
            { name: "REFRAIN", lyrics: "God is raising an army\nA people to follow His word.\nSound the horns\nAnd raise the vict’ry shout\nProclaim the day of the Lord!\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Lord, smash the walls of darkness,\nAnnihilate the foe.\nEstablish now your Kingdom,\nGrant one day that\nWe will see your face." },
            { name: "REFRAIN", lyrics: "God is raising an army\nA people to follow His word.\nSound the horns\nAnd raise the vict’ry shout\nProclaim the day of the Lord!\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Though earth shake beneath us\nThough sun and moon disappear\nOur God will be our fortress\nThe Lamb of God\nWill be our lasting light." },
            { name: "END", lyrics: "God is raising an army\nA people to follow His word.\nSound the horns\nAnd raise the vict’ry shout\nProclaim the day of the Lord!\n[F1](3x)[/F1]" }
        ]
    },
    {
        title: "God The Blessed And Only Sovereign",
        sections: [
            { name: "VERSE", lyrics: "God the blessed and only sovereign\nKing of kings and Lord of lords\nDwells in majesty immortal\nAnd in light unapproachable\nHim no eye has seen\nAnd no one can see." },
            { name: "END", lyrics: "To Him be honor and eternal dominion\nHonor and dominion forever!\nTo Him be honor and eternal dominion\nHonor and dominion forever! Amen!" }
        ]
    },
    {
        title: "God Will Make A Way",
        sections: [
            { name: "REFRAIN", lyrics: "God will make a way\nWhere there seems to be no way.\nHe works in ways we cannot see\nHe will make a way for me." },
            { name: "REFRAIN", lyrics: "He will be my guide\nHold me closely to His side.\nWith love and strength\nFor each new day\nHe will make a way.\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "By the roadway in the wilderness\nHe’ll lead me.\nRivers in the desert will I see.\nHeaven and earth will fade\nBut His words will still remain.\nHe will do something new today." }
        ]
    },
    {
        title: "God With Us",
        sections: [
            { name: "VERSE", lyrics: "He walked where I walked [F1](echo)[/F1]\nHe stood where I stand [F1](echo)[/F1]\nHe felt what I feel [F1](echo)[/F1]\nHe understands [F1](echo)[/F1]" },
            { name: "VERSE", lyrics: "He knows my frailties [F1](echo)[/F1]\nShared my humanity [F1](echo)[/F1]\nTempted in every way [F1](echo)[/F1]\nYet did not sin. [F1](echo)[/F1]" },
            { name: "REFRAIN", lyrics: "God with us, so close to us\nGod with us, Emmanuel. [F1](2x)[/F1]\n Emmanuel!" },
            { name: "VERSE", lyrics: "One of the hated race [F1](echo)[/F1]\nStung by the prejudice [F1](echo)[/F1]\nSuffering injustice [F1](echo)[/F1]\nYet He forgives. [F1](echo)[/F1]" },
            { name: "VERSE", lyrics: "Wept for my wasted years [F1](echo)[/F1]\nPaid for my wickedness [F1](echo)[/F1]\nHe died in my place [F1](echo)[/F1]\nThat I might live. [F1](echo)[/F1]" },
            { name: "END", lyrics: "God with us, so close to us\nGod with us, Emmanuel. [F1](4x)[/F1]\n Emmanuel! [F1](3x)[/F1]" }
        ]
    },
    {
        title: "Great And Marvelous",
        sections: [
            { name: "VERSE", lyrics: "Great and marvelous are all Your deeds\nO Lord our God Almighty.\nJust and true are all Your ways\nYou are King throughout all ages\nThroughout all ages!" },
            { name: "REFRAIN", lyrics: "We, Your people, now proclaim You\nAnd sing Your glorious praise:\n[F1](Women)[/F1] Blessing and honor,\nGlory and power\n[F1](Men)[/F1] Blessing, honor, glory, power\n[F1](All)[/F1] Be to our God forever." },
            { name: "REFRAIN", lyrics: "[F1](Women)[/F1] Blessing and honor,\nGlory and power\n[F1](Men)[/F1] Blessing, honor, glory, power\n[F1](All)[/F1] Be to our God forever. Amen!" },
            { name: "VERSE", lyrics: "Who will not fear You, O Lord,\nAnd bring glory to Your name?\nYou are holy!\nAll the nations will bow down\nAnd worship at Your throne,\nYour glorious throne!" },
            { name: "REFRAIN", lyrics: "We, Your people, now proclaim You\nAnd sing Your glorious praise:\n[F1](Women)[/F1] Blessing and honor,\nGlory and power\n[F1](Men)[/F1] Blessing, honor, glory, power\n[F1](All)[/F1] Be to our God forever." },
            { name: "REFRAIN", lyrics: "[F1](Women)[/F1] Blessing and honor,\nGlory and power\n[F1](Men)[/F1] Blessing, honor, glory, power\n[F1](All)[/F1] Be to our God forever.\n[F1](2x)[/F1]\nAmen!" }
        ]
    },
    {
        title: "Great And Wonderful",
        sections: [
            { name: "VERSE", lyrics: "We, Your people, now proclaim you\nAnd sing Your glorious praise:\n[F1](Women)[/F1] Blessing and honor,\nGlory and power\n[F1](Men)[/F1] Blessing, honor, glory, power\n[F1](Both)[/F1] Be to our God forever. Amen!" },
            { name: "END", lyrics: "Who shall not fear and glorify\nThy name, O Lord?\nFor Thou alone art Holy, Thou alone!\nAll the nations shall\nCome and worship Thee\nFor Thy glory shall be revealed.\nHallelujah! [F1](3x)[/F1] Amen! La, la, la, la …" }
        ]
    },
    {
        title: "Great Is Thy Faithfulness",
        sections: [
            { name: "VERSE", lyrics: "Great is Thy faithfulness,\nO God my Father\nThere is no shadow of turning with thee\nThou changest not\nThy compassions they fail not\nAs Thou hast been, Thou forever wilt be." },
            { name: "REFRAIN", lyrics: "Great is Thy faithfulness! [F1](2x)[/F1]\nMorning by morning new mercies I see.\nAll I have needed\nThy hand hath provided.\nGreat is Thy faithfulness, Lord, unto me!" },
            { name: "VERSE", lyrics: "Summer and winter and\nSpringtime and harvest\nSun, moon and stars\nIn their courses above\nJoin with all nature in manifold witness\nTo Thy great faithfulness,\nMercy and love." },
            { name: "REFRAIN", lyrics: "Great is Thy faithfulness! [F1](2x)[/F1]\nMorning by morning new mercies I see.\nAll I have needed\nThy hand hath provided.\nGreat is Thy faithfulness, Lord, unto me!" },
            { name: "VERSE", lyrics: "Pardon for sin and a peace that endureth\nThy own dear presence\nTo cheer and to guide\nStrength for today\nAnd bright hope for tomorrow\nBlessings all mine\nWith ten thousand beside." },
            { name: "END", lyrics: "Great is Thy faithfulness! [F1](2x)[/F1]\nMorning by morning new mercies I see.\nAll I have needed\nThy hand hath provided.\nGreat is Thy faithfulness, Lord, unto me!" }
        ]
    },
    {
        title: "Hallelujah He Is Risen",
        sections: [
            { name: "REFRAIN", lyrics: "Hallelujah! Hallelujah!\nHallelujah, He is risen!\nHallelujah! Hallelujah!\nHallelujah, He is risen!" },
            { name: "VERSE", lyrics: "Behold the stone that’s rolled away.\nBehold the shroud and the empty grave.\nBehold the Lamb who paid this price.\nBehold your Savior, Jesus Christ!" },
            { name: "REFRAIN", lyrics: "Hallelujah! Hallelujah!\nHallelujah, He is risen!\nHallelujah! Hallelujah!\nHallelujah, He is risen!" },
            { name: "VERSE", lyrics: "The power of death\nCould not contain the Lamb.\nThe chains of sin and death\nCould not bind Him down." },
            { name: "VERSE", lyrics: "O death, where is your sting\nNow the tomb is empty?\nO death, where is your victory\nNow that Jesus lives!" },
            { name: "REFRAIN", lyrics: "Hallelujah! Hallelujah!\nHallelujah, He is risen!\nHallelujah! Hallelujah!\nHallelujah, He is risen!" },
            { name: "VERSE", lyrics: "Behold His feet once crucified\nTouch His hands and wounded side.\nBehold the Lamb who bled and died\nBehold your Savior now glorified!" },
            { name: "END", lyrics: "Hallelujah! Hallelujah!\nHallelujah, He is risen!\nHallelujah! Hallelujah!\nHallelujah, He is risen!\nHe is risen from the dead!" }
        ]
    },
    {
        title: "Hallelujah King Of Kings",
        sections: [
            { name: "VERSE", lyrics: "Hallelujah, Hallelujah!\nYour death was not the end.\nAlive You reign in glory now,\nUpon Your throne in heav’n." },
            { name: "VERSE", lyrics: "We look to You and give You praise,\nWith saints and angels voices raise.\nYou are Lord! Our only Lord!\nVictorious King of kings!" },
            { name: "VERSE", lyrics: "The battle won, the price for sin\nNow paid upon the cross;\nWithout Your death, the gates of heav’n\nWould be forever closed." },
            { name: "VERSE", lyrics: "Lord Jesus Christ, we give You praise;\nIn love You chose to take our place.\nYou are Lord! Our only Lord!\nVictorious King of kings!" },
            { name: "VERSE", lyrics: "And so we set our gaze\nUpon the glory that awaits.\nBefore Your throne, we’ll take our place,\nAnd see You face to face.\nOur Risen Christ, we give You praise,\nIn acclamation hands we raise.\nYou are Lord! Our only Lord!" },
            { name: "END", lyrics: "Hallelujah! King of kings! [F1](3x)[/F1]" }
        ]
    },
    {
        title: "Happy Is The Man",
        sections: [
            { name: "CHORUS", lyrics: "Happy is the man who loves the Lord\nHappy is the man who walks in His ways.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "On the upright the Lord shall shine\nLike a lamp to light the dark.\nHe will be slow to anger\nFor He is God, not man." },
            { name: "CHORUS", lyrics: "Happy is the man who loves the Lord\nHappy is the man who walks in His ways.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "And the Lord shall be his refuge\nLike a stronghold from the foe.\nHe shall raise the lowly,\nThe proud He shall make low." },
            { name: "CHORUS", lyrics: "Happy is the man who loves the Lord\nHappy is the man who walks in His ways.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "He shall shatter the chains that bind you\nSet you free among the clouds.\nSin shall no more hold you\nFor He is God, not man." },
            { name: "END", lyrics: "Happy is the man who loves the Lord\nHappy is the man who walks in His ways.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "He Has Covered Himself In Glory",
        sections: [
            { name: "REFRAIN", lyrics: "Let us sing to the Lord!\nHe has covered Himself in glory!\nLet us sing to the Lord!\nHe has covered Himself in praise!\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "I will sing to the Lord\nHe is gloriously triumphant\nRider, horse and chariot\nHas He hurled into the sea!" },
            { name: "VERSE", lyrics: "My strength and my courage\nIs the Lord, my Savior.\nHe is my God and the God\nOf my fathers – I exalt Him!" },
            { name: "REFRAIN", lyrics: "Let us sing to the Lord!\nHe has covered Himself in glory!\nLet us sing to the Lord!\nHe has covered Himself in praise!" },
            { name: "VERSE", lyrics: "A man of war is the Lord\nAnd Lord is His name.\nThe might of Pharaoh’s chariots\nHas sunk to the depths like a stone!" },
            { name: "VERSE", lyrics: "By Your right hand, O Lord,\nMagnificent in power,\nBy Your right hand, O Lord,\nThe strength of our enemies\nIs shattered!" },
            { name: "REFRAIN", lyrics: "Let us sing to the Lord!\nHe has covered Himself in glory!\nLet us sing to the Lord!\nHe has covered Himself in praise!" },
            { name: "VERSE", lyrics: "The people You chose\nYou redeemed, and planted them on\nYour holy mountain.\nThe place where You made Your seat,\nThe dwelling place of our God!" },
            { name: "VERSE", lyrics: "From His sanctuary,\nEstablished by His hand,\nSeated in glory, the Lord shall reign\nForever and ever!" },
            { name: "REFRAIN", lyrics: "Let us sing to the Lord!\nHe has covered Himself in glory!\nLet us sing to the Lord!\nHe has covered Himself in praise!\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "He has covered Himself in glory!\nHe has covered Himself in praise!" }
        ]
    },
    {
        title: "He Is Before All Things",
        sections: [
            { name: "VERSE", lyrics: "He is the image of the invisible God,\nFirst-born of all creation.\nIn Him all was made,\nThe heavens and earth,\nAll things created through Him." },
            { name: "REFRAIN", lyrics: "He is before all things,\nAnd in Him all things hold together.\nIn Him the fullness of God\nWas pleased to dwell.\nHe is the glory of God,\nBearing the stamp of His nature,\nUpholding the universe by His word." },
            { name: "VERSE", lyrics: "And through His being\nAll things are made one\nAll that was once divided\nHeaven and earth united to Him\nPeace by the blood of His cross." },
            { name: "END", lyrics: "He is before all things\nAnd in Him all things hold together.\nIn Him the fullness of God\nWas pleased to dwell.\nHe is the glory of God,\nBearing the stamp of His nature,\nUpholding the universe by His word.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "He Is Coming",
        sections: [
            { name: "VERSE", lyrics: "The day of the Lord is at hand\nSee Him riding on a white horse\nThe armies of heaven behind Him\nAnd the sword of the Spirit in His hand\nHe will smite His enemies!\nHallelujah! Hallelujah!\nHallelujah, He is coming!" }
        ]
    },
    {
        title: "He Is Exalted",
        sections: [
            { name: "VERSE", lyrics: "He is exalted\nThe King is exalted on high,\nI will praise Him!\nHe is exalted, forever exalted\nAnd I will praise His name!" },
            { name: "REFRAIN", lyrics: "He is the Lord,\nForever His truth shall reign.\nHeaven and earth\nRejoice in His holy name.\nHe is exalted,\nThe King is exalted on high." },
            { name: "VERSE", lyrics: "He is exalted\nThe King is exalted on high,\nI will praise Him!\nHe is exalted, forever exalted\nAnd I will praise His name!" },
            { name: "REFRAIN", lyrics: "He is the Lord,\nForever His truth shall reign.\nHeaven and earth\nRejoice in His holy name.\nHe is exalted,\nThe King is exalted on high.\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "He is exalted,\nThe King is exalted on high." }
        ]
    },
    {
        title: "He Is Lord",
        sections: [
            { name: "VERSE", lyrics: "He is Lord, He is Lord.\nHe is risen from the dead, and He is Lord.\nEvery knee shall bow\nAnd every tongue confess,\nThat Jesus Christ is Lord." }
        ]
    },
    {
        title: "Hear O Israel",
        sections: [
            { name: "VERSE", lyrics: "Hear, O Israel,\nThe Lord your God is One." },
            { name: "REFRAIN", lyrics: "And you shall love the Lord your God\nWith all your heart and with all your soul,\nWith all your mind\nAnd with all your strength." },
            { name: "VERSE", lyrics: "And these words which I command\nShall be upon your heart." },
            { name: "REFRAIN", lyrics: "And you shall love the Lord your God\nWith all your heart and with all your soul,\nWith all your mind\nAnd with all your strength." },
            { name: "VERSE", lyrics: "You shall bind them on your hand\nAnd you shall teach them your sons." },
            { name: "END", lyrics: "And you shall love the Lord your God\nWith all your heart and with all your soul,\nWith all your mind\nAnd with all your strength." }
        ]
    },
    {
        title: "Hear The Herald Voice Resounding",
        sections: [
            { name: "VERSE", lyrics: "Hear the herald voice resounding,\n“Christ is near,” it seems to say.\nCast away the dreams of darkness,\nWelcome Christ, the light of day." },
            { name: "VERSE", lyrics: "Wakened by this solemn warning,\nLet the earth-bound soul arise.\nChrist, her sun, all sloth dispelling,\nShines upon the morning skies." },
            { name: "VERSE", lyrics: "See, the Lamb so long expected\nComes with pardon down from heav’n,\nHasten now with tears of sorrow,\nOne and all to be forgiv’n." },
            { name: "VERSE", lyrics: "So when next He comes in glory,\nShrouding all the earth in fear,\nMay He then as our defender,\nOn the clouds of heav’n appear." },
            { name: "END", lyrics: "Honor, glory, virtue, merit\nTo the Father and the Son\nWith the co-eternal Spirit\nWhile eternal ages run." }
        ]
    },
    {
        title: "Heart Of Worship",
        sections: [
            { name: "VERSE", lyrics: "When the music fades\nAll is stripped away\nAnd I simply come\nLonging just to bring\nSomething that’s of worth\nThat will bless Your heart." },
            { name: "PRE-CHORUS", lyrics: "I’ll bring You more than a song\nFor a song in itself\nIs not what You have required.\nYou search much deeper within\nThrough the way things appear\nYou’re looking into my heart." },
            { name: "CHORUS", lyrics: "I’m coming back to the heart of worship\nAnd it’s all about You\nIt’s all about You, Jesus.\nI’m sorry, Lord, for the things I’ve made it\nWhen it’s all about You\nIt’s all about You, Jesus." },
            { name: "VERSE", lyrics: "King of endless worth\nNo one could express\nHow much You deserve.\nThough I’m weak and poor\nAll I have is Yours\nEvery single breath." },
            { name: "PRE-CHORUS", lyrics: "I’ll bring You more than a song\nFor a song in itself\nIs not what You have required.\nYou search much deeper within\nThrough the way things appear\nYou’re looking into my heart." },
            { name: "CHORUS", lyrics: "I’m coming back to the heart of worship\nAnd it’s all about You\nIt’s all about You, Jesus.\nI’m sorry, Lord, for the things I’ve made it\nWhen it’s all about You\nIt’s all about You, Jesus." },
            { name: "END", lyrics: "I’m coming back to the heart of worship\nAnd it’s all about You\nIt’s all about You, Jesus.\nI’m sorry, Lord, for the things I’ve made it\nWhen it’s all about You\nIt’s all about You, Jesus." }
        ]
    },
    {
        title: "Hebrews 12",
        sections: [
            { name: "CHORUS", lyrics: "Let us run with perseverance\nThe race that is set before us.\nLet us look to Jesus,\nThe pioneer and perfector of our faith." },
            { name: "CHORUS", lyrics: "So to endure the cross\nAnd to stand against all temptation.\nLet us put aside\nEvery sin that would hinder us." },
            { name: "VERSE", lyrics: "For He like us in all things but for sin\nWhen He took upon Himself\nOur mortal nature in His flesh,\nStood against the fiery darts\nOf our ancient enemy" },
            { name: "VERSE", lyrics: "And proved Himself the Son of God\nThrough His obedience.\nWhere Adam failed to stand,\nJesus is the victor!\nThrough His trials and suffering\nHe treads the serpent’s head." },
            { name: "CHORUS", lyrics: "Let us run with perseverance\nThe race that is set before us.\nLet us look to Jesus,\nThe pioneer and perfector of our faith." },
            { name: "CHORUS", lyrics: "So to endure the cross\nAnd to stand against all temptation.\nLet us put aside\nEvery sin that would hinder us." },
            { name: "VERSE", lyrics: "Consider Him who bore\nSuch rage from sinful men\nAnd likewise arm yourselves in Christ.\nIn your struggle against sin\nYou have yet to shed your blood" },
            { name: "VERSE", lyrics: "You have yet to gain the prize\nOf those who conquer.\nFor if we died with Him\nThen we shall surely live with Him\nSo let us not grow weary of the fray." },
            { name: "CHORUS", lyrics: "Let us run with perseverance\nThe race that is set before us.\nLet us look to Jesus,\nThe pioneer and perfector of our faith." },
            { name: "CHORUS", lyrics: "So to endure the cross\nAnd to stand against all temptation.\nLet us put aside\nEvery sin that would hinder us." },
            { name: "VERSE", lyrics: "Therefore strengthen feeble knees\nAnd failing arms\nPutting on the garments of salvation\nBeing clothed in Jesus\nAnd in the armor of His might" },
            { name: "VERSE", lyrics: "Striving to attain the crown of life\nThat God has promised us\nFor the Coming One is faithful\nAnd His grace does not delay\nIn Him our hope, our righteousness,\nOur glory and our way!" },
            { name: "CHORUS", lyrics: "Let us run with perseverance\nThe race that is set before us.\nLet us look to Jesus,\nThe pioneer and perfector of our faith." },
            { name: "END", lyrics: "So to endure the cross\nAnd to stand against all temptation.\nLet us put aside\nEvery sin that would hinder us." }
        ]
    },
    {
        title: "Heaven Is My Home",
        sections: [
            { name: "VERSE", lyrics: "Heaven is my home,\nI am Kingdom-bound.\nI am not my own, for once I was lost\nBut in Christ I am found." },
            { name: "VERSE", lyrics: "All my treasure on high safely set apart\nFor in heaven I find\nThe fount of my joy,\nThe source of my life,\nThe first love of my heart." },
            { name: "VERSE", lyrics: "Heaven is my home,\nI am Kingdom-bound.\nI am not my own, for once I was lost\nBut in Christ I am found." },
            { name: "END", lyrics: "All my treasure on high safely set apart\nFor in heaven I find\nThe fount of my joy,\nThe source of my life,\nThe first love of my heart.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Here Is My Life",
        sections: [
            { name: "VERSE", lyrics: "Behold, the eyes of the Lord\nSearch the face of the earth\nTo find hearts that are given,\nSeeking souls to make pure." },
            { name: "VERSE", lyrics: "To enflame this world’s darkness,\nTo warm cold hearts with grace.\nAm I here, Lord, for such a time,\nFor such a place?" },
            { name: "REFRAIN", lyrics: "Here is my life, Lord,\nHeart, mind and body.\nMy soul’s surrender, take it for your own.\nAnd You will lead, I know,\nWhere only love can go.\nHere is my life, O Lord, my life for You." },
            { name: "VERSE", lyrics: "There is a love stronger than death,\nPassion deeper than this life.\nIn the heart’s purest longing,\nLies the pearl of great price." },
            { name: "VERSE", lyrics: "One Love all loves surpassing,\nTrue surrender the cost.\nAm I here, Lord, to bear this love\nAnd share its cross?" },
            { name: "REFRAIN", lyrics: "Here is my life, Lord,\nHeart, mind and body.\nMy soul’s surrender, take it for your own.\nAnd You will lead, I know,\nWhere only love can go.\nHere is my life, O Lord …" },
            { name: "END", lyrics: "Here is my life, Lord,\nHeart, mind and body.\nMy soul’s surrender, take it for your own.\nAnd You will lead, I know,\nWhere only love can go.\nHere is my life, O Lord, my life for You." }
        ]
    },
    {
        title: "Hevenu Shalom Aleikhem",
        sections: [
            { name: "VERSE", lyrics: "Hevenu shalom aleikhem [F1](3x)[/F1]\nHevenu shalom, shalom,\nShalom, aleikhem." }
        ]
    },
    {
        title: "Hinei Mah Tov",
        sections: [
            { name: "VERSE", lyrics: "Hinei mah tov umah naim,\nShevet achim gam yachad. [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Hinei mah tov, Hinei mah tov,\nLai lai lai lai lai lai lai lai lai lai … [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Behold how good and pleasant it is\nFor brothers to dwell together. [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "In unity, in unity,\nLai lai lai lai lai lai lai lai lai lai … [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Hinei mah tov umah naim,\nShevet achim gam yachad. [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Hinei mah tov, Hinei mah tov,\nLai lai lai lai lai lai lai lai lai lai … [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Lai lai lai lai lai lai lai lai lai lai … [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Behold how good and pleasant it is\nFor brothers to dwell together. [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "In unity, in unity,\nLai lai lai lai lai lai lai lai lai lai … [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Behold how good and pleasant it is\nFor brothers to dwell together. [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "In unity, in unity,\nLai lai lai lai lai lai lai lai lai lai … [F1](2x)[/F1]" },
            { name: "END", lyrics: "Lai lai lai lai lai lai lai lai lai lai … [F1](2x)[/F1]" }
        ]
    },
    {
        title: "His Name Will Be Called",
        sections: [
            { name: "VERSE", lyrics: "The people who walked in darkness\nHave seen a great light.\nThe people who dwelt\nIn a darkened land,\nOn them light has shined." },
            { name: "PRE-CHORUS", lyrics: "For unto us a Child is born,\nUnto us a Son is given.\nHe will reign upon the earth,\nHe will reign in the heavens." },
            { name: "CHORUS", lyrics: "And His name will be called Wonderful,\nHis name will be called Counselor,\nHis name will called Mighty God,\nEverlasting Father, Prince of Peace." },
            { name: "VERSE", lyrics: "We who walked in darkness\nhave seen a great light.\nWe who dwelt in a darkened land,\nOn us a light has shined." },
            { name: "PRE-CHORUS", lyrics: "For unto us a Child is born,\nUnto us a Son is given.\nHe will reign upon the earth,\nHe will reign in the heavens." },
            { name: "CHORUS", lyrics: "And His name will be called Wonderful,\nHis name will be called Counselor,\nHis name will called Mighty God,\nEverlasting Father, Prince of Peace." },
            { name: "BRIDGE", lyrics: "Every valley will be lifted up.\nEvery mountain and hill be made low.\nMake straight in the desert\nA highway for our God!" },
            { name: "END", lyrics: "And His name will be called Wonderful,\nHis name will be called Counselor,\nHis name will called Mighty God,\nEverlasting Father, Prince of Peace." }
        ]
    },
    {
        title: "Hosanna",
        sections: [
            { name: "VERSE", lyrics: "Hosanna! Hosanna!\nHosanna in the highest!\nLord, we lift up Your name,\nWith hearts full of praise.\nBe exalted, O Lord, our God.\nHosanna in the highest!" },
            { name: "END", lyrics: "Glory! Glory!\nGlory to the King of kings!\nLord, we lift up Your name,\nWith hearts full of praise.\nBe exalted, O Lord, our God.\nGlory to the King of kings!" }
        ]
    },
    {
        title: "Hosea",
        sections: [
            { name: "VERSE", lyrics: "Come back to me with all your heart\nDon’t let fear keep us apart.\nTrees do bend though straight and tall\nSo must we to other’s call." },
            { name: "REFRAIN", lyrics: "Long have I waited\nFor your coming home to me\nAnd living deeply our new life." },
            { name: "VERSE", lyrics: "The wilderness will lead you\nTo your heart where I will speak.\nIntegrity and justice\nWith tenderness, you shall know.\nYou shall sleep secure with peace,\nFaithfulness will be your joy." },
            { name: "END", lyrics: "Long have I waited\nFor your coming home to me\nAnd living deeply our new life." }
        ]
    },
    {
        title: "Holy Is The Lord",
        sections: [
            { name: "VERSE", lyrics: "Holy is the Lord [F1](4x)[/F1] [F1](echo)[/F1]\nRighteousness and mercy [F1](echo)[/F1]\nJudgment and grace [F1](echo)[/F1]\nFaithfulness and sovereignty [F1](echo)[/F1]\nHoly is the Lord [F1](2x)[/F1] [F1](echo)[/F1]" }
        ]
    },
    {
        title: "Holy Is The One Who Saves",
        sections: [
            { name: "VERSE", lyrics: "Calling out to the heavens,\nWe will rise and lift up a battle cry\nSee the one who is leading\nWe stand and make ready\nOur shields and our swords to fight." },
            { name: "REFRAIN", lyrics: "Holy is the One who saves\nMighty is our God\nWhose power we proclaim\nFighting for the glory of His name\nIn His truth is our victory,\nOur purpose and our way." },
            { name: "REFRAIN", lyrics: "A mighty fortress stands before us.\nBehold our shield!\nLook upon the face of the Anointed One.\nOur Lord, King and Conqueror, leads us on!" },
            { name: "VERSE", lyrics: "He, our strength and our portion,\nLifted high over the enemies.\nStrong, we stand with each other,\nBoth sister and brother,\nGiving Him thanks and praise." },
            { name: "REFRAIN", lyrics: "Holy is the One who saves,\nMighty is our God\nWhose power we proclaim\nFighting for the glory of His name\nIn His truth is our victory,\nOur purpose and our way." },
            { name: "REFRAIN", lyrics: "A mighty fortress stands before us.\nBehold our shield!\nLook upon the face of the Anointed One.\nOur Lord, King and Conqueror, leads us on!" },
            { name: "REFRAIN", lyrics: "Holy is the One who saves,\nMighty is our God\nWhose power we proclaim\nFighting for the glory of His name\nIn His truth is our victory,\nOur purpose and our way." },
            { name: "REFRAIN", lyrics: "A mighty fortress stands before us.\nBehold our shield!\nLook upon the face of the Anointed One.\nOur Lord, King and Conqueror, leads us on!" },
            { name: "END", lyrics: "King and Conqueror, leads us on!" }
        ]
    },
    {
        title: "Holy Mighty Everlasting",
        sections: [
            { name: "REFRAIN", lyrics: "Holy, mighty, everlasting King\nAnd Lord of all.\nHoly, mighty, everlasting King\nAnd Sovereign God!" },
            { name: "VERSE", lyrics: "Great is Your name\nAnd glorious Your deeds\nFearful are your wonders!\nMighty to save\nJudge of the earth\nRuler of the nations!" },
            { name: "REFRAIN", lyrics: "Holy, mighty, everlasting King\nAnd Lord of all.\nHoly, mighty, everlasting King\nAnd Sovereign God!" },
            { name: "VERSE", lyrics: "Bring forth your praise\nYou heavenly host\nWorship Him, rejoicing!\nPrinces and kings\nFall at His throne\nMagnify His splendor!" },
            { name: "REFRAIN", lyrics: "Holy, mighty, everlasting King\nAnd Lord of all.\nHoly, mighty, everlasting King\nAnd Sovereign God!" },
            { name: "VERSE", lyrics: "Haste to His courts\nYou saints of our God\nServe Him with great gladness!\nLift up your voice\nHonor His name\nBless the Lord of glory!" },
            { name: "REFRAIN", lyrics: "Holy, mighty, everlasting King\nAnd Lord of all.\nHoly, mighty, everlasting King\nAnd Sovereign God!" },
            { name: "END", lyrics: "Holy, mighty, everlasting King,\nLord of all, Sovereign God!" }
        ]
    },
    {
        title: "Holy O Holy",
        sections: [
            { name: "VERSE", lyrics: "Holy, O holy, Lord God Almighty!\nWorthy, O worthy\nGlorious Prince of peace!" },
            { name: "VERSE", lyrics: "We bring our lives to You,\nA sacrifice to You, we stand in awe\nBefore Your holy name." },
            { name: "REFRAIN", lyrics: "All glory and honor and praise\nBe to the Ancient of days.\nWe praise You, we worship You,\nOur Lord and our King!\nOn high!" },
            { name: "VERSE", lyrics: "Holy, O holy, Lord God Almighty!\nWorthy, O worthy\nGlorious Prince of peace!" },
            { name: "VERSE", lyrics: "We bring our lives to You,\nA sacrifice to You, we stand in awe\nBefore Your holy name." },
            { name: "END", lyrics: "All glory and honor and praise\nBe to the Ancient of days.\nWe praise You, we worship You,\nOur Lord and our King!\n[F1](2x)[/F1]\nOn high!" }
        ]
    },
    {
        title: "How Great Is Your Love",
        sections: [
            { name: "VERSE", lyrics: "No eye has seen and no ear has heard\nAnd no mind has ever conceived\nThe glorious things\nThat You have prepared" },
            { name: "VERSE", lyrics: "For everyone who has believed.\nYou brought us near\nAnd You called us Your own\nAnd made us joint heirs with Your Son." },
            { name: "CHORUS", lyrics: "How high and how wide\nHow deep and how long\nHow sweet and how strong is Your love!\nHow lavish Your grace\nHow faithful Your ways\nHow great is Your love, O Lord!" },
            { name: "VERSE", lyrics: "Objects of mercy\nWho should have known wrath\nWe’re filled with unspeakable joy.\nRiches of wisdom\nUnsearchable wealth" },
            { name: "VERSE", lyrics: "And the wonder of knowing Your voice.\nYou are our treasure\nAnd our great reward\nOur hope and our glorious King!" },
            { name: "END", lyrics: "How high and how wide\nHow deep and how long\nHow sweet and how strong is Your love!\nHow lavish Your grace\nHow faithful Your ways\nHow great is Your love, O Lord!" }
        ]
    },
    {
        title: "How Great Thou Art",
        sections: [
            { name: "VERSE", lyrics: "O Lord, my God\nWhen I in awesome wonder\nConsider all the worlds\nThy hands have made.\nI see the stars, I hear the rolling thunder\nThy pow’r throughout\nThe universe displayed." },
            { name: "REFRAIN", lyrics: "Then sings my soul,\nMy Savior God, to Thee:\nHow great Thou art! [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "When through the woods\nAnd forest glades I wander\nAnd hear the birds\nSing sweetly in the trees\nWhen I look down\nFrom lofty mountain grandeur\nAnd hear the brook\nAnd feel the gentle breeze" },
            { name: "REFRAIN", lyrics: "Then sings my soul,\nMy Savior God, to Thee:\nHow great Thou art! [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "And when I think\nThat God, His Son not sparing,\nSent Him to die,\nI scarce can take it in.\nThat on the cross,\nMy burden gladly bearing,\nHe bled and died to take away my sin." },
            { name: "REFRAIN", lyrics: "Then sings my soul,\nMy Savior God, to Thee:\nHow great Thou art! [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "When Christ shall come\nWith shout of acclamation\nAnd take me home\nWhat joy shall fill my heart!\nThen I shall bow in humble adoration\nAnd there proclaim,\nMy God, how great Thou art!" },
            { name: "END", lyrics: "Then sings my soul,\nMy Savior God to Thee:\nHow great Thou art! [F1](2x)[/F1]" }
        ]
    },
    {
        title: "How Lovely",
        sections: [
            { name: "VERSE", lyrics: "Calvary and heav’nly banquet,\nBoth made present to me.\nOne same Lord is still inviting\nO, taste and see." },
            { name: "END", lyrics: "How lovely, how lovely,\nHow lovely is this place!\nLet me live here beholding Your face.\nLet me live here filling my gaze\nWith Your beauty.\nI have tasted … I see!" }
        ]
    },
    {
        title: "How Lovely Is Your Dwelling Place",
        sections: [
            { name: "VERSE", lyrics: "How lovely is Your dwelling place,\nO Lord of hosts!\nMy soul longs, yes, it faints,\nFor the courts of the Lord.\nMy heart and flesh sing for joy\nTo the living God, to the living God!" },
            { name: "VERSE", lyrics: "Even the sparrow finds a home,\nAnd the swallow makes her nest\nWhere she may offer up her young\nAt Your altars, O my King.\nBlest are they who dwell with You,\nEver singing Your praise,\nEver singing Your praise." },
            { name: "VERSE", lyrics: "Blest are those whose strength\nIs in You, O Mighty God\nIn whose hearts are the highways\nTo the city of the Lord.\nThey will go from strength to strength,\nAnd see the King on His throne,\nAnd see the King on His throne." },
            { name: "VERSE", lyrics: "One single day in Your courts, O Lord,\nIs better than a thousand else by far.\nI would rather keep Your doors\nThan dwell with wicked men." },
            { name: "END", lyrics: "For the Lord is a sun and shield\nHe bestows grace and honor.\nNo good thing does the Lord withhold\nFrom those who walk in His ways.\nHow lovely is Your dwelling place,\nO Lord of Hosts!" }
        ]
    },
    {
        title: "Hymn Of Glory",
        sections: [
            { name: "REFRAIN", lyrics: "Glory, hallelujah! [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Give thanks to our God\nAnd let Him be praised,\nWith sanctified hearts\nAnd hands that are raised.\nCome, join a song\nOf praise to our God." },
            { name: "REFRAIN", lyrics: "Glory, hallelujah! [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "His Word ever true\nThe Son of His love\nSing, men of earth, to the heavens above\nHonor and glory belong to our God!" },
            { name: "REFRAIN", lyrics: "Glory, hallelujah! [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Worthy the Lamb\nWho was slain for our sins\nHe laid down His life, He rose up again\nTo us He gives unending life." },
            { name: "REFRAIN", lyrics: "Glory, hallelujah! [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Holy, holy the Lord God Almighty\nWho was, who is, and who is to come.\nIn glory come, Lord Jesus, come!" },
            { name: "END", lyrics: "Glory, hallelujah! [F1](2x)[/F1]" }
        ]
    },
    {
        title: "Hymn Of Heaven",
        sections: [
            { name: "VERSE", lyrics: "Brief life is here our portion,\nBrief sorrow short-lived care:\nThe life that knows no ending,\nThe tearless life is there.\nOh happy retribution: short toil, eternal rest,\nFor mortals and for sinners,\nA mansion with the blest." },
            { name: "VERSE", lyrics: "And now we fight the battle\nBut then shall wear the crown\nOf full and everlasting and passionless renown.\nAnd now we watch and struggle,\nAnd now we live in hope,\nAs Sion in her anguish with Babylon must cope." },
            { name: "VERSE", lyrics: "But He whom now we trust in\nShall then be seen and known.\nAnd they that know and see Him\nShall have Him for their own.\nThe morning shall awaken,\nThe shadows shall decay.\nAnd each true-hearted servant\nShall shine as doth the day." },
            { name: "VERSE", lyrics: "There God our King and portion\nIn fullness of His grace,\nShall we behold forever\nAnd worship face to face." },
            { name: "END", lyrics: "Jesus in Thy mercy bring us\nTo that dear land of rest,\nWho art with God the Father\nAnd Spirit ever blest." }
        ]
    },
    {
        title: "I Am The Bread Of Life",
        sections: [
            { name: "VERSE", lyrics: "I am the bread of life,\nHe who comes to Me shall not hunger,\nHe who believes in Me shall not thirst,\nNo one can come to Me\nUnless the Father draw him." },
            { name: "REFRAIN", lyrics: "And I will raise him up [F1](2x)[/F1]\nAnd I will raise him up on the last day." },
            { name: "VERSE", lyrics: "The bread that I will give\nIs My flesh for the life of the world\nAnd he who eats of this bread\nHe shall live forever\nHe shall live forever." },
            { name: "REFRAIN", lyrics: "And I will raise him up\nAnd I will raise him up,\nAnd I will raise him up on the last day." },
            { name: "VERSE", lyrics: "Unless you eat\nOf the flesh of the Son of Man,\nAnd drink of His blood, [F1](2x)[/F1]\nYou shall not have life within you." },
            { name: "REFRAIN", lyrics: "And I will raise him up\nAnd I will raise him up,\nAnd I will raise him up on the last day." },
            { name: "VERSE", lyrics: "I am the resurrection,\nI am the life.\nHe who believes in Me\nEven if he die, he shall live forever." },
            { name: "REFRAIN", lyrics: "And I will raise him up\nAnd I will raise him up,\nAnd I will raise him up on the last day." },
            { name: "VERSE", lyrics: "Yes, Lord, I believe\nThat You are the Christ,\nThe Son of God,\nWho has come into the world." },
            { name: "END", lyrics: "And I will raise him up [F1](2x)[/F1]\nAnd I will raise him up on the last day." }
        ]
    },
    {
        title: "I Am The God That Healeth Thee",
        sections: [
            { name: "VERSE", lyrics: "I am the God that healeth thee,\nI am the Lord, your healer.\nI sent My word and healed your disease.\nI am the Lord, your healer." },
            { name: "END", lyrics: "You are the God that healeth me,\nYou are the Lord, my healer.\nYou sent Your word and\nYou healed my disease.\nYou are the Lord, my healer." }
        ]
    },
    {
        title: "I Am The Resurrection",
        sections: [
            { name: "REFRAIN", lyrics: "I am the resurrection and the life,\nHe who believes in Me will never die.\nI am the resurrection and the life,\nHe who believes in Me will live a new life." },
            { name: "VERSE", lyrics: "I have come to bring the truth.\nI have come to bring you life.\nIf you believe, then you shall live." },
            { name: "REFRAIN", lyrics: "I am the resurrection and the life,\nHe who believes in Me will never die.\nI am the resurrection and the life,\nHe who believes in Me will live a new life." },
            { name: "VERSE", lyrics: "In My word all men will come to know.\nIt is love which makes the Spirit grow.\nIf you believe, then you shall live." },
            { name: "REFRAIN", lyrics: "I am the resurrection and the life,\nHe who believes in Me will never die.\nI am the resurrection and the life,\nHe who believes in Me will live a new life." },
            { name: "VERSE", lyrics: "Keep in mind\nThe things that I have said.\nRemember Me\nIn the breaking of the bread.\nIf you believe, then you shall live." },
            { name: "END", lyrics: "I am the resurrection and the life,\nHe who believes in Me will never die.\nI am the resurrection and the life,\nHe who believes in Me will live a new life." }
        ]
    },
    {
        title: "I Am Yours And You Are Mine",
        sections: [
            { name: "VERSE", lyrics: "I am Yours, and You are mine.\nLord, I am Yours and You are mine.\nI am Yours, heart, mind and soul.\nAnd You alone, Lord, are my all." },
            { name: "END", lyrics: "I love You, my Lord, I love You, my God\nWith love that transcends\nAll space and time.\nI love You, my Lord, I love You, my God\nFor ages unending\nI am Yours, and You are mine." }
        ]
    },
    {
        title: "I Believe",
        sections: [
            { name: "VERSE", lyrics: "I believe for every drop of rain that falls,\nA flower grows.\nI believe that somewhere\nIn the darkest of night, a candle glows.\nI believe for everyone who goes astray\nSomeone will come to show the way.\nI believe, I believe." },
            { name: "END", lyrics: "I believe above the storm\nThe smallest pray’r will still be heard.\nI believe that Someone\nIn the great somewhere\nHears every word.\nEvery time I hear a newborn baby cry,\nOr touch a leaf, or see the sky,\nThen I know why I believe." }
        ]
    },
    {
        title: "I Bow My Knee",
        sections: [
            { name: "VERSE", lyrics: "I bow my knee before Your throne.\nI know my life is not my own.\nI offer up a song of praise\nTo bring You pleasure, Lord." },
            { name: "VERSE", lyrics: "I seek the Giver, not the gift.\nMy heart’s desire is to lift You\nHigh above all earthly kings\nTo bring You pleasure, Lord." },
            { name: "REFRAIN", lyrics: "Hallelujah! Hallelujah!\nHallelujah! Glory to the King!\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "I bow my knee before Your throne.\nI know my life is not my own.\nI offer up a song of praise\nTo bring You pleasure, Lord." },
            { name: "END", lyrics: "Hallelujah! Hallelujah!\nHallelujah! Glory to the King!\n[F1](2x)[/F1]\nHallelujah! Glory to the King!" }
        ]
    },
    {
        title: "I Delight In Your Will",
        sections: [
            { name: "VERSE", lyrics: "Patiently I sought the Lord;\nHe has heard my cry,\nAnd He has drawn me up\nAnd made my steps secure\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "And I said, “Behold I come\nIn the steps of my Savior before me.\nBehold I come to you!”" },
            { name: "CHORUS", lyrics: "I delight in your will, O my God;\nAnd your law is within my heart.\nAnd I come to serve your Word." },
            { name: "CHORUS", lyrics: "And I will speak of your steadfast love\nAnd I’ll tell of your faithfulness.\nYes, I come to do your will,\nFor you have set me free." },
            { name: "VERSE", lyrics: "Sacrifice and offering\nYou do not desire\nBut you have given me\nAn open ear, Oh Lord.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "And I said, “Behold I come\nIn the steps of my Savior before me.\nBehold I come to you!”" },
            { name: "CHORUS", lyrics: "I delight in your will, O my God;\nAnd your law is within my heart.\nAnd I come to serve your Word." },
            { name: "CHORUS", lyrics: "And I will speak of your steadfast love\nAnd I’ll tell of your faithfulness.\nYes, I come to do your will,\nFor you have set me free." },
            { name: "VERSE", lyrics: "Great is the Lord! Great is the Lord!\nLet all who love him say it:\nGreat is the Lord!\n[F1](2x)[/F1]" },
            { name: "CHORUS", lyrics: "I delight in your will, O my God;\nAnd your law is within my heart.\nAnd I come to serve your Word." },
            { name: "END", lyrics: "And I will speak of your steadfast love\nAnd I’ll tell of your faithfulness.\nYes, I come to do your will,\nFor you have set me free." }
        ]
    },
    {
        title: "I Exalt Thee",
        sections: [
            { name: "VERSE", lyrics: "For Thou, O Lord, art high\nAbove all the earth\nThou art exalted\nFar above all gods.\n[F1](2x)[/F1]\n\nI exalt Thee, I exalt Thee,\nI exalt Thee, O Lord!\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "I Give You My Heart",
        sections: [
            { name: "VERSE", lyrics: "This is my desire: to honor You.\nLord, with all my heart I worship You.\nAll I have within me, I give You praise.\nAll that I adore is in You." },
            { name: "CHORUS", lyrics: "Lord, I give You my heart,\nI give You my soul,\nI live for You alone." },
            { name: "CHORUS", lyrics: "Every breath that I take,\nEvery moment I’m awake,\nLord, have Your way in me." },
            { name: "VERSE", lyrics: "This is my desire: to honor You.\nLord, with all my heart I worship You.\nAll I have within me, I give You praise.\nAll that I adore is in You." },
            { name: "CHORUS", lyrics: "Lord, I give You my heart,\nI give You my soul,\nI live for You alone." },
            { name: "END", lyrics: "Every breath that I take,\nEvery moment I’m awake,\nLord, have Your way in me." }
        ]
    },
    {
        title: "I Just Want To Be Where You Are",
        sections: [
            { name: "VERSE", lyrics: "I just want to be where You are\nDwelling daily in Your presence.\nI don’t want to worship from afar.\nDraw me near to where You are." },
            { name: "VERSE", lyrics: "I just want to be where You are\nIn Your dwelling place forever.\nTake me to the place where you are\n‘Cause I just want to be with You." },
            { name: "CHORUS", lyrics: "I want to be where You are\nDwelling in Your presence\nFeasting at Your table\nSurrounded by Your glory.\nIn Your presence\nThat’s where I always want to be\nI just want to be, I just want to be with You." },
            { name: "VERSE", lyrics: "I just want to be where You are\nTo enter boldly in Your presence.\nI don’t want to worship from afar.\nDraw me near to where You are." },
            { name: "BRIDGE", lyrics: "O my God, You are my strength and my song.\nAnd when I’m in Your presence\nThough I’m weak, You’re always strong.\n\nI just want to be, I just want to be with You." },
            { name: "VERSE", lyrics: "I just want to be where You are\nIn Your dwelling place forever.\nTake me to the place where You are\n‘Cause I just want to be," },
            { name: "END", lyrics: "I just want to be with You.\nI just want to be,\nI just want to be with You.\nI just want to be,\nI just want to be with You." }
        ]
    },
    {
        title: "I Know",
        sections: [
            { name: "VERSE", lyrics: "When I look at this world around me,\nSometimes it seems I can’t see You at all.\nBut I’m not alone in this life,\nYour Spirit within\nHelps me answer Your call.\nThroughout each day, every time that I pray\nI can say: Hey, hey, hey …" },
            { name: "REFRAIN", lyrics: "I know, I know\nThat You are with me for all time.\nI know, I know\nThat Your love for me is mine.\nI know, I believe\nThis truth has made me free\nto live for eternity!" },
            { name: "VERSE", lyrics: "Am I gonna be hot or cold?\nAm I really gonna take a stand?\nO Lord, help me be bold,\nIn Your mercy please give me a hand\nSo I can endure.\nAll my doubts have been cured,\nI can say: Hey, hey, hey …" },
            { name: "REFRAIN", lyrics: "I know, I know\nThat You are with me for all time.\nI know, I know\nThat Your love for me is mine.\nI know, I believe\nThis truth has made me free\nTo live for eternity!" },
            { name: "VERSE", lyrics: "With Your truth and wisdom to guide,\nThe gift of Your Spirit,\nWe can live for You.\nWe’ll comfort the sick and the lonely,\nLoving our neighbors\nWith the things that we do.\nMake us like Your Son and make us all one,\nSo together we can say …" },
            { name: "END", lyrics: "I know, I know\nThat You are with me for all time.\nI know, I know\nThat Your love for me is mine.\nI know, I believe\nThis truth has made me free\nTo live for eternity!" }
        ]
    },
    {
        title: "I Love The Lord",
        sections: [
            { name: "VERSE", lyrics: "I love the Lord\nBecause He heard my voice,\nHe inclined His ear unto me." },
            { name: "REFRAIN", lyrics: "Therefore will I call\nUpon Him as long as I live.\nO, I love the Lord, I love the Lord!" },
            { name: "VERSE", lyrics: "He has delivered my soul from death\nAnd my eyes from tears\nAnd my feet from falling.\nGracious is the Lord and righteous!\nYea, our God is merciful!" },
            { name: "END", lyrics: "Therefore will I call\nUpon Him as long as I live.\nO, I love the Lord, I love the Lord!\n\nI love the Lord, I love the Lord!" }
        ]
    },
    {
        title: "I Love You Lord",
        sections: [
            { name: "VERSE", lyrics: "I love you, Lord, and I lift my voice\nTo worship You. O my soul, rejoice.\nTake joy, my King, in what You hear.\nMay it be a sweet, sweet sound\nIn Your ear." }
        ]
    },
    {
        title: "I Shall Be Satisfied",
        sections: [
            { name: "VERSE", lyrics: "How glorious Your courts,\nYour dwelling place, my God,\nWhere we rejoice, beholding Your beauty!" },
            { name: "VERSE", lyrics: "There we exalt Your Name,\nOur lips show forth Your praise;\nOur hands upraised, before Your Holiness." },
            { name: "VERSE", lyrics: "I shall be filled, I shall be satisfied,\nI shall be glad with beholding Your face,\nWith beholding Your face, in righteousness." },
            { name: "END", lyrics: "With beholding Your face [F1](3x)[/F1]\nIn righteousness, my Lord!" }
        ]
    },
    {
        title: "I Want To Be Holy",
        sections: [
            { name: "REFRAIN", lyrics: "I want to be holy, holy, holy\nAs my Lord is Holy.\nI want to be holy, holy, holy\nAs my Lord is Holy." },
            { name: "VERSE", lyrics: "Wear me like a garment,\nSpotless and unblemished for Thee\nMay my life be pleasing,\nMay my living glory Thy name." },
            { name: "END", lyrics: "I want to be holy, holy, holy\nAs my Lord is Holy.\nI want to be holy, holy, holy\nAs my Lord is Holy.\nHoly as my Lord is Holy." }
        ]
    },
    {
        title: "I Want To Worship You",
        sections: [
            { name: "VERSE", lyrics: "With ev’ry song I sing,\nI want to worship You.\nWith ev’ry prayer I bring,\nI want to worship You.\nTo You alone I cling,\nI want to worship You." },
            { name: "REFRAIN", lyrics: "Worship You, Lord,\nI want to worship You." },
            { name: "VERSE", lyrics: "Before the holy place,\nI want to worship You.\nHoly hands I raise,\nI want to worship You.\nBehold You face to face,\nI want to worship You." },
            { name: "REFRAIN", lyrics: "Worship You, Lord,\nI want to worship You." },
            { name: "VERSE", lyrics: "With angel hosts above\nI want to worship You.\nIn holiness, O Lord,\nI want to worship You.\nTo magnify Your love,\nI want to worship You." },
            { name: "END", lyrics: "Worship You, Lord,\nI want to worship You." }
        ]
    },
    {
        title: "I Will Awake The Dawn",
        sections: [
            { name: "VERSE", lyrics: "Awake, O harp and lyre,\nAwake the morning,\nFirst light of day descends to lift my soul.\nYour presence greets me,\nStirs me to seek Thee,\nI come to do Your will." },
            { name: "REFRAIN", lyrics: "Open my lips, O Lord,\nMy mouth will sing Your praise,\nOpen my eyes to see Your hand this day." },
            { name: "REFRAIN", lyrics: "My heart is steadfast,\nFor Lord, Your love is steadfast,\nI will awake the dawn!" },
            { name: "VERSE", lyrics: "In You my soul takes refuge;\nYour wings protect me.\nYou come from heaven and You rout my foes.\nI cry to You, Lord;\nI am delivered,\nI praise Your faithfulness!" },
            { name: "REFRAIN", lyrics: "Open my lips, O Lord,\nMy mouth will sing Your praise,\nOpen my eyes to see Your hand this day." },
            { name: "REFRAIN", lyrics: "My heart is steadfast,\nFor Lord, Your love is steadfast,\nI will awake the dawn!" },
            { name: "VERSE", lyrics: "I will give thanks to You, Lord,\nAmong the peoples.\nAmong the nations I’ll sing praise to You.\nO, be exalted;\nHighly exalted,\nYour glory to the skies!" },
            { name: "REFRAIN", lyrics: "Open my lips, O Lord,\nMy mouth will sing Your praise,\nOpen my eyes to see Your hand this day." },
            { name: "REFRAIN", lyrics: "My heart is steadfast,\nFor Lord, Your love is steadfast,\nI will awake the dawn!" },
            { name: "REFRAIN", lyrics: "Open my lips, O Lord,\nMy mouth will sing Your praise,\nOpen my eyes to see Your hand this day." },
            { name: "END", lyrics: "My heart is steadfast,\nFor Lord, Your love is steadfast,\nI will awake the dawn!" }
        ]
    },
    {
        title: "I Will Give Thanks",
        sections: [
            { name: "VERSE", lyrics: "I will give thanks\nI will give thanks to the Lord\nI will give thanks to the Lord with my whole heart\n[F1](2x)[/F1]" },
            { name: "CHORUS", lyrics: "And I will tell All your wonderful deeds.\nI will be glad and exult in you.\nI will sing praise to your name, O Most High.\nI will give thanks to the Lord\nwith my whole heart" },
            { name: "VERSE", lyrics: "I will give thanks\nI will give thanks to the Lord\nI will give thanks to the Lord with my whole heart\n[F1](2x)[/F1]" },
            { name: "CHORUS", lyrics: "And I will tell All your wonderful deeds.\nI will be glad and exult in you.\nI will sing praise to your name, O Most High.\nI will give thanks to the Lord\nwith my whole heart" },
            { name: "END", lyrics: "I will give thanks\nI will give thanks to the Lord\nI will give thanks to the Lord with my whole heart\n[F1](2x)[/F1]\nI will give thanks to the Lord with my whole heart" }
        ]
    },
    {
        title: "I Will Lift Up My Voice",
        sections: [
            { name: "VERSE", lyrics: "I will lift up my voice unto the Lord. [F1](2x)[/F1]\nI will lift up my voice\nTo worship and adore.\nI will lift up my voice unto the Lord." },
            { name: "VERSE", lyrics: "I will lift up my hands unto the Lord. [F1](2x)[/F1]\nI will lift up my hands\nAs a sacrifice of praise.\nI will lift up my hands unto the Lord." },
            { name: "END", lyrics: "I will lift up my life unto the Lord. [F1](2x)[/F1]\nI will lift up my life as a living sacrifice,\nI will lift up my life unto the Lord.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "I Will Sing Forever",
        sections: [
            { name: "REFRAIN", lyrics: "I will sing forever of Your love, O Lord.\nI will celebrate the wonder of Your name.\nFor the word that You speak\nIs a song of forgiveness, and a song\nOf gentle mercy and of peace." },
            { name: "VERSE", lyrics: "Let us wake at the morning\nAnd be filled with Your love\nAnd sing songs of praise all our days.\nFor Your love is as high\nAs the heavens above us,\nAnd Your faithfulness\nAs certain as the dawn." },
            { name: "REFRAIN", lyrics: "I will sing forever of Your love, O Lord.\nI will celebrate the wonder of Your name.\nFor the word that You speak\nIs a song of forgiveness, and a song\nOf gentle mercy and of peace." },
            { name: "BRIDGE", lyrics: "I will sing forever of Your love, O Lord.\nFor You are my refuge and my strength.\nYou fill the world\nWith Your life-giving Spirit\nThat speaks Your word\nYour word of mercy and of peace." },
            { name: "END", lyrics: "And I will sing forever of Your love,\nO Lord!\nYes, I will sing forever of Your love,\nO Lord!" }
        ]
    },
    {
        title: "I Will Worship You Lord",
        sections: [
            { name: "VERSE", lyrics: "I will worship You Lord with all my might\nI will praise You with a psalm.\nI will worship You Lord with all of my might\nI will praise You all day long." },
            { name: "END", lyrics: "For Thou alone are glorious\nAnd Thy name is greatly to be praised.\nMay my heart be pure and holy in Thy sight\nAs I worship You with all my might." }
        ]
    },
    {
        title: "I Worship You",
        sections: [
            { name: "VERSE", lyrics: "I give You all the honor\nAnd praise that’s due Your name\nFor You are the King of glory,\nThe Creator of all things." },
            { name: "REFRAIN", lyrics: "And I worship You, I give my life to You\nI fall down on my knees.\nYes, I worship You, I give my life to You\nI fall down on my knees." },
            { name: "VERSE", lyrics: "As your Spirit moves upon me now\nYou meet my deepest need.\nI will lift my hands up to Your throne\nYour mercy, I receive." },
            { name: "REFRAIN", lyrics: "And I worship You, I give my life to You\nI fall down on my knees.\nYes, I worship You, I give my life to You\nI fall down on my knees." },
            { name: "VERSE", lyrics: "You have broken chains that bound me,\nYou’ve set this captive free.\nI will lift my voice to praise Your name\nFor all eternity." },
            { name: "END", lyrics: "And I worship You, I give my life to You\nI fall down on my knees.\nYes, I worship You, I give my life to You\nI fall down on my knees." }
        ]
    },
    {
        title: "I Worship You Almighty God",
        sections: [
            { name: "VERSE", lyrics: "I worship You, Almighty God.\nThere is none like You.\nThat is what I want to do.\nI give You praise\nFor You are my righteousness.\nI worship You, Almighty God.\nThere is none like You." }
        ]
    },
    {
        title: "Ilumina O Señor",
        sections: [
            { name: "VERSE", lyrics: "Ilumina O Señor\nMi entedimiento y corazon [F1](2x)[/F1]\nDame fe recta\nEsperanza cierta\nCaridad perfecta" }
        ]
    },
    {
        title: "In Moments Like These",
        sections: [
            { name: "VERSE", lyrics: "In moments like these I sing out a song\nI sing out a love song to Jesus.\nIn moments like these I lift up my hands\nI lift up my hands to the Lord,\nSinging, “I love You, Lord” [F1](2x)[/F1]\nSinging, “I love You, Lord, I love You.”" },
            { name: "END", lyrics: "In moments like these I sing out a song\nI sing out a praise song to Jesus.\nIn moments like these I lift up my hands\nI lift up my hands to the Lord,\nSinging, “I praise You, Lord” [F1](2x)[/F1]\nSinging, “I praise You, Lord,\nI praise You.”" }
        ]
    },
    {
        title: "In Your Light We See Light",
        sections: [
            { name: "VERSE", lyrics: "How priceless is Your steadfast love,\nO Lord, far more than life itself!\nIn the shadow of Your wings\nShall all who seek\nFind refuge and strength." },
            { name: "REFRAIN", lyrics: "For in You is the fountain of life,\nIn Your light, we see light.\nFor in You is the fountain of life,\nIn Your light do we see light." },
            { name: "VERSE", lyrics: "Through the abundance\nOf Your steadfast love\nWe come into Your holy place.\nIn the fear of You we worship\nAt Your throne of mercy and grace." },
            { name: "REFRAIN", lyrics: "For in You is the fountain of life,\nIn Your light, we see light.\nFor in You is the fountain of life,\nIn Your light do we see light." },
            { name: "VERSE", lyrics: "We feast on the abundance\nOf Your house as on the richest food.\nFrom Your river of delights\nWe drink our fill of all that is good." },
            { name: "END", lyrics: "For in You is the fountain of life,\nIn Your light, we see light.\nFor in You is the fountain of life,\nIn Your light do we see light.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Isaiah 43",
        sections: [
            { name: "REFRAIN", lyrics: "Yahweh, You have created me,\nYou have called me by name\nAnd I am Yours." },
            { name: "REFRAIN", lyrics: "Forever I will sing of Your goodness.\nI will walk now in freedom\nTo the Kingdom of glory." },
            { name: "VERSE", lyrics: "When I walk through the sea\nMy God will walk with me\nAnd the rivers will not swallow me." },
            { name: "REFRAIN", lyrics: "Yahweh, You have created me.\nYou have called me by name\nAnd I am Yours." },
            { name: "VERSE", lyrics: "Though I walk through the fire\nI will not be scorched nor burned\nAnd the flames will not harm me at all." },
            { name: "REFRAIN", lyrics: "Yahweh, You have created me.\nYou have called me by name\nAnd I am Yours." },
            { name: "VERSE", lyrics: "You call us Your people,\nWe are precious in the eyes of God.\nAnd You give nations\nIn return for our life." },
            { name: "REFRAIN", lyrics: "Yahweh, You have created me.\nYou have called me by name\nAnd I am Yours." },
            { name: "VERSE", lyrics: "We are servants of the Lord\nAnd we shall not be afraid\nFor God is with us\nAnd He has made us for His glory." },
            { name: "REFRAIN", lyrics: "Yahweh, You have created me.\nYou have called me by name\nAnd I am Yours." },
            { name: "END", lyrics: "Forever I will sing of Your goodness.\nI will walk now in freedom\nTo the Kingdom of glory." }
        ]
    },
    {
        title: "Isaiah 54",
        sections: [
            { name: "REFRAIN", lyrics: "Sing out, O barren one,\nBreak forth into jubilant song.\nO afflicted and storm-tossed one,\nYour God calls you back\nHis steadfast love shall be forever yours." },
            { name: "VERSE", lyrics: "For a brief moment, I abandoned you,\nMy wrath went forth I hid My face from you.\nBut with steadfast love\nI shall take you back\nThe God of Israel shall be your Savior." },
            { name: "REFRAIN", lyrics: "Sing out, O barren one,\nBreak forth into jubilant song.\nO afflicted and storm-tossed one,\nYour God calls you back\nHis steadfast love shall be forever yours." },
            { name: "VERSE", lyrics: "I shall raise your walls,\nSet with precious gems,\nI myself shall build\nYour battlements and gates.\nThere you shall dwell far from your foes,\nProsperity and peace\nUpon your children." },
            { name: "REFRAIN", lyrics: "Sing out, O barren one,\nBreak forth into jubilant song.\nO afflicted and storm-tossed one,\nYour God calls you back\nHis steadfast love shall be forever yours." },
            { name: "VERSE", lyrics: "Though the mountain should move\nThough the hills should shake\nThough earth should melt\nAnd sky should pass away,\nMy gracious love shall never leave,\nAnd My covenant of peace\nShall not be shaken!" },
            { name: "END", lyrics: "Sing out, O barren one,\nBreak forth into jubilant song.\nO afflicted and storm-tossed one,\nYour God calls you back\nHis steadfast love shall be forever yours.\n\nForever yours. [F1](3x)[/F1]" }
        ]
    },
    {
        title: "Isaiah 60",
        sections: [
            { name: "REFRAIN", lyrics: "Arise, shine out, for your light has come\nThe glory of Yahweh is rising on you.\nThough night still covers the earth\nAnd darkness the people,\nAbove you Yahweh now rises,\nAbove you His glory appears, arise!" },
            { name: "VERSE", lyrics: "The nations come to your light\nAnd kings to your dawning brightness\nSinging the praise of Yahweh,\nBringing gold and incense." },
            { name: "VERSE", lyrics: "Lift up your eyes and look around you:\nAll are assembling\nAnd coming tow’rd you.\nYour sons from far away\nAnd your daughters being\nTenderly carried this day." },
            { name: "REFRAIN", lyrics: "Arise, shine out, for your light has come\nThe glory of Yahweh is rising on you.\nThough night still covers the earth\nAnd darkness the people,\nAbove you Yahweh now rises,\nAbove you His glory appears, arise!" },
            { name: "VERSE", lyrics: "They bring your sons from far away\nAnd their silver and gold with them\nFor the name of Yahweh, Your God,\nThe Holy One of Israel.”" },
            { name: "VERSE", lyrics: "No more shall violence\nBe heard in your country\nNor devastation within your frontiers.\nYou will call your walls “Salvation!”\nAnd your gates “Praise!”" },
            { name: "REFRAIN", lyrics: "Arise, shine out, for your light has come\nThe glory of Yahweh is rising on you.\nThough night still covers the earth\nAnd darkness the people,\nAbove you Yahweh now rises,\nAbove you His glory appears, arise!" },
            { name: "VERSE", lyrics: "No more will the sun give you daylight\nNor moonlight shine on you\nBut Yahweh will be your eternal light\nYour God will be your splendor." },
            { name: "VERSE", lyrics: "Your sun will set no more\nNor your moon wane.\nBut Yahweh will be your eternal light\nAnd your days of mourning\nWill pass from your sight." },
            { name: "END", lyrics: "Arise, shine out, for your light has come\nThe glory of Yahweh is rising on you.\nThough night still covers the earth\nAnd darkness the people,\nAbove you Yahweh now rises,\nAbove you His glory appears, arise!\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Isaiah 61",
        sections: [
            { name: "VERSE", lyrics: "I will greatly rejoice in my God.\nMy soul exults in the Lord.\nFor He has clothed me\nWith a garment of salvation." },
            { name: "END", lyrics: "He has covered me\nWith a robe of righteousness.\nAs a bridegroom\nDecketh himself with ornaments,\nAs a bride\nAdorneth herself with her jewels." }
        ]
    },
    {
        title: "It Is Good To Give Thanks To The Lord",
        sections: [
            { name: "VERSE", lyrics: "It is good to give thanks to the Lord,\nTo sing praise to Your name, Most High;\nTo proclaim Your kindness at dawn,\nAnd Your faithfulness throughout the night\nWith ten-stringed instrument and lyre,\nWith melody upon the harp.\nFor You make me glad, O Lord, by Your deeds." },
            { name: "VERSE", lyrics: "At the works of Your hands I rejoice!\nHow great are Your works, O Lord!\nHow very deep are Your thoughts.\nThe just man shall flourish like the palm tree;\nLike the cedar of Lebanon shall he grow." },
            { name: "VERSE", lyrics: "They that are planted in the house of the Lord;\nShall flourish in the courts of our God\nThey shall bear fruit even in old age;\nVigorous and sturdy shall they be." },
            { name: "END", lyrics: "Declaring how just is the Lord, my Rock,\nIn whom there is no wrong.\nGlory be to the Father, and to the Son,\nAnd to the Holy Spirit.\nAs it was in the beginning is now\nAnd ever shall be world without end. Amen!" }
        ]
    },
    {
        title: "It Is I",
        sections: [
            { name: "VERSE", lyrics: "When I sink down in gloom or fear,\nHope blighted or delayed\nThy whisper, Lord, my heart shall cheer,\n“Tis I; be not afraid.”" },
            { name: "VERSE", lyrics: "Or, startled at some sudden blow,\nIf fretful thoughts I feel,\n“Fear not, it is but I” shall flow,\nAs balm my wound to heal." },
            { name: "VERSE", lyrics: "Nor will I quit thy way, though foes\nSome onward pass defend;\nFrom each rough voice the watchword goes\n“Be not afraid, a friend.”" },
            { name: "END", lyrics: "And Oh! When judgment’s trumpet clear\nAwakes me from the grave,\nStill in its echo may I hear,\n“Tis Christ; He comes to save.”" }
        ]
    },
    {
        title: "Join With Us",
        sections: [
            { name: "VERSE", lyrics: "Join with us\nAnd let us go to His dwelling place\nBeyond the veil where we see His face\nWhere we are lifted in holy praise." },
            { name: "VERSE", lyrics: "We worship Him.\nBehold such beauty and worship Him.\nThe gates of heaven resound within\nFor we were made for\nThis glorious grace." },
            { name: "REFRAIN", lyrics: "Every heart cries “Holy!”\nEvery knee bends low.\nAlways steadfast, ever faithful,\nHow Your love endures!" },
            { name: "REFRAIN", lyrics: "Face to face with glory\nThat no eye has seen:\n“We become like Him\nWhom we behold.”\nBeholding You!" },
            { name: "VERSE", lyrics: "We sing to You,\nOur lives surrendered as offerings,\nOur faith in You as the gift we bring.\nThe veil is lifted before Your throne." },
            { name: "VERSE", lyrics: "We come to You,\nConformed to You in Your lowliness,\nTransformed by You in Your holiness.\nWe rise from glory to glory, Lord!" },
            { name: "REFRAIN", lyrics: "Every heart cries “Holy!”\nEvery knee bends low.\nAlways steadfast, ever faithful,\nHow Your love endures!" },
            { name: "REFRAIN", lyrics: "Face to face with glory\nThat no eye has seen:\n“We become like Him\nWhom we behold.”\nBeholding You!" },
            { name: "END", lyrics: "Every heart cries “Holy!”\nEvery knee bends low.\nAlways steadfast, ever faithful,\nHow Your love endures!" },
            { name: "END", lyrics: "Face to face with glory\nThat no eye has seen:\n“We become like Him\nWhom we behold.”\nBeholding You!" }
        ]
    },
    {
        title: "Jerusalem",
        sections: [
            { name: "VERSE", lyrics: "Jerusalem, Jerusalem above!\nIn you dwells all my hope,\nMy joy, my life, my love.\nThis life is exile\nAnd I’m just passing through,\nHolding within my heart\nThe highways home to you." },
            { name: "REFRAIN", lyrics: "If I forget you, O Jerusalem,\nLet my right hand wither,\nLet my tongue cleave to my mouth,\nLet my soul perish, let me be destroyed\nUnless Jerusalem\nRemain my highest joy." },
            { name: "VERSE", lyrics: "O Lord, how lovely\nIs Your dwelling place\nAnd how I long to come\nAnd see You face to face.\nMy soul is thirsting\nIn this dry and weary land\nAnd I will always thirst\nTill in Your courts I stand." },
            { name: "END", lyrics: "If I forget you, O Jerusalem,\nLet my right hand wither,\nLet my tongue cleave to my mouth,\nLet my soul perish, let me be destroyed\nUnless Jerusalem\nRemain my highest joy." }
        ]
    },
    {
        title: "Jerusalem The Golden",
        sections: [
            { name: "VERSE", lyrics: "Jerusalem the golden\nWith milk and honey blest\nBeneath thy contemplation\nSink heart and voice opprest." },
            { name: "VERSE", lyrics: "I know not, O I know not\nWhat abundant joys are there\nWhat radiancy of glory\nWhat light beyond compare!" },
            { name: "VERSE", lyrics: "They stand, those walls of Zion,\nAll jubilant with song\nAnd bright with many an angel\nAnd all the martyr throng." },
            { name: "VERSE", lyrics: "The Prince is ever in them\nThe daylight is serene\nThe pastures of the blessed\nAre decked in glorious sheen." },
            { name: "VERSE", lyrics: "There is the throne of David\nAnd there from care released\nThe song of them that triumph\nThe shout of them that feast." },
            { name: "VERSE", lyrics: "And they who with their Leader\nHave conquered in the fight\nForever and forever\nAre clad in robes of white." },
            { name: "VERSE", lyrics: "O sweet and blessed country,\nShall I e’er see thy face?\nO sweet and blessed country,\nShall I e’er win thy grace?" },
            { name: "VERSE", lyrics: "Exult, O dust and ashes,\nThe Lord shall be thy part!\nHis only, His forever,\nThou shalt be and thou art." },
            { name: "END", lyrics: "Exult, O dust and ashes,\nThe Lord shall be thy part!\nHis only, his forever\nThou shalt be and thou art." }
        ]
    },
    {
        title: "Jesus Christ Is Risen Today",
        sections: [
            { name: "VERSE", lyrics: "Jesus Christ is ris’n today, Alleluia!\nOur triumphant holy day, Alleluia!\nWho did once upon the cross, Alleluia!\nSuffer to redeem our loss, Alleluia!" },
            { name: "VERSE", lyrics: "Hymns of praise then let us sing, Alleluia!\nUnto Christ, our heav’nly king, Alleluia!\nWho endured the cross and grave, Alleluia!\nSinners to redeem and save, Alleluia!" },
            { name: "VERSE", lyrics: "But the gains which He endured, Alleluia!\nOur salvation have procured, Alleluia!\nNow above the sky He’s King, Alleluia!\nWhere the angels ever sing, Alleluia!" },
            { name: "END", lyrics: "Sing we to our God above, Alleluia!\nPraise eternal as His love, Alleluia!\nPraise Him, all ye heav’nly host, Alleluia!\nFather, Son and Holy Ghost, Alleluia!" }
        ]
    },
    {
        title: "Jesus Is Beautiful",
        sections: [
            { name: "VERSE", lyrics: "Beautiful, beautiful, Jesus is beautiful.\nJesus makes beautiful things of my life.\nCarefully touching me\nCausing my eyes to see\nThat Jesus makes beautiful things\nOf my life." }
        ]
    },
    {
        title: "Jesus Is The One Who Saves",
        sections: [
            { name: "VERSE", lyrics: "All glory to the Father of life,\nPraise be to the Holy Spirit,\nAnd to the shining light of this world,\nJesus is the One who saves." },
            { name: "VERSE", lyrics: "You’re the first-born of all of the sons,\nKing of the new creation.\nYou’re the brother who makes us all one,\nJesus is the One who saves." },
            { name: "VERSE", lyrics: "Thank you, Jesus, for rising for us,\nThe Father’s love complete and glorious.\nNow we claim the vict’ry You give to us\nJesus is the One who saves." },
            { name: "END", lyrics: "Just call upon the name of the Lord,\nAsk Him for His Holy Spirit.\nYou’ll find the one truth of this world:\nJesus is the One who saves. [F1](3x)[/F1]" }
        ]
    },
    {
        title: "Jesus Jesus",
        sections: [
            { name: "VERSE", lyrics: "Jesus, Jesus, You are the Christ,\nGod’s Anointed Son.\nJesus, Jesus, You are Messiah,\nThe Savior who has come." },
            { name: "END", lyrics: "Flesh and blood did not\nReveal this to me\nBut my Father in heaven\nOpened my eyes, now I can see that\nJesus, Jesus,\nJesus, You’re the One." }
        ]
    },
    {
        title: "Joy Of My Desire",
        sections: [
            { name: "VERSE", lyrics: "Joy of my desire, all consuming fire\nLord of glory, rose of Sharon\nRare and sweet.\nYou are now my peace,\nComforter and friend,\nWonderful, so beautiful You are to me." },
            { name: "END", lyrics: "I worship You, in Spirit and in truth. [F1](2x)[/F1]\nThere will never be a friend\nAs dear to me as You." }
        ]
    },
    {
        title: "Lead On O Lord",
        sections: [
            { name: "VERSE", lyrics: "Rise up, O children of God\nMake ready your hands for war.\nThe King now stands before us\nWe join together as loyalists\nTo build His kingdom here on earth\nAnd join in heaven’s chorus." },
            { name: "REFRAIN", lyrics: "Lead on, O Lord,\nUnsheathing our swords.\nWe arm ourselves with Your truth.\nBurn in our hearts, enflame our lives.\nThe battle is now, we’re here to fight." },
            { name: "VERSE", lyrics: "This age it seeks to destroy.\nClouds my mind,\nRobs my heart of Your joy.\nWe pray together for vision.\nOur ears are poised to listen.\nLead us now unto war\nWe accept our mission." },
            { name: "REFRAIN", lyrics: "Lead on, O Lord,\nUnsheathing our swords.\nWe arm ourselves with Your truth.\nBurn in our hearts, enflame our lives.\nThe battle is now, we’re here to fight.\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "The battle is now, we’re here\nThe battle is now, we’re here to fight" }
        ]
    },
    {
        title: "The Lord Is My Rock",
        sections: [
            { name: "VERSE", lyrics: "The chains of death fastened upon me\nThe snares of sin laid their grip on me\nTo the Lord I shouted\nTo the God of my rescue\nFrom His temple the Most High heard my voice" },
            { name: "VERSE", lyrics: "The heavens bowed; God came down to earth\nThe thunder rolled as His Word went forth\nFrom on high He sought me\nFrom the waters He drew me\nAnd delivered me from my enemy" },
            { name: "CHORUS", lyrics: "The Lord is my rock and my fortress\nAnd my deliverer\nMy God and my rock in Whom I take refuge\nMy shield and my salvation\nAnd I shall not be moved\nAnd I shall not be shaken" },
            { name: "VERSE", lyrics: "Now by Your strength I can crush a troop\nAnd by Your might bend a bow of bronze\nWith the Lord beside me\nDemons scatter before me\nGod my champion trains my hands for war" },
            { name: "CHORUS", lyrics: "The Lord is my rock and my fortress\nAnd my deliverer\nMy God and my rock in Whom I take refuge\nMy shield and my salvation\nMy rock and my fortress\nAnd my deliverer\nMy God and my rock in Whom I take refuge\nMy shield and my salvation\nAnd I shall not be moved\nAnd I shall not be shaken" },
            { name: "BRIDGE", lyrics: "The Lord my God lightens my darkness [F1](4x)[/F1]" },
            { name: "VERSE", lyrics: "The Lord, He lives; blessed be my rock!\nExalted be Christ my victory!\nYou will reign forever\nKing above every nation\nWhile Your people sing praises to Your name!" },
            { name: "END", lyrics: "The Lord is my rock and my fortress\nAnd my deliverer\nMy God and my rock in Whom I take refuge\nMy shield and my salvation\nMy rock and my fortress\nAnd my deliverer\nMy God and my rock in Whom I take refuge\nMy shield and my salvation\nAnd I shall not be moved\nAnd I shall not be shaken" }
        ]
    },
    {
        title: "Let God Arise",
        sections: [
            { name: "VERSE", lyrics: "Let us rise with our eyes now fixed on Jesus.\nMay we come to know\nhis precious love victorious.\nLet us stand with the shield of faith around us" },
            { name: "VERSE", lyrics: "Let us raise one voice to glorify our maker.\nSo we move forward,\nwith our eyes fixed on him\nwho ransomed the lowly man from sin." },
            { name: "REFRAIN", lyrics: "The clarion calls we will press on towards\nthe one who calls us onwards now into battle\nWith joy we rise\nand we will answer our King's call\nAs we cry \"Holy worthy mighty is our Lord.\"" },
            { name: "VERSE", lyrics: "Marching on our God will go before us.\nMay we follow in the footsteps of our savior.\nIn his great love he died upon a cross." },
            { name: "VERSE", lyrics: "Let us press on without counting the cost.\nSo we move forward, with our eyes above\nOn him who ransomed us in love." },
            { name: "REFRAIN", lyrics: "The clarion calls we will press on towards\nthe one who calls us onwards now into battle\nWith joy we rise\nand we will answer our King's call\nAs we cry \"Holy worthy mighty is our Lord.\"" },
            { name: "VERSE", lyrics: "WOMEN:\nHe is glorious, victorious in pow'r [F1](4x)[/F1]\n\nMEN:\nLet God arise [F1](3x)[/F1]" },
            { name: "END", lyrics: "As for me I will press on towards\nthe one who calls us onwards now into battle\nWith joy we rise\nand we will answer our King's call\nAs we cry \"Holy worthy mighty is our Lord.\"" }
        ]
    },
    {
        title: "Let Heaven Rejoice",
        sections: [
            { name: "CHORUS", lyrics: "Let heaven rejoice and earth be glad\nLet all creation sing\nLet children proclaim through every land\n“Hosanna to our King!”" },
            { name: "VERSE", lyrics: "Sound the trumpet into the night\nThe day of the Lord is near.\nWake His people, lift your voice\nProclaim it to the world." },
            { name: "CHORUS", lyrics: "Let heaven rejoice and earth be glad\nLet all creation sing\nLet children proclaim through every land\n“Hosanna to our King!”" },
            { name: "VERSE", lyrics: "Rise in splendor, shake off your sleep\nPut on your robes of joy\nAnd in the morning you shall see\nThe glory of the Lord." },
            { name: "CHORUS", lyrics: "Let heaven rejoice and earth be glad\nLet all creation sing\nLet children proclaim through every land\n“Hosanna to our King!”" },
            { name: "VERSE", lyrics: "Raise your voices, be not afraid\nProclaim it in ev’ry land:\n“Christ has died, but He has risen,\nHe will come again!”" },
            { name: "CHORUS", lyrics: "Let heaven rejoice and earth be glad\nLet all creation sing\nLet children proclaim through every land\n“Hosanna to our King!”" },
            { name: "VERSE", lyrics: "Sing a new song unto the Lord\nFor He has done wonderful deeds.\nAnd praise Him, thank Him,\nDance before Him, play before the Lord." },
            { name: "CHORUS", lyrics: "Let heaven rejoice and earth be glad\nLet all creation sing\nLet children proclaim through every land\n“Hosanna to our King!”" },
            { name: "VERSE", lyrics: "Nations tremble, wise men amazed,\nA Child is born this night:\nWonderful Counselor, Mighty God\nA Father, Prince of Peace." },
            { name: "END", lyrics: "Let heaven rejoice and earth be glad\nLet all creation sing\nLet children proclaim through every land\n“Hosanna to our King!”" }
        ]
    },
    {
        title: "Hail The Conqueror",
        sections: [
            { name: "CHORUS", lyrics: "Hail the conqueror\nHail, Redeemer\nJesus Christ, our deliverer\nBy your strong and mighty arm\nYours, the victory\nYou, who opened heaven’s door\nYou, who once were dead\nYou live forevermore" },
            { name: "VERSE", lyrics: "And you, when you are lifted up\nYou will draw all nations to your side\nAnd now the ruler of this world\nIs cast out, and you are lifted high!" },
            { name: "CHORUS", lyrics: "Hail the conqueror\nHail, Redeemer\nJesus Christ, our deliverer\nBy your strong and mighty arm\nYours, the victory\nYou, who opened heaven’s door\nYou, who once were dead\nYou live forevermore" },
            { name: "VERSE", lyrics: "And we, the ransomed of the Lord\nWe are yours, purchased at a price\nAnd now the kingdom and the throne\nThey are yours: the robe, the crown, the prize!\nYou are lifted high!" },
            { name: "CHORUS", lyrics: "Hail the conqueror\nHail, Redeemer\nJesus Christ, our deliverer\nBy your strong and mighty arm\nYours, the victory\nYou, who opened heaven’s door\nYou, who once were dead\nYou live forevermore" },
            { name: "BRIDGE", lyrics: "All kingdoms, all rulers\nYou place under your feet\nYour power has conquered\nOur final enemy!\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "Hail the conqueror\nHail, Redeemer\nJesus Christ, our deliverer\nBy your strong and mighty arm\nYours, the victory\nYou, who opened heaven’s door\nYou, who once were dead\nYou live forevermore [F1](2x)[/F1]" }
        ]
    },
    {
        title: "Let The Fire Fall",
        sections: [
            { name: "VERSE", lyrics: "Holy Spirit, [F1](Holy Spirit)[/F1]\nCome with Your fire!\n[F1](2x)[/F1]\n\nHoly Spirit, come with Your fire!\n[F1](2x)[/F1]" },
            { name: "REFRAIN", lyrics: "Come, Holy Spirit, let the fire fall! [F1](2x)[/F1]\nLet the fire fall! [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Holy Spirit, [F1](Holy Spirit)[/F1]\nPurify my heart!\n[F1](2x)[/F1]\n\nHoly Spirit, purify my heart!\n[F1](2x)[/F1]" },
            { name: "REFRAIN", lyrics: "Come, Holy Spirit, let the fire fall! [F1](2x)[/F1]\nLet the fire fall! [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Holy Spirit, [F1](Holy Spirit)[/F1]\nSet my life on fire!\n[F1](2x)[/F1]\n\nHoly Spirit, set my life on fire!\n[F1](2x)[/F1]" },
            { name: "REFRAIN", lyrics: "Come, Holy Spirit, let the fire fall! [F1](2x)[/F1]\nLet the fire fall! [F1](2x)[/F1]" },
            { name: "END", lyrics: "Let the fire fall! Let the fire fall!" }
        ]
    },
    {
        title: "Let The Righteous Be Glad",
        sections: [
            { name: "VERSE", lyrics: "Let God arise\nLet His enemies be scattered\nLet those who hate Him flee before Him!\nAs smoke is driven, so drive them away\nAs wax melts before the fire." },
            { name: "REFRAIN", lyrics: "Let the righteous be glad,\nExulting before God, jubilant with joy!\nSing to God, sing praises to His name\nLift up a song to Him\nWho rides upon the clouds." },
            { name: "VERSE", lyrics: "O God, when You went forth\nBefore Your people,\nWhen You marched\nThrough the wilderness,\nThe earth quaked,\nThe heavens poured down rain\nAt the presence of the God of Israel." },
            { name: "REFRAIN", lyrics: "Let the righteous be glad,\nExulting before God, jubilant with joy!\nSing to God, sing praises to His name\nLift up a song to Him\nWho rides upon the clouds." },
            { name: "VERSE", lyrics: "With mighty chariots,\nThousands upon thousands,\nThe Lord came to the holy place.\nYou ascended leading captives\nIn your train\nAnd receiving gifts among men." },
            { name: "REFRAIN", lyrics: "Let the righteous be glad,\nExulting before God, jubilant with joy!\nSing to God, sing praises to His name\nLift up a song to Him\nWho rides upon the clouds." },
            { name: "VERSE", lyrics: "Summon Your might, O God,\nShow forth Your strength,\nYou who have conquered for us.\nOur God is a God of salvation\nTo Him belongs escape from death." },
            { name: "REFRAIN", lyrics: "Let the righteous be glad,\nExulting before God, jubilant with joy!\nSing to God, sing praises to His name\nLift up a song to Him\nWho rides upon the clouds." },
            { name: "VERSE", lyrics: "He sends forth His voice,\nHis mighty voice,\nHe who rides in the ancient heavens.\nSing to God, O kingdoms of the earth,\nSing praises to the Lord." },
            { name: "REFRAIN", lyrics: "Let the righteous be glad,\nExulting before God, jubilant with joy!\nSing to God, sing praises to His name\nLift up a song to Him\nWho rides upon the clouds." },
            { name: "VERSE", lyrics: "Awesome is the Lord is His sanctuary\nWhose majesty is over Israel.\nHe gives power\nAnd strength to His people –\nBlessed be our God!" },
            { name: "END", lyrics: "Let the righteous be glad,\nExulting before God, jubilant with joy!\nSing to God, sing praises to His name\nLift up a song to Him\nWho rides upon the clouds." }
        ]
    },
    {
        title: "Let The Saints Be Joyful",
        sections: [
            { name: "REFRAIN", lyrics: "Let the saints be joyful in glory,\nLet the high praises of God\nBe in their mouth,\nAnd a two-edged sword\nIn their hand.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Enter His gates with thanksgiving,\nEnter His courts with praise.\nBe thankful to Him, bless His name.\nFor the Lord is good\nAnd His mercy is everlasting\nAnd His truth endureth for all time." },
            { name: "VERSE", lyrics: "[F1](Men)[/F1]\nEnter His gates with thanksgiving,\nEnter His courts with praise!\nBe thankful to Him, bless His name.\n[C1][F1](Women)[/F1]\nLet the saints be joyful in glory,\nLet the high praises of God be in their mouth,\nAnd a two-edged sword in their hand.[/C1]" },
            { name: "VERSE", lyrics: "[F1](Men)[/F1]\nFor the Lord is good\nAnd His mercy is everlasting\nAnd His truth endureth for all time.\n[C1][F1](Women)[/F1]\nLet the saints be joyful in glory\nLet the high praises of God be in their mouth\nAnd a two-edged sword in their hand.\n[/C1]" },
            { name: "END", lyrics: "Let the saints be joyful in glory,\nLet the high praises of God\nBe in their mouth,\nAnd a two-edged sword\nIn their hand.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Testify",
        sections: [
            { name: "VERSE", lyrics: "Nothing compares to\nThe joy of knowing You\nYou show me the path of life\nAnd Your grace is ever new" },
            { name: "PRE-CHORUS-1", lyrics: "For the Word became flesh and dwelt among us\nYour word that is living and true." },
            { name: "CHORUS", lyrics: "I will heed your call my God and king\nYour endless praises I will sing\nFor I have seen your glory\nFor You alone are worthy\n\nI will follow You, leave all behind\nO with my life I'll testify\nFor I have seen your glory\nFor You alone are worthy" },
            { name: "VERSE", lyrics: "Teach me Your paths Lord\nAnd guide me in Your truth\nCome with Your living presence\nand enflame my heart for You" },
            { name: "PRE-CHORUS-2", lyrics: "For Your words are spirit and life\nAll for You, I will stand and fight" },
            { name: "CHORUS", lyrics: "I will heed your call my God and king\nYour endless praises I will sing\nFor I have seen Your glory\nFor You alone are worthy\n\nI will follow You, leave all behind\nO with my life I'll testify\nFor I have seen Your glory\nFor You alone are worthy\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Let Us Exalt His Name",
        sections: [
            { name: "VERSE", lyrics: "At all times I will bless Him\nHis praise will be in my mouth\nMy soul makes its boast in the Lord.\nThe humble man will hear of Him\nThe afflicted will be glad\nAnd join with me to magnify the Lord." },
            { name: "REFRAIN", lyrics: "Let us exalt His name together forever.\nI sought the Lord, He heard me\nAnd delivered me from my fears.\nLet us exalt His name together forever.\nO, sing His praises, magnify the Lord." },
            { name: "VERSE", lyrics: "The angel of the Lord encamps\n‘Round those who fear His name\nTo save them\nAnd deliver them from harm.\nThough lions roar with hunger\nWe lack for no good thing.\nNo wonder then we praise Him\nWith our song." },
            { name: "REFRAIN", lyrics: "Let us exalt His name together forever.\nI sought the Lord, He heard me\nAnd delivered me from my fears.\nLet us exalt His name together forever.\nO, sing His praises, magnify the Lord." },
            { name: "VERSE", lyrics: "Come, children, now and hear me\nIf you would see long life\nJust keep your lips\nFrom wickedness and lies.\nDo good and turn from evil\nSeek peace instead of strife\nLove righteousness\nAnd God will hear your cry." },
            { name: "END", lyrics: "Let us exalt His name together forever.\nI sought the Lord, He heard me\nAnd delivered me from my fears.\nLet us exalt His name together forever.\nO, sing His praises, magnify the Lord.\n[F1](2x)[/F1]\n\nO, sing His praises, magnify the Lord." }
        ]
    },
    {
        title: "Let Your Glory Fall",
        sections: [
            { name: "VERSE", lyrics: "Father of creation,\nUnfold Your sovereign plan.\nRaise up a chosen generation\nThat will march through the land." },
            { name: "VERSE", lyrics: "All creation is longing\nFor Your unveiling of pow’r\nWould You release Your anointing?\nO God, let this be the hour!" },
            { name: "REFRAIN", lyrics: "Let Your glory fall on this room.\nLet it go forth from here to the nations.\nLet Your fragrance rest in this place\nAs we gather to seek Your face." },
            { name: "VERSE", lyrics: "Ruler of nations,\nThe world has yet to see\nThe full release of Your promise,\nThe Church in victory." },
            { name: "VERSE", lyrics: "Turn to us, Lord, and touch us.\nMake us strong in Your might.\nOvercome our weakness,\nThat we could stand up and fight." },
            { name: "REFRAIN", lyrics: "Let Your glory fall on this room.\nLet it go forth from here to the nations.\nLet Your fragrance rest in this place\nAs we gather to seek Your face." },
            { name: "VERSE", lyrics: "Let your Kingdom come. [F1](echo)[/F1]\nLet Your will be done. [F1](echo)[/F1]\nLet us see on earth [F1](echo)[/F1]\nThe glory of Your Son.\n[F1](3x)[/F1]" },
            { name: "END", lyrics: "Let Your glory fall on this room.\nLet it go forth from here to the nations.\nLet Your fragrance rest in this place\nAs we gather to seek Your face.\n\nWe are gathered to seek Your face." }
        ]
    },
    {
        title: "Let Your Glory Fill This House",
        sections: [
            { name: "CHORUS", lyrics: "Let Your glory fill this house\nAnd Your presence fill our hearts\nAs Your praise fills our mouths\nO Lord, my God!" }
        ]
    },
    {
        title: "Lift High The Banners Of Love",
        sections: [
            { name: "REFRAIN", lyrics: "Lift high the banners of love!\nHallelujah!\nSound the trumpets of war!\nChrist has gotten us the vict’ry!\nHallelujah!\nJericho must fall." },
            { name: "VERSE", lyrics: "The body of Christ is an army\nFighting powers unseen\nBringing the captives to freedom\nIn the name of Jesus our King." },
            { name: "REFRAIN", lyrics: "Lift high the banners of love!\nHallelujah!\nSound the trumpets of war!\nChrist has gotten us the vict’ry!\nHallelujah!\nJericho must fall." },
            { name: "VERSE", lyrics: "Brothers, are you sure of your calling?\nWill you fight for Jesus the King?\nAre you prepared in this battle\nTo lay down your lives for your friends." },
            { name: "REFRAIN", lyrics: "Lift high the banners of love!\nHallelujah!\nSound the trumpets of war!\nChrist has gotten us the vict’ry!\nHallelujah!\nJericho must fall." },
            { name: "VERSE", lyrics: "We must stand in unity\nBy the Spirit made strong.\nStand with Jesus our Captain\nAnd fight till God’s Kingdom has come." },
            { name: "REFRAIN", lyrics: "Lift high the banners of love!\nHallelujah!\nSound the trumpets of war!\nChrist has gotten us the vict’ry!\nHallelujah!\nJericho must fall." },
            { name: "VERSE", lyrics: "Preach the Savior crucified,\nDead but risen again.\nCome against the powers of darkness\nIn His glorious name." },
            { name: "REFRAIN", lyrics: "Lift high the banners of love!\nHallelujah!\nSound the trumpets of war!\nChrist has gotten us the vict’ry!\nHallelujah!\nJericho must fall." },
            { name: "VERSE", lyrics: "In the name of God the Father,\nIn the name of Jesus, His Son\nAnd in the name of the Spirit,\nWe will fight till we are called home." },
            { name: "END", lyrics: "Lift high the banners of love!\nHallelujah!\nSound the trumpets of war!\nChrist has gotten us the vict’ry!\nHallelujah!\nJericho must fall." }
        ]
    },
    {
        title: "Lift High The Cross Of Christ",
        sections: [
            { name: "REFRAIN", lyrics: "Lift high the cross of Christ!\nRejoice in the cross of Christ!\nIt was there our Savior hung,\nThere our vict’ry was won!\nLift high the cross of Christ!" },
            { name: "VERSE", lyrics: "[F1](Women)[/F1] How was our salvation won?\n[F1](Men)[/F1] It was the cross of Christ!\n[F1](Women)[/F1] How were sin and death undone?\n[F1](Men)[/F1] It was the cross of Christ!" },
            { name: "REFRAIN", lyrics: "Lift high the cross of Christ!\nRejoice in the cross of Christ!\nIt was there our Savior hung,\nThere our vict’ry was won!\nLift high the cross of Christ!" },
            { name: "VERSE", lyrics: "[F1](Women)[/F1] How were our diseases healed?\n[F1](Men)[/F1] It was the cross of Christ!\n[F1](Women)[/F1] How was the law of death repealed?\n[F1](Men)[/F1] It was the cross of Christ!" },
            { name: "REFRAIN", lyrics: "Lift high the cross of Christ!\nRejoice in the cross of Christ!\nIt was there our Savior hung,\nThere our vict’ry was won!\nLift high the cross of Christ!" },
            { name: "VERSE", lyrics: "[F1](Both)[/F1] What set all the captives free?\nIt was the cross of Christ!\nOpened the gates for you and me?\nIt was the cross of Christ!" },
            { name: "END", lyrics: "Lift high the cross of Christ!\nRejoice in the cross of Christ!\nIt was there our Savior hung,\nThere our vict’ry was won!\nLift high the cross of Christ!" }
        ]
    },
    {
        title: "Lift Up Your Hands To God",
        sections: [
            { name: "VERSE", lyrics: "Life is not at all that bad my friend, hmm…\nIf you believe in yourself,\nIf you believe there’s Someone\nWho walks through life with you,\nYou’ll never be alone, just learn to reach out\nAnd open your heart,\nLift up your hands to God\nAnd He’ll show you the way." },
            { name: "END", lyrics: "And He said: “Cast your burdens upon Me,\nThose who are heavily laden.\nCome to me, all of you who are tired\nOf carrying heavy loads.\nFor the yoke I will give you is easy\nAnd my burden is light.\nCome to me, and I will give you rest.”" }
        ]
    },
    {
        title: "Lift Up Your Heads O Gates",
        sections: [
            { name: "REFRAIN", lyrics: "Lift up your heads, O gates,\nAnd be lifted up, O ancient doors.\nThat He may enter, the Lord of armies,\nTriumphant and valiant in war!\nThe mighty King of glory,\nJesus Christ the Lord!" },
            { name: "VERSE", lyrics: "O King most High,\nGird Your sword upon Your thigh.\nIn glory and splendor ride forth to war\nO’er all Your foes You are Lord!" },
            { name: "REFRAIN", lyrics: "Lift up your heads, O gates,\nAnd be lifted up, O ancient doors.\nThat He may enter, the Lord of armies,\nTriumphant and valiant in war!\nThe mighty King of glory,\nJesus Christ the Lord!" },
            { name: "VERSE", lyrics: "Come, behold His works,\nHe makes wars to cease\nO’er all the earth.\nThe Lord breaks the bow\nAnd He shatters the spear\nHe burns the chariots with fire." },
            { name: "REFRAIN", lyrics: "Lift up your heads, O gates,\nAnd be lifted up, O ancient doors.\nThat He may enter, the Lord of armies,\nTriumphant and valiant in war!\nThe mighty King of glory,\nJesus Christ the Lord!" },
            { name: "VERSE", lyrics: "Come, behold the Lamb\nTake His seat at God’s right hand.\nThe Lion of Judah has conquered death\nAnd brought new life for all men." },
            { name: "REFRAIN", lyrics: "Lift up your heads, O gates,\nAnd be lifted up, O ancient doors.\nThat He may enter, the Lord of armies,\nTriumphant and valiant in war!\nThe mighty King of glory,\nJesus Christ the Lord!" },
            { name: "VERSE", lyrics: "Come again, O Lord,\nWield Your mighty two-edg’d sword.\nIn righteousness, Jesus,\nCome, judge and make war\nTill sin and death be no more." },
            { name: "END", lyrics: "Lift up your heads, O gates,\nAnd be lifted up, O ancient doors.\nThat He may enter, the Lord of armies,\nTriumphant and valiant in war!\nThe mighty King of glory,\nJesus Christ the Lord!" }
        ]
    },
    {
        title: "Lift Your Banners High",
        sections: [
            { name: "VERSE", lyrics: "What can stand against the Lord\nAnd against the praises of His saints?\n[F1](2x)[/F1]\nLift your banners high.\nGod, our righteousness,\nIs coming to His people.\nLift your banners high.\nGod, our righteousness,\nIs coming to His temple." }
        ]
    },
    {
        title: "Look Beyond",
        sections: [
            { name: "REFRAIN", lyrics: "Look beyond the bread you eat,\nSee your Savior and your Lord.\nLook beyond the cup you drink,\nSee His love poured out as blood." },
            { name: "VERSE", lyrics: "Give us a sign\nThat we might believe in you.\nOur fathers brought us manna\nFrom the sky." },
            { name: "REFRAIN", lyrics: "Look beyond the bread you eat,\nSee your Savior and your Lord.\nLook beyond the cup you drink,\nSee His love poured out as blood." },
            { name: "VERSE", lyrics: "I am the bread\nWhich from the heavens came.\nHe who eats this bread will never die." },
            { name: "REFRAIN", lyrics: "Look beyond the bread you eat,\nSee your Savior and your Lord.\nLook beyond the cup you drink,\nSee His love poured out as blood." },
            { name: "VERSE", lyrics: "The bread I give you\nWill be My very flesh.\nMy blood will truly be your drink." },
            { name: "REFRAIN", lyrics: "Look beyond the bread you eat,\nSee your Savior and your Lord.\nLook beyond the cup you drink,\nSee His love poured out as blood." },
            { name: "VERSE", lyrics: "This man speaks harshly;\nWho can listen to His word?\nWe shall no longer follow Him." },
            { name: "REFRAIN", lyrics: "Look beyond the bread you eat,\nSee your Savior and your Lord.\nLook beyond the cup you drink,\nSee His love poured out as blood." },
            { name: "VERSE", lyrics: "You, my disciples,\nWill you also leave?\nLord, to whom can we go?" },
            { name: "END", lyrics: "Look beyond the bread you eat,\nSee your Savior and your Lord.\nLook beyond the cup you drink,\nSee His love poured out as blood." }
        ]
    },
    {
        title: "Lord I Believe",
        sections: [
            { name: "REFRAIN", lyrics: "Lord, I believe! [F1](2x)[/F1]\nI believe You are the Christ,\nLord, I believe!" },
            { name: "VERSE", lyrics: "I believe You were born of virgin.\nI believe You suffered and died.\nI believe You rose from the dead.\nI believe You are alive." },
            { name: "REFRAIN", lyrics: "Lord, I believe! [F1](2x)[/F1]\nI believe You are the Christ,\nLord, I believe!" },
            { name: "VERSE", lyrics: "I believe that You ascended.\nI believe You’ve sent Your Spirit.\nI believe that You will come again.\nMaranatha! Come, Lord Jesus!" },
            { name: "END", lyrics: "Lord, I believe! [F1](2x)[/F1]\nI believe You are the Christ,\nLord, I believe!" }
        ]
    },
    {
        title: "Lord I Lift Your Name On High",
        sections: [
            { name: "VERSE", lyrics: "Lord, I lift Your name on high.\nLord, I love to sing Your praises.\nI’m so glad You’re in my life.\nI’m so glad You came to save us." },
            { name: "REFRAIN", lyrics: "You came from heaven to earth\nTo show the way\nFrom the earth to the cross\nMy debt to pay\nFrom the cross to the grave\nFrom the grave to the sky\nLord, I lift Your name on high." },
            { name: "VERSE", lyrics: "Lord, I lift Your name on high.\nLord, I love to sing Your praises.\nI’m so glad You’re in my life.\nI’m so glad You came to save us." },
            { name: "REFRAIN", lyrics: "You came from heaven to earth\nTo show the way\nFrom the earth to the cross\nMy debt to pay\nFrom the cross to the grave\nFrom the grave to the sky\nLord, I lift Your name on high." },
            { name: "END", lyrics: "You came from heaven to earth\nTo show the way\nFrom the earth to the cross\nMy debt to pay\nFrom the cross to the grave\nFrom the grave to the sky\nLord, I lift Your name on high.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Lord Jesus We Enthrone You",
        sections: [
            { name: "VERSE", lyrics: "Lord Jesus, we enthrone You.\nWe proclaim You are King.\nStanding here in the midst of us\nWe raise You up with our praise." },
            { name: "REFRAIN", lyrics: "And as we worship build a throne\n[F1](3x)[/F1]\n\nCome, Lord Jesus, and take Your place!" },
            { name: "VERSE", lyrics: "Lord Jesus, we enthrone You.\nWe proclaim You are King.\nStanding here in the midst of us\nWe raise You up with our praise." },
            { name: "REFRAIN", lyrics: "And as we worship build a throne\n[F1](3x)[/F1]\n\nCome, Lord Jesus, and take Your place!" },
            { name: "END", lyrics: "And as we worship build a throne\n[F1](3x)[/F1]\n\nCome, Lord Jesus, and take Your place!\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Lord We Come Into Your Holy Presence",
        sections: [
            { name: "VERSE", lyrics: "Lord, we come into Your holy presence\nThere to gaze upon Your face.\nThrough the veil\nWe see You robed in glory\nBefore Your throne to take our place." },
            { name: "VERSE", lyrics: "And with our voices\nWe now praise Your name:\nYou are our King and no other!\nWe cry to You, “Establish your reign!”\nWe shout, “Your Kingdom come!”" },
            { name: "REFRAIN", lyrics: "Hallelujah, our King! Glory to God!\nWe call on Your name.\nGive us strength for the fight.\nBuild us up by Your power.\nMake us one in Your name.\nYour Kingdom come!" },
            { name: "VERSE", lyrics: "Lord, we come into Your holy presence\nThere to gaze upon Your face.\nThrough the veil\nWe see You robed in glory\nBefore Your throne to take our place." },
            { name: "VERSE", lyrics: "And with our voices\nWe now praise Your name:\nYou are our King and no other!\nWe cry to You, “Establish your reign!”\nWe shout, “Your Kingdom come!”" },
            { name: "END", lyrics: "Hallelujah, our King! Glory to God!\nWe call on Your name.\nGive us strength for the fight.\nBuild us up by Your power.\nMake us one in Your name.\nYour Kingdom come!\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Lord We Give To You",
        sections: [
            { name: "REFRAIN", lyrics: "Lord, we give to You\nThe glory and honor You are due\nWith hearts and hands upraised.\nNo worldly riches compare\nWith the joy of seeing You face to face.\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "With the joy of seeing You face to face." }
        ]
    },
    {
        title: "Lord Enkindle Me",
        sections: [
            { name: "VERSE", lyrics: "Lord, enkindle me.\nFan the flame in my heart for Thee.\nTake my life to be Your life,\nBe the light in me." },
            { name: "VERSE", lyrics: "Mold me to your likeness,\nPurified in holiness.\nWarm my heart to be Your heart,\nLove Your world through me." },
            { name: "REFRAIN", lyrics: "Set my heart on fire for Thee!\nMagnify Your light in me!\nLove that dies… that love may rise\nYour love raised on high!" },
            { name: "VERSE", lyrics: "Lord, enkindle me.\nFan the flame in my heart for Thee.\nTake my life to be Your life,\nBe the light in me." },
            { name: "VERSE", lyrics: "Mold me to your likeness,\nPurified in holiness.\nWarm my heart to be Your heart,\nLove Your world through me." },
            { name: "END", lyrics: "Set my heart on fire for Thee!\nMagnify Your light in me!\nLove that dies… that love may rise\nYour love raised on high!\n[F1](2x)[/F1]\n\nLord, enkindle me." }
        ]
    },
    {
        title: "Make A Joyful Noise",
        sections: [
            { name: "CHORUS", lyrics: "Come, make a joyful noise to God,\nAll the earth.\nBreak forth in joyous song,\nSing praises to your King!\nWith lyre and the sound of melody,\nTrumpets and the horn,\nMake a joyful noise to the King, the Lord." },
            { name: "VERSE", lyrics: "The heavens thunder\nWith the glory of the Lord.\nHe is revealed in majesty and strength!" },
            { name: "CHORUS", lyrics: "Come, make a joyful noise to God,\nAll the earth.\nBreak forth in joyous song,\nSing praises to your King!\nWith lyre and the sound of melody,\nTrumpets and the horn,\nMake a joyful noise to the King, the Lord." },
            { name: "VERSE", lyrics: "Let all the earth rejoice,\nThe people sing together.\nHow greatly they exult\nBefore their mighty King!" },
            { name: "CHORUS", lyrics: "Come, make a joyful noise to God,\nAll the earth.\nBreak forth in joyous song,\nSing praises to your King!\nWith lyre and the sound of melody,\nTrumpets and the horn,\nMake a joyful noise to the King, the Lord." },
            { name: "VERSE", lyrics: "Lift up your festal shout\nIn the gath’ring of the faithful.\nFor the Lord delights\nIn the praise of His saints." },
            { name: "END", lyrics: "Come, make a joyful noise to God,\nAll the earth.\nBreak forth in joyous song,\nSing praises to your King!\nWith lyre and the sound of melody,\nTrumpets and the horn,\nMake a joyful noise to the King, the Lord." }
        ]
    },
    {
        title: "Make Me A Servant",
        sections: [
            { name: "VERSE", lyrics: "Make me a servant, humble and meek.\nLord, let me lift up those who are weak.\nAnd may this the pray’r\nOf my heart always be:\nMake me a servant, make me a servant,\nMake me a servant today." }
        ]
    },
    {
        title: "Make My Heart Your Dwelling Place",
        sections: [
            { name: "VERSE", lyrics: "Make my heart Your dwelling place\nA temple just for You\nA consecrated resting place\nA vessel ever true." },
            { name: "END", lyrics: "Make my heart a fire\nWith the brightness of Your Son.\nMake my heart a dwelling place\nFor the Holy One." }
        ]
    },
    {
        title: "Make Us Yours",
        sections: [
            { name: "VERSE", lyrics: "Even now, return to Him.\nRend your hearts, and come to Him;\nFor He is ever faithful\nto heal our faithlessness.\nThe Lord will make us His if we would but return." },
            { name: "REFRAIN", lyrics: "Make us Yours, Lord\nMake of us a people\nPrecious in Your eyes\n Made whole for You." },
            { name: "REFRAIN", lyrics: "Come restore, Lord\n To send us forth, Lord\nTo walk in holiness with You\nLord, make us Yours." },
            { name: "VERSE", lyrics: "From the north He calls his sons.\nHis children come from far away.\nOvercome with gladness,\nBy streams of living water\nThe ransomed of the Lord\nwill return to Him." },
            { name: "REFRAIN", lyrics: "Make us Yours, Lord\nMake of us a people\nPrecious in Your eyes\n Made whole for You." },
            { name: "REFRAIN", lyrics: "Come restore, Lord\n To send us forth, Lord\nTo walk in holiness with You\nLord, make us Yours." },
            { name: "END", lyrics: "Make us Yours, Lord\nMake of us a people\nPrecious in Your eyes\n Made whole for You." },
            { name: "END", lyrics: "Come restore, Lord\n To send us forth, Lord\nTo walk in holiness with You\nLord, make us Yours." }
        ]
    },
    {
        title: "Make Way",
        sections: [
            { name: "INTRO", lyrics: "Make way for the King of Glory!\nPrepare for the Prince of Peace!\nSing praise to our Lord, Christ Jesus!\nMake way for him in your heart!" },
            { name: "REFRAIN", lyrics: "Come holy priestly healer!\nCome saving Lamb of God!\nCome mighty King, Christ Jesus!\nRenew us in your love!" },
            { name: "VERSE", lyrics: "You are the first-born Son\nOf all creation.\nThrough you all things were made;\nBy you we have been saved." },
            { name: "REFRAIN", lyrics: "Come holy priestly healer!\nCome saving Lamb of God!\nCome mighty King, Christ Jesus!\nRenew us in your love!" },
            { name: "VERSE", lyrics: "You are the Lord of love,\nSent from the Father above\nTo reconcile all men;\nYour death brought life again." },
            { name: "REFRAIN", lyrics: "Come holy priestly healer!\nCome saving Lamb of God!\nCome mighty King, Christ Jesus!\nRenew us in your love!" },
            { name: "VERSE", lyrics: "You reign above all things;\nOur God and sov’reign King!\nTrue peace and unity\nYou give to your body." },
            { name: "REFRAIN", lyrics: "Come holy priestly healer!\nCome saving Lamb of God!\nCome mighty King, Christ Jesus!\nRenew us in your love!" },
            { name: "END", lyrics: "Make way for the King of Glory!\nPrepare for the Prince of Peace!\nSing praise to our Lord, Christ Jesus!\nMake way for him in your heart!" }
        ]
    },
    {
        title: "Matthew 22",
        sections: [
            { name: "VERSE", lyrics: "The Lord, the Lord\nMerciful and gracious, slow to anger\nAbounding in steadfast love.\nThe Lord, the Lord\nMerciful and gracious,\nAbounding in steadfast love\nAnd faithfulness." },
            { name: "REFRAIN", lyrics: "And you shall love the Lord, your God,\nWith all your heart and mind and soul.\nAnd you shall love the Lord, your God,\nWith all your strength." },
            { name: "VERSE", lyrics: "You will cry to me,\nI will hear your voice.\nI’ll bring you back to Myself\nFrom whence you came.\nI know the plans I have laid for you\nPlans for welfare, a future and a hope." },
            { name: "REFRAIN", lyrics: "And you shall love the Lord, your God,\nWith all your heart and mind and soul.\nAnd you shall love the Lord, your God,\nWith all your strength." },
            { name: "VERSE", lyrics: "I say, “Be strong and of good courage.\nYou need not fear, neither be dismayed.\nPut away all other gods,\nTake a stand and say,\n‘As for me and my house,\nWe will serve the Lord’.”" },
            { name: "REFRAIN", lyrics: "And we will love the Lord, our God,\nWith all our heart and mind and soul.\nAnd we will love the Lord, our God,\nWith all our strength." },
            { name: "END", lyrics: "Yes, we will love the Lord, our God,\nWith all our heart and mind and soul.\nYes, we will love the Lord, our God,\nWith all our strength,\nWith all our strength." }
        ]
    },
    {
        title: "Mighty Is Our God",
        sections: [
            { name: "REFRAIN", lyrics: "Hallelujah! [F1](8x)[/F1]" },
            { name: "REFRAIN", lyrics: "Mighty is our God, the everlasting King.\nAll the earth proclaim\nThe glories of His name.\nEnthroned in the heavens\nThe angels sing His praise.\nMighty is our God! Holy is He!" },
            { name: "REFRAIN", lyrics: "Hallelujah! [F1](8x)[/F1]" },
            { name: "REFRAIN", lyrics: "Praise Him, sun and moon.\nPraise Him, stars of light.\nPraise Him in the depths\nAnd praise Him in the heights.\nLet the heavens be glad\nAnd the earth rejoice!\nMighty is our God! Holy is He!" },
            { name: "REFRAIN", lyrics: "Hallelujah! [F1](8x)[/F1]" },
            { name: "REFRAIN", lyrics: "Witness to all men\nThe joy of the Lord.\nFor upon us all\nHis love He has poured.\nLet every tongue confess forever:\n“Jesus is Lord! Worthy is He!”" },
            { name: "END", lyrics: "Hallelujah! [F1](8x)[/F1]" }
        ]
    },
    {
        title: "Mighty King Of Zion",
        sections: [
            { name: "VERSE", lyrics: "Praise You, Lord, mighty King of Zion,\nMighty God of Israel.\nSave us, Lord, from the roaring lion\nCast down the workings of the infidel." },
            { name: "REFRAIN", lyrics: "O my Strength, I will sing Thy praises.\nThou, O Lord, are a shield to me.\nO my King, though the battle rages\nI look with vict’ry on my enemies." },
            { name: "VERSE", lyrics: "Rouse Thyself like a roaring fire,\nIsrael’s hope, bright Morning Star.\nBurn like chaff the father of liars\nLight up creation with Thy blazing pow’r." },
            { name: "REFRAIN", lyrics: "O my Strength, I will sing Thy praises.\nThou, O Lord, are a shield to me.\nO my King, though the battle rages\nI look with vict’ry on my enemies.\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "Praise You, Lord, mighty King of Zion!" }
        ]
    },
    {
        title: "More Of You",
        sections: [
            { name: "VERSE", lyrics: "More of you O God.\nMore of you, Christ Jesus.\nMore of you O Spirit,\nWe want more of who you are." },
            { name: "VERSE", lyrics: "More abundant life,\nmore indwelling presence,\nmore transforming power,\nwe want more, we yearn for you." },
            { name: "REFRAIN", lyrics: "Be welcomed here\ncome be enthroned on our praise.\nWe have made room, all else is loss,\nwe wait for you.\n\nWe will not rest,\nuntil you make your home with us.\nUntil you come and satisfy us, we want more." },
            { name: "VERSE", lyrics: "More of you O God.\nMore of you, Christ Jesus.\nMore of you O Spirit,\nWe want more of who you are." },
            { name: "VERSE", lyrics: "More abundant life,\nmore indwelling presence,\nmore transforming power,\nwe want more, we yearn for you." },
            { name: "END", lyrics: "Be welcomed here\ncome be enthroned on our praise.\nWe have made room, all else is loss,\nwe wait for you.\n\nWe will not rest,\nuntil you make your home with us.\nUntil you come and satisfy us, we want more." }
        ]
    },
    {
        title: "Mountains And Hills",
        sections: [
            { name: "REFRAIN", lyrics: "Mountains and hills shall\nBreak forth into song before us\nAnd all the trees of the earth\nClap their hands." },
            { name: "VERSE", lyrics: "Those whom the Lord has ransomed\nWill enter Zion singing\nCrowned with everlasting joy\nAnd sorrow and mourning will flee." },
            { name: "REFRAIN", lyrics: "Mountains and hills shall\nBreak forth into song before us\nAnd all the trees of the earth\nClap their hands." },
            { name: "VERSE", lyrics: "He led us forth from darkness\nAnd broke our bonds asunder.\nLet us give thanks to the Lord\nFor all His wondrous deeds." },
            { name: "REFRAIN", lyrics: "Mountains and hills shall\nBreak forth into song before us\nAnd all the trees of the earth\nClap their hands." },
            { name: "VERSE", lyrics: "Give to the Lord glory,\nGive Him the honor due His name.\nTremble before Him, all the earth\nFor He is King." },
            { name: "REFRAIN", lyrics: "Mountains and hills shall\nBreak forth into song before us\nAnd all the trees of the earth\nClap their hands." },
            { name: "VERSE", lyrics: "He comes to rule the earth\nO, let the rivers clap their hands\nThe mountains shout with them\nFor joy before the Lord." },
            { name: "REFRAIN", lyrics: "Mountains and hills shall\nBreak forth into song before us\nAnd all the trees of the earth\nClap their hands." },
            { name: "VERSE", lyrics: "The Lord shall reign forever,\nYour God, O Zion, through all ages.\nAlleluia, alleluia, alleluia!" },
            { name: "END", lyrics: "Mountains and hills shall\nBreak forth into song before us\nAnd all the trees of the earth\nClap their hands." }
        ]
    },
    {
        title: "My All For You",
        sections: [
            { name: "VERSE", lyrics: "My all for You, all else left behind.\nSingle of heart, single of mind\nSingle of vision\nConsumed with a single goal:\nTo know and love\nAnd serve You with all my soul." },
            { name: "VERSE", lyrics: "My all for You, You’ve paid the price.\nIn grateful love, I offer in Christ\nA sacrifice of life outpoured\nIn undivided devotion to You, my Lord." },
            { name: "END", lyrics: "My all for You, to You I belong.\nOne thing I ask You, for one thing I long:\nTo dwell in Your presence\nBeholding Your face\nThere to worship and adore You\nAll my days, all my days!" }
        ]
    },
    {
        title: "My God And My All",
        sections: [
            { name: "REFRAIN", lyrics: "My King and my all,\nMy Lord and my all,\nMy God and my all,\nMy life, my all, my God." },
            { name: "VERSE", lyrics: "You are my treasure in this life.\nIn knowing You,\nI have wealth beyond compare.\nYou are the pearl of great price.\nIn finding You,\nI rejoice as if all riches were mine." },
            { name: "REFRAIN", lyrics: "My King and my all,\nMy Lord and my all,\nMy God and my all,\nMy life, my all, my God." },
            { name: "VERSE", lyrics: "You are the portion of my soul.\nIn loving You,\nI have hope beyond this age.\nIn You alone my joy is full\nAnd seeing You face to face\nI shall need nothing more besides." },
            { name: "REFRAIN", lyrics: "My King and my all,\nMy Lord and my all,\nMy God and my all,\nMy life, my all, my God." },
            { name: "VERSE", lyrics: "You are my stronghold true and sure.\nIn trusting You,\nI stand firm against my foes.\nYou give me wisdom by Your word\nAnd in Your light and Your truth\nI shall not stumble or stray." },
            { name: "END", lyrics: "My King and my all,\nMy Lord and my all,\nMy God and my all,\nMy life, my all, my God. And my all …\nMy God and my all. [F1](3x)[/F1]" }
        ]
    },
    {
        title: "My Inheritance The Lord",
        sections: [
            { name: "VERSE", lyrics: "My inheritance the Lord my promised expectation\nHow excellent my reward in him\nIn him is my song my cup and firm foundation\nMy tower my all in all the Lord" },
            { name: "CHORUS", lyrics: "[F1](Men)[/F1] And now my God I search to see your face\n[F1](Women)[/F1] And rejoice in knowing you [F1](…rejoice in knowing you)[/F1]\n[F1](Men)[/F1] To find you in my eyes renewed by faith\n[F1](Women)[/F1] and adore forever more [F1](…adore forever more)[/F1]\n[F1](Men)[/F1] To taste of heaven in the center of my soul\n[F1](All)[/F1] I long to love you Lord" },
            { name: "VERSE", lyrics: "In his goodness he has raised and placed me at his table\nWhat thing could compare itself to you!\nIn your presence Lord my joy and my desire\nForever in you I long to live" },
            { name: "CHORUS", lyrics: "[F1](Men)[/F1] And now my God I search to see your face\n[F1](Women)[/F1] And rejoice in knowing you [F1](…rejoice in knowing you)[/F1]\n[F1](Men)[/F1] To find you in my eyes renewed by faith\n[F1](Women)[/F1] and adore forever more [F1](…adore forever more)[/F1]\n[F1](Men)[/F1] To taste of heaven in the center of my soul\n[F1](All)[/F1] I long to love you Lord" },
            { name: "VERSE", lyrics: "I will lift my voice to you, with music celebrating\nYour presence for all eternity\nRejoicing I will praise on harp and lyre playing\nMy portion eternally receive" },
            { name: "CHORUS", lyrics: "[F1](Men)[/F1] And now my God I search to see your face\n[F1](Women)[/F1] And rejoice in knowing you [F1](…rejoice in knowing you)[/F1]\n[F1](Men)[/F1] To find you in my eyes renewed by faith\n[F1](Women)[/F1] and adore forever more [F1](…adore forever more)[/F1]\n[F1](Men)[/F1] To taste of heaven in the center of my soul\n[F1](All)[/F1] I long to love you Lord" },
            { name: "END", lyrics: "[F1](Men)[/F1] You are forever my portion O Lord\n[F1](Women)[/F1] My inheritance the Lord\n[F1](2x)[/F1]\n\n[F1](Men)[/F1] You are forever my portion O Lord\n[F1](All)[/F1] My inheritance the Lord" }
        ]
    },
    {
        title: "My Mouth Shall Praise You With Joy",
        sections: [
            { name: "VERSE", lyrics: "O God, You are my God,\nMy heart is longing to stand before You.\nMy soul is thirsting for You, Lord.\nWhen shall I come and freely adore You?" },
            { name: "REFRAIN", lyrics: "So I will bless You with all that I am.\nIn Your name I will lift up my hands.\nMy soul shall rise to Your banquet of life\nMy mouth shall praise You with joy\nMy mouth shall praise You with joy." },
            { name: "VERSE", lyrics: "I gaze upon Your temple\nAnd I behold Your beauty and grace.\nYour love is better than life, Lord,\nWith joyful heart\nI will sing of Your praises." },
            { name: "REFRAIN", lyrics: "So I will bless You with all that I am.\nIn Your name I will lift up my hands.\nMy soul shall rise to Your banquet of life\nMy mouth shall praise You with joy\nMy mouth shall praise You with joy." },
            { name: "VERSE", lyrics: "Each night I watch for Your light\nUpon my bed I ponder Your mercy.\nMy soul clings closely to You, Lord.\nYou are my strength\nAnd Your love will uphold me." },
            { name: "END", lyrics: "So I will bless You with all that I am.\nIn Your name I will lift up my hands.\nMy soul shall rise to Your banquet of life\nMy mouth shall praise You with joy\nMy mouth shall praise You with joy.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "My Redeemer",
        sections: [
            { name: "REFRAIN", lyrics: "You, O Lord, are my Redeemer\nYou have saved my soul from death.\nYou, O Lord, are my Redeemer\nI will thank and praise Your name!" },
            { name: "VERSE", lyrics: "[F1](Men)[/F1]\nOnly Son of God,\nYou won for us the right\nTo live as sons in the Father’s kingdom.\nWhen I let You in,\nYou break the bonds of sin,\nJesus is my true Redeemer." },
            { name: "REFRAIN", lyrics: "You, O Lord, are my Redeemer\nYou have saved my soul from death.\nYou, O Lord, are my Redeemer\nI will thank and praise Your name!" },
            { name: "VERSE", lyrics: "[F1](Women)[/F1]\nOnly Son of God,\nYou won for us the right to live\nAs daughters in the Father’s kingdom.\nWhen I let You in,\nYou break the bonds of sin,\nJesus is my true Redeemer." },
            { name: "REFRAIN", lyrics: "You, O Lord, are my Redeemer\nYou have saved my soul from death.\nYou, O Lord, are my Redeemer\nI will thank and praise Your name!" },
            { name: "VERSE", lyrics: "[F1](Both)[/F1]\nOnly Son of God,\nYou won for us the right to live\nAs children in the Father’s kingdom.\nWord of God made man,\nThe Father’s perfect plan –\nLife and death and resurrection!" },
            { name: "REFRAIN", lyrics: "You, O Lord, are my Redeemer\nYou have saved my soul from death.\nYou, O Lord, are my Redeemer\nI will thank and praise Your name!" },
            { name: "END", lyrics: "You, O Lord, are my Redeemer\nYou have saved my soul from death.\nYou, O Lord, are my Redeemer\nI will thank and praise Your name!" }
        ]
    },
    {
        title: "My Soul Finds Rest In God Alone",
        sections: [
            { name: "VERSE", lyrics: "My soul finds rest in God alone,\nMy salvation comes from Him.\nHe alone is my rock,\nHe alone is my salvation." },
            { name: "VERSE", lyrics: "My soul finds rest in God alone,\nAll my hope I place in Him.\nHe alone is my fortress,\nHe’s my deliverer, I’ll not be shaken." },
            { name: "REFRAIN", lyrics: "God alone is my rock\nAnd I’ll not be moved,\nI find shelter in His wings.\nHe alone is my strength and shield.\nHow my heart leaps for joy,\nI will ever give thanks unto Him." },
            { name: "VERSE", lyrics: "For You have been my refuge, Lord,\nA strong tow’r against the foe\nMy help in times of distress\nMy joy in times of affliction." },
            { name: "VERSE", lyrics: "For you have heard my cry, O God,\nListened to my supplication.\nFrom the ends of the earth I cry,\nLead me to the rock that is higher than I." },
            { name: "END", lyrics: "God alone is my rock\nAnd I’ll not be moved,\nI find shelter in His wings.\nHe alone is my strength and shield.\nHow my heart leaps for joy,\nI will ever give thanks unto Him.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Nada Te Turbe",
        sections: [
            { name: "VERSE", lyrics: "Nada te turbe, nada te_espante,\nTodo se pasa, Dios no se muda.\nLa paciencia todo lo_alcanza.\nQuien a Dios tiene nada le falta.\nSolo Dios basta! [F1](3x)[/F1]\nAleluya.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Now Let Us Sing",
        sections: [
            { name: "VERSE", lyrics: "Now let us sing [F1](2x)[/F1]\nSing till the pow’r of the Lord comes down. [F1](2x)[/F1]\nLift up your hands, don’t be afraid,\nNow let us sing\nTill the power of the Lord comes down." }
        ]
    },
    {
        title: "O Blessed Are The Pure Of Heart",
        sections: [
            { name: "VERSE", lyrics: "O blessed are the pure of heart\nFor they shall see the Lord!\nO blessed are the pure of heart,\nThey shall behold the face of God!" },
            { name: "END", lyrics: "Have mercy on me,\nO God, in Your goodness.\nWash me clean,\nMake me whiter than snow.\nClean hands, pure heart and mind\nCreate in me, O God.\nO Holy Spirit, dwell within my soul." }
        ]
    },
    {
        title: "O Come",
        sections: [
            { name: "REFRAIN", lyrics: "O come and let us sing,\nCome let us sing unto the Lord.\nMake a joyful noise to Him;\nThe rock of our salvation is He!" },
            { name: "VERSE", lyrics: "Let us come into His presence\nWith thanksgiving!\nLet us make a joyful noise unto Him\nWith songs of praise!\nFor the Lord is a great God and a great King!\nHe’s the King above all others\nO let us sing of His praises!" },
            { name: "REFRAIN", lyrics: "O come and let us sing,\nCome let us sing unto the Lord.\nMake a joyful noise to Him;\nThe rock of our salvation is He!" },
            { name: "VERSE", lyrics: "In His hands are the depths of the earth\nAnd the mountains are His!\nYes the sea is also His\nFor His hands formed the dry land." },
            { name: "REFRAIN", lyrics: "O come and let us sing,\nCome let us sing unto the Lord.\nMake a joyful noise to Him;\nThe rock of our salvation is He!" },
            { name: "VERSE", lyrics: "O come and let us worship,\nKneel before our Maker!\nHe is our God and we are His people;\nWe are the sheep of His hand!" },
            { name: "END", lyrics: "O come and let us sing,\nCome let us sing unto the Lord.\nMake a joyful noise to Him;\nThe rock of our salvation is He!" }
        ]
    },
    {
        title: "O Come King Jesus And Reign",
        sections: [
            { name: "VERSE", lyrics: "See, God raises in Zion a stone\nA rock that is higher than I\nFor they that walk\nIn the ways of the Lord\nShall have an abundance of life." },
            { name: "CHORUS", lyrics: "Glory! Great are Thou!\nRighteous and perfect in every way.\nGlory! Raise the shout!\nThe cry of Thy people\nThat longs for Thy reign.\nO come, King Jesus, and reign!" },
            { name: "VERSE", lyrics: "Know the Savior who knew no sin\nGod made Him sin for all men\nThat we in turn may become indeed\nThe righteousness of our God." },
            { name: "VERSE", lyrics: "Christ, He who was crucified\nThe Lamb who was slain for all men\nThat we may reign in the heavenlies\nIn His glory and pow’r without end." },
            { name: "END", lyrics: "Come, Messiah, come, King Jesus.\nCome and rule, come and reign.\nO come, King Jesus, and reign!" }
        ]
    },
    {
        title: "O Let The Redeemed",
        sections: [
            { name: "REFRAIN", lyrics: "O, let the redeemed of the Lord say so\nWhom He has redeemed from trouble\nAnd gathered in from the lands.\nLet them thank the Lord\nFor His steadfast love\nFor His wonderful works\nTo the sons of men." },
            { name: "VERSE", lyrics: "Some wandered in desert wastes\nFinding no city to dwell in\nHungry and thirsty their souls\nFainted within them." },
            { name: "VERSE", lyrics: "Then they cried to the Lord\nIn their trouble\nAnd He delivered them\nFrom their distress\nHe led them straightway\nTill they reached a city to dwell in." },
            { name: "REFRAIN", lyrics: "O, let the redeemed of the Lord say so\nWhom He has redeemed from trouble\nAnd gathered in from the lands.\nLet them thank the Lord\nFor His steadfast love\nFor His wonderful works\nTo the sons of men." },
            { name: "VERSE", lyrics: "Some were sick\nThrough their sinful ways\nAnd so suffered affliction\nAnd they drew near,\nNear to the gates of death." },
            { name: "VERSE", lyrics: "Then they cried\nTo the Lord in their trouble\nAnd He delivered them\nFrom their distress\nHe sent forth His word and saved them\nFrom death and destruction." },
            { name: "REFRAIN", lyrics: "O, let the redeemed of the Lord say so\nWhom He has redeemed from trouble\nAnd gathered in from the lands.\nLet them thank the Lord\nFor His steadfast love\nFor His wonderful works\nTo the sons of men." },
            { name: "VERSE", lyrics: "Some went down to the sea in ships,\nDoing business on the great waters,\nBut their courage melted away\nIn their evil plight." },
            { name: "VERSE", lyrics: "Then they cried\nTo the Lord in their trouble\nAnd He delivered them\nFrom their distress\nHe made the storm be still\nAnd the waves were hushed." },
            { name: "END", lyrics: "O, let the redeemed of the Lord say so\nWhom He has redeemed from trouble\nAnd gathered in from the lands.\nLet them thank the Lord\nFor His steadfast love\nFor His wonderful works\nTo the sons of men." }
        ]
    },
    {
        title: "O Praise The Lord Jerusalem",
        sections: [
            { name: "REFRAIN", lyrics: "O, praise the Lord, Jerusalem!\nZion, praise your God!\nAlleluia! Alleluia!" },
            { name: "VERSE", lyrics: "He has strengthened\nThe bars of your gates,\nHe has blessed the children within you.\nHe established peace on your borders.\nHe feeds you with finest wheat." },
            { name: "REFRAIN", lyrics: "O, praise the Lord, Jerusalem!\nZion, praise your God!\nAlleluia! Alleluia!" },
            { name: "VERSE", lyrics: "He sends out His word to the earth\nAnd swiftly runs His command.\nHe show’rs down snow white as wool,\nHe scatters hoarfrost like ashes." },
            { name: "REFRAIN", lyrics: "O, praise the Lord, Jerusalem!\nZion, praise your God!\nAlleluia! Alleluia!" },
            { name: "VERSE", lyrics: "He hurls down hailstones like crumbs.\nThe waters are frozen at His touch.\nHe sends forth His word\nAnd it melts them,\nAt the breath of His mouth\nThe waters flow." },
            { name: "REFRAIN", lyrics: "O, praise the Lord, Jerusalem!\nZion, praise your God!\nAlleluia! Alleluia!" },
            { name: "VERSE", lyrics: "He makes His word known to Jacob,\nTo Israel His laws and decrees.\nHe’s not dealt thus with other nations\nHe has not taught them His decrees." },
            { name: "END", lyrics: "O, praise the Lord, Jerusalem!\nZion, praise your God!\nAlleluia! Alleluia!" }
        ]
    },
    {
        title: "O Send Forth Your Light",
        sections: [
            { name: "VERSE", lyrics: "O, send forth Your light and Your truth\nLet these be my guide.\nLet them bring me to Your holy mount\nTo the place where You abide." },
            { name: "END", lyrics: "Then I shall go to the altar of God,\nMy joy and my delight,\nAnd offer You praise as a sacrifice,\nMy God, my life, my light." }
        ]
    },
    {
        title: "O The Depth",
        sections: [
            { name: "REFRAIN", lyrics: "O, the depth of the riches\nAnd the wisdom\nAnd the knowledge of God!\nHow unsearchable are His judgments,\nHow inscrutable His ways." },
            { name: "VERSE", lyrics: "For who has known the mind of the Lord\nWho has been His counselor?\nFor His thoughts are not our thoughts,\nNor our ways His." },
            { name: "REFRAIN", lyrics: "O, the depth of the riches\nAnd the wisdom\nAnd the knowledge of God!\nHow unsearchable are His judgments,\nHow inscrutable His ways." },
            { name: "VERSE", lyrics: "Now in Christ,\nGod has revealed the mystery:\nIn the Son all things\nShall come to unity." },
            { name: "REFRAIN", lyrics: "O, the depth of the riches\nAnd the wisdom\nAnd the knowledge of God!\nHow unsearchable are His judgments,\nHow inscrutable His ways." },
            { name: "VERSE", lyrics: "For from Him and to Him\nAnd through Him are all things.\nGlory be to Jesus Christ,\nThe King of kings." },
            { name: "END", lyrics: "O, the depth of the riches\nAnd the wisdom\nAnd the knowledge of God!\nHow unsearchable are His judgments,\nHow inscrutable His ways." }
        ]
    },
    {
        title: "O The Valleys Shall Ring",
        sections: [
            { name: "VERSE", lyrics: "O, the valleys shall ring\nWith the sound of praise\nAnd the lion shall lie with the lamb.\nOf His government there shall be no end\nAnd His glory shall fill the earth." },
            { name: "END", lyrics: "May Your will be done,\nMay Your Kingdom come.\nLet it rule, let it reign in our lives.\nThere’s a shout in the camp\nAs we answer the call,\nHail the King, Hail the Lord of lords." }
        ]
    },
    {
        title: "O Worship The King",
        sections: [
            { name: "VERSE", lyrics: "O, worship the King, all glorious above\nO, gratefully sing His pow’r and His love.\nOur shield and defender,\nThe Ancient of days,\nPavilioned in splendor\nAnd girded with praise!" },
            { name: "REFRAIN", lyrics: "Alleluia! Alleluia!\nOur Maker, Defender,\nRedeemer and King!" },
            { name: "VERSE", lyrics: "Ye servants of God,\nYour Master proclaim\nAnd publish abroad His wonderful name\nThe name all victorious of Jesus extol\nHis Kingdom is glorious,\nHe rules over all." },
            { name: "REFRAIN", lyrics: "Alleluia! Alleluia!\nOur Maker, Defender,\nRedeemer and King!" },
            { name: "VERSE", lyrics: "Then let us adore and give Him His right,\nAll glory and pow’r,\nAll wisdom and might,\nAll honor and blessing\nWith angels above,\nAnd thanks never ceasing\nand infinite love." },
            { name: "END", lyrics: "Alleluia! Alleluia!\nOur Maker, Defender,\nRedeemer and King!" }
        ]
    },
    {
        title: "Offer To God",
        sections: [
            { name: "REFRAIN", lyrics: "Offer to God a sacrifice of praise! [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "God has spoken\nAnd summoned the earth\nFrom the rising to the setting of the sun.\nFrom Zion He reigns o’er all the world\nBrighter than the sun God shines forth!" },
            { name: "REFRAIN", lyrics: "Offer to God a sacrifice of praise! [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "“Gather the faithful before me,”\nSays the Lord,\n“Those who bind themselves\nTo Me by sacrifice.”\nFrom the heavens and the earth\nHis people come,\nAnd God Himself shall be\nTheir only Judge." },
            { name: "REFRAIN", lyrics: "Offer to God a sacrifice of praise! [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Offer to God a sacrifice of holy praise\nAnd fulfill your vows\nBefore the Lord of hosts.\nThen call on Him in times of distress.\n“On that day I shall come to you,”\nSays your God." },
            { name: "END", lyrics: "Offer to God a sacrifice of praise! [F1](2x)[/F1]" }
        ]
    },
    {
        title: "On Eagle’s Wings",
        sections: [
            { name: "VERSE", lyrics: "You who dwell in the shelter of the Lord,\nWho abide in His shadow for life,\nSay to the Lord, “My refuge,\nMy rock in whom I trust.”" },
            { name: "REFRAIN", lyrics: "And He will raise you up\nOn eagle’s wings,\nBear you on the breath of dawn,\nMake you to shine like the sun,\nAnd hold you in the palm of His hand." },
            { name: "VERSE", lyrics: "The snare of the fowler\nWill never capture you\nAnd famine will bring you no fear.\nUnder His wings your refuge,\nHis faithfulness, your shield." },
            { name: "REFRAIN", lyrics: "And He will raise you up\nOn eagle’s wings,\nBear you on the breath of dawn,\nMake you to shine like the sun,\nAnd hold you in the palm of His hand." },
            { name: "VERSE", lyrics: "You need not fear the terror of night,\nNor the arrow that flies by day.\nThough thousands fall about you,\nNear you it shall not come." },
            { name: "REFRAIN", lyrics: "And He will raise you up\nOn eagle’s wings,\nBear you on the breath of dawn,\nMake you to shine like the sun,\nAnd hold you in the palm of His hand." },
            { name: "VERSE", lyrics: "For to His angels He’s given a command\nTo guard you in all of your ways.\nUpon their hands they will bear you up\nLest you dash your foot against a stone." },
            { name: "END", lyrics: "And He will raise you up\nOn eagle’s wings,\nBear you on the breath of dawn,\nMake you to shine like the sun,\nAnd hold you in the palm of His hand." }
        ]
    },
    {
        title: "One Day",
        sections: [
            { name: "VERSE", lyrics: "More than I could hope or dream of\nYou have poured Your favor on me.\nOne day in the house of God\nIs better than a thousand in the world." },
            { name: "REFRAIN", lyrics: "So blessed, I can’t contain it,\nSo much, I’ve got to give it away.\nYour love has taught me to live now,\nYou are more than enough for me." },
            { name: "END", lyrics: "Lord, You’re more than enough for me. [F1](4x)[/F1]" }
        ]
    },
    {
        title: "One Thing I Ask For",
        sections: [
            { name: "REFRAIN", lyrics: "One thing I ask for, that I shall seek,\nTo dwell in the house of the Lord.\nOne thing I ask for, that I shall seek,\nTo dwell in the house of the Lord." },
            { name: "VERSE", lyrics: "All the days of my life\nTo behold the beauty of the Lord\nAnd to inquire in His temple." },
            { name: "REFRAIN", lyrics: "One thing I ask for, that I shall seek,\nTo dwell in the house of the Lord.\nOne thing I ask for, that I shall seek,\nTo dwell in the house of the Lord." },
            { name: "VERSE", lyrics: "You’ve said to me,\n“Seek ye my face.”\nMy heart says, “Thy face do I seek.”" },
            { name: "REFRAIN", lyrics: "One thing I ask for, that I shall seek,\nTo dwell in the house of the Lord.\nOne thing I ask for, that I shall seek,\nTo dwell in the house of the Lord." },
            { name: "VERSE", lyrics: "With all left behind\nI seek only God.\nTeach me Your ways, O God." },
            { name: "REFRAIN", lyrics: "One thing I ask for, that I shall seek,\nTo dwell in the house of the Lord.\nOne thing I ask for, that I shall seek,\nTo dwell in the house of the Lord." },
            { name: "VERSE", lyrics: "I will wait for the Lord\nAnd He gives me strength\nFor I have seen His goodness." },
            { name: "END", lyrics: "One thing I ask for, that I shall seek,\nTo dwell in the house of the Lord.\nOne thing I ask for, that I shall seek,\nTo dwell in the house of the Lord." }
        ]
    },
    {
        title: "Open The Eyes Of My Heart",
        sections: [
            { name: "VERSE", lyrics: "Open the eyes of my heart, Lord.\nOpen the eyes of my heart,\nI want to see You,\nI want to see You.\n[F1](2x)[/F1]" },
            { name: "REFRAIN", lyrics: "To see You high and lifted up\nShining in the light of Your glory.\nPour out Your power and love\nAs we sing “Holy, holy, holy!”" },
            { name: "VERSE", lyrics: "Open the eyes of my heart, Lord.\nOpen the eyes of my heart,\nI want to see You,\nI want to see You.\n[F1](2x)[/F1]" },
            { name: "REFRAIN", lyrics: "To see You high and lifted up\nShining in the light of Your glory.\nPour out Your power and love\nAs we sing “Holy, holy, holy!”\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "Holy, holy, holy! [F1](3x)[/F1]\nI want to see You.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Open Your Eyes",
        sections: [
            { name: "VERSE", lyrics: "Open your eyes,\nSee the glory of your King.\nLift up your voice and His praises sing.\nI love You, Lord.\nI will proclaim, “Hallelujah!”\nI bless Your name." }
        ]
    },
    {
        title: "Our Blessed Hope",
        sections: [
            { name: "VERSE", lyrics: "Our blessed hope, we find no rest,\nUntil You reign in righteousness.\nThen we shall stand in garments pure,\nWith all who love Your dwelling fair." },
            { name: "REFRAIN", lyrics: "O Son of God,\nO Word of God,\nO Light of God,\nPrepare Your way!" },
            { name: "VERSE", lyrics: "This passing age, its strife will cease,\nYour sons will dwell in endless peace.\nOur eyes shall see the death of sin,\nAll shadows flee, all sorrows end." },
            { name: "REFRAIN", lyrics: "O Son of God,\nO Word of God,\nO Light of God,\nPrepare Your way!" },
            { name: "VERSE", lyrics: "With hearts afire and set above\nWe seek Your face, O Son beloved!\nOur longing grows for heaven’s sight:\nJerusalem, adorned in light!" },
            { name: "REFRAIN", lyrics: "O Son of God,\nO Word of God,\nO Light of God,\nPrepare Your way!" },
            { name: "VERSE", lyrics: "The hour is late, the day draws near;\nMake haste, O Lord, Your power stir!\nMay all who live Your name adore;\nRemove the veil and wait no more!" },
            { name: "END", lyrics: "O Son of God,\nO Word of God,\nO Light of God,\nPrepare Your way!\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Our God Reigns",
        sections: [
            { name: "VERSE", lyrics: "How lovely on the mountains\nAre the feet of him\nWho brings good news, good news,\nAnnouncing peace,\nProclaiming news of happiness.\nOur God reigns! [F1](6x)[/F1]" }
        ]
    },
    {
        title: "Our Life Is A Prayer",
        sections: [
            { name: "VERSE", lyrics: "Our life is a prayer\nA life of praise to our God\nFor our eternal life is ‘bout praising Him\nOur God, the heavenly King." },
            { name: "VERSE", lyrics: "O, what glory is given us!\nO, what great joy is bestowed on us!\nTo converse with the King of glory\nJesus Christ, the Lord\nJesus Christ, our Lord." },
            { name: "END", lyrics: "O God, in our prayer\nYou reveal to us\nThe vanity of this world.\nFor You fill us with light\nAnd taste of heavenly home." }
        ]
    },
    {
        title: "Philippians 2",
        sections: [
            { name: "VERSE", lyrics: "Christ Jesus, though in the form of God\nDid not grasp equality with God\nBut emptying Himself\nTook a servant’s form\nBeing born in the likeness of men." },
            { name: "REFRAIN", lyrics: "Therefore God has highly exalted Him\nAnd bestowed on Him the name,\nThat at Jesus’ name\nEvery knee shall bow in heaven, on earth\nAnd under the earth\nAnd every tongue confess Him Lord\nTo the glory of God the Father." },
            { name: "VERSE", lyrics: "Being found in human form\nChrist Jesus humbled Himself\nBecoming obedient unto death\nEven to death on a cross." },
            { name: "REFRAIN", lyrics: "Therefore God has highly exalted Him\nAnd bestowed on Him the name,\nThat at Jesus’ name\nEvery knee shall bow in heaven, on earth\nAnd under the earth\nAnd every tongue confess Him Lord\nTo the glory of God the Father." },
            { name: "END", lyrics: "Yes God has highly exalted Him\nAnd bestowed on Him the name,\nThat at Jesus’ name\nEvery knee shall bow in heaven, on earth\nAnd under the earth\nAnd every tongue confess Him Lord\nTo the glory of God the Father." }
        ]
    },
    {
        title: "Power Of Your Love",
        sections: [
            { name: "VERSE", lyrics: "Lord, I come to You\nLet my heart be changed, renewed\nFlowing from the grace\nThat I’ve found in You.\nLord I’ve come to know\nThe weaknesses I see in me\nWill be stripped away\nBy the power of Your love." },
            { name: "REFRAIN", lyrics: "Hold me close,\nLet Your love surround me.\nBring me near, draw me to Your side.\nAnd as I wait I’ll rise up like the eagle\nAnd I will soar with You\nYour Spirit leads me on\nIn the power of Your love." },
            { name: "VERSE", lyrics: "Lord, unveil my eyes\nLet me see You face to face\nThe knowledge of Your love\nAs You live in me.\nAnd Lord, renew my mind\nAs Your will unfolds in my life\nIn living everyday\nBy the power of Your love." },
            { name: "END", lyrics: "Hold me close,\nLet Your love surround me.\nBring me near, draw me to Your side.\nAnd as I wait I’ll rise up like the eagle\nAnd I will soar with You\nYour Spirit leads me on\nIn the power of Your love." }
        ]
    },
    {
        title: "Praise The Lord All Nations",
        sections: [
            { name: "VERSE", lyrics: "Rise up, your light has come;\nHis glory shines upon you.\nThough darkness reigns on earth,\nHis light has risen on you.\nAnd to it all the nations come;\nTheir kings shall seek its brightness\nLift up your eyes and see; behold His light." },
            { name: "REFRAIN", lyrics: "Praise the Lord, all nations\nAnd extol Him all you peoples.\n[F1](2x)[/F1]" },
            { name: "REFRAIN", lyrics: "For great is His steadfast love toward us,\nAnd the faithfulness of the Lord\nEndures forever. Alleluia." },
            { name: "VERSE", lyrics: "From the east and from the west\nHe calls your sons and daughters.\nFrom ev’ry land they come\nTo drink life-giving waters.\nThen you shall see, and radiant be;\nYour heart shall thrill with gladness.\nThe wealth of all the nations shall be yours." },
            { name: "REFRAIN", lyrics: "Praise the Lord, all nations\nAnd extol Him all you peoples.\n[F1](2x)[/F1]" },
            { name: "REFRAIN", lyrics: "For great is His steadfast love toward us,\nAnd the faithfulness of the Lord\nEndures forever. Alleluia." },
            { name: "REFRAIN", lyrics: "Praise the Lord, all nations\nAnd extol Him all you peoples.\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "For great is His steadfast love toward us,\nAnd the faithfulness of the Lord\nEndures forever. Alleluia.\n\nAlleluia. Praise the Lord, all nations. [F1](3x)[/F1]" }
        ]
    },
    {
        title: "Praise The Lord O My Soul",
        sections: [
            { name: "REFRAIN", lyrics: "Praise the Lord, O my soul.\nI will praise the Lord as long as I live.\nPraise the Lord, O my soul.\nWhile I have life and breath\nI will praise the Lord." },
            { name: "VERSE", lyrics: "The Lord keeps faith forever\nSecures justice,\nJustice for the oppressed\nGives food to the hungry\nThe Lord sets captives free." },
            { name: "REFRAIN", lyrics: "Praise the Lord, O my soul.\nI will praise the Lord as long as I live.\nPraise the Lord, O my soul.\nWhile I have life and breath\nI will praise the Lord." },
            { name: "VERSE", lyrics: "The Lord gives sight to the blind.\nThe Lord raises up\nThose that were bowed down.\nThe Lord loves the just.\nThe Lord protects strangers." },
            { name: "REFRAIN", lyrics: "Praise the Lord, O my soul.\nI will praise the Lord as long as I live.\nPraise the Lord, O my soul.\nWhile I have life and breath\nI will praise the Lord." },
            { name: "VERSE", lyrics: "The fatherless and the widow\nHe sustains,\nBut the way of the wicked He thwarts.\nThe Lord shall reign forever\nYour God, O Zion,\nThrough all generations. Alleluia!" },
            { name: "END", lyrics: "Praise the Lord, O my soul.\nI will praise the Lord as long as I live.\nPraise the Lord, O my soul.\nWhile I have life and breath\nI will praise the Lord." }
        ]
    },
    {
        title: "Praise The Name Of Jesus",
        sections: [
            { name: "VERSE", lyrics: "Praise the Name of Jesus,\nPraise the Name of Jesus!\nHe’s my rock, He’s my fortress,\nHe is my deliverer,\nIn Him will I trust.\nPraise the Name of Jesus." }
        ]
    },
    {
        title: "Praises On High",
        sections: [
            { name: "VERSE", lyrics: "Who shall not fear and glorify\nYour name, O Lord?\nWho shall not bow and worship You,\nO Lord Most High?\nWe will praise Your name!" },
            { name: "REFRAIN", lyrics: "High on high You reign\nHigh on high, enthroned in heaven\nHigh on high You reign\nAll glory belongs to Your name!" },
            { name: "VERSE", lyrics: "Great are Your works, O Lord our God,\nTo those You love.\nMajestic are You in holiness,\nO God, our King.\nWe will praise Your name!" },
            { name: "REFRAIN", lyrics: "High on high You reign\nHigh on high, enthroned in heaven\nHigh on high You reign\nAll glory belongs to Your name!\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "High on high You reign!" }
        ]
    },
    {
        title: "Prayer Of Saint Augustine",
        sections: [
            { name: "VERSE", lyrics: "O Beauty ancient, O Beauty so new,\nLate have I loved Thee and feebly yet do.\nThough You were with me\nI was not with You.\nThen You shone Your face,\nAnd I was blind no more." },
            { name: "REFRAIN", lyrics: "My heart searches restlessly,\nAnd finds no rest till it rests in Thee.\nO Seeker, You sought for me,\nYour love has found me\nI am taken by Thee" },
            { name: "VERSE", lyrics: "I sought this world and chased its finer things\nYet were these not in You\nThey would not have been.\nMy ceaseless longing hid the deeper truth\nIn all my desirings\nI was desiring You" },
            { name: "REFRAIN", lyrics: "My heart searches restlessly,\nAnd finds no rest till it rests in Thee.\nO Seeker, You sought for me,\nYour love has found me\nI am taken by Thee" },
            { name: "VERSE", lyrics: "Lord, in my deafness You cried out to me.\nI drew my breath\nAnd now Your fragrance I breathe.\nO Fount of Life You are forever the same\nO Fire of Love\nCome set me aflame." },
            { name: "END", lyrics: "My heart searches restlessly,\nAnd finds no rest till it rests in Thee.\nO Seeker, You sought for me,\nYour love has found me\nI am taken by Thee" }
        ]
    },
    {
        title: "Prayer Of Saint Francis",
        sections: [
            { name: "VERSE", lyrics: "Make me a channel of Your peace.\nWhere there is hatred\nLet me bring Your love.\nWhere there is injury, Your pardon, Lord\nAnd where there’s doubt\nTrue faith in You." },
            { name: "VERSE", lyrics: "Make me a channel of Your peace.\nWhere there’s despair in life\nLet me bring hope.\nWhere there is darkness, only light\nAnd where there’s sadness, ever joy." },
            { name: "REFRAIN", lyrics: "O Master, grant that I may never seek\nSo much to be consoled as to console\nTo be understood as to understand\nTo be loved as to love with all my soul." },
            { name: "VERSE", lyrics: "Make me a channel of Your peace.\nIt is in pardoning that we are pardoned\nIn giving to all men that we receive\nAnd in dying that we’re born\nTo eternal life." },
            { name: "END", lyrics: "O Master, grant that I may never seek\nSo much to be consoled as to console\nTo be understood as to understand\nTo be loved as to love with all my soul." }
        ]
    },
    {
        title: "Prince Of Peace",
        sections: [
            { name: "VERSE", lyrics: "You are holy [F1](You are holy)[/F1]\nYou are mighty [F1](You are mighty)[/F1]\nYou are worthy [F1](You are worthy)[/F1]\nWorthy of praise [F1](Worthy of praise)[/F1]\nI will follow [F1](I will follow)[/F1]\nI will listen [F1](I will listen)[/F1]\nI will love You [F1](I will love You)[/F1]\nAll of my days [F1](All of my days)[/F1]" },
            { name: "VERSE", lyrics: "[F1](MEN)[/F1]\nI will sing to and worship\nThe King who is worthy.\nI will love and adore You,\nI will bow down before You.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "You are my Prince of peace\nAnd I will live my life for You." },
            { name: "VERSE", lyrics: "You are holy [F1](You are holy)[/F1]\nYou are mighty [F1](You are mighty)[/F1]\nYou are worthy [F1](You are worthy)[/F1]\nWorthy of praise [F1](Worthy of praise)[/F1]\nI will follow [F1](I will follow)[/F1]\nI will listen [F1](I will listen)[/F1]\nI will love You [F1](I will love You)[/F1]\nAll of my days [F1](All of my days)[/F1]" },
            { name: "VERSE", lyrics: "[F1](WOMEN)[/F1]\nYou are Lord of lords,\nYou are King of kings,\nYou are mighty God, Lord of everything.\nYou’re Emmanuel, you’re the great I AM\nYou’re the Prince of peace\nWho is the Lamb." },
            { name: "VERSE", lyrics: "[F1](WOMEN)[/F1]\nYou’re the living God,\nYou’re my saving grace,\nYou will live forever,\nYou are Ancient of days.\nYou are Alpha, Omega, beginning and end.\nYou’re my Savior, Messiah,\nRedeemer and friend." },
            { name: "VERSE", lyrics: "You are my Prince of peace\nAnd I will live my life for You." },
            { name: "VERSE", lyrics: "You are holy [F1](You are holy)[/F1]\nYou are mighty [F1](You are mighty)[/F1]\nYou are worthy [F1](You are worthy)[/F1]\nWorthy of praise [F1](Worthy of praise)[/F1]\nI will follow [F1](I will follow)[/F1]\nI will listen [F1](I will listen)[/F1]\nI will love You [F1](I will love You)[/F1]\nAll of my days [F1](All of my days)[/F1]" },
            { name: "VERSE", lyrics: "[F1](MEN)[/F1]\nI will sing to and worship\nThe King who is worthy.\nI will love and adore You,\nI will bow down before You.\n\n[F1](WOMEN)[/F1]\nYou are Lord of lords,\nYou are King of kings,\nYou are mighty God, Lord of everything.\nYou’re Emmanuel, you’re the great I AM\nYou’re the Prince of peace\nWho is the Lamb." },
            { name: "VERSE", lyrics: "[F1](MEN)[/F1]\nI will sing to and worship\nThe King who is worthy.\nI will love and adore You,\nI will bow down before You.\n\n[F1](WOMEN)[/F1]\nYou’re the living God,\nYou’re my saving grace,\nYou will live forever,\nYou are Ancient of days.\nYou are Alpha, Omega, beginning and end.\nYou’re my Savior, Messiah,\nRedeemer and friend." },
            { name: "END", lyrics: "You are my Prince of peace\nAnd I will live my life for You.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Proclaim His Marvelous Deeds",
        sections: [
            { name: "REFRAIN", lyrics: "Proclaim His marvelous deeds\nTo all the nations!\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Sing to the Lord a new song,\nSing to the Lord, all you lands.\nSing to the Lord, bless His holy name." },
            { name: "REFRAIN", lyrics: "Proclaim His marvelous deeds\nTo all the nations!\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Announce His salvation day after day,\nTell His glory among the nations,\nAmong all peoples, His wondrous deeds." },
            { name: "REFRAIN", lyrics: "Proclaim His marvelous deeds\nTo all the nations!\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Give to the Lord, you nations,\nGive to the Lord glory and praise.\nGive to the Lord the glory due His name." },
            { name: "REFRAIN", lyrics: "Proclaim His marvelous deeds\nTo all the nations!\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Worship the Lord in holy attire.\nTremble before Him, all the earth.\nSay among the nations:\n“The Lord is King!”" },
            { name: "END", lyrics: "Proclaim His marvelous deeds\nTo all the nations!\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Psalm 18",
        sections: [
            { name: "REFRAIN", lyrics: "Yea, Thou dost light my lamp;\nThe Lord my God lightens my darkness!" },
            { name: "VERSE", lyrics: "Yea, by Thee I can crush a troop\nAnd by Thee I can leap a wall.\nThis God, His way is perfect\nThe promise of the Lord proves true,\nHe is my shield." },
            { name: "REFRAIN", lyrics: "Yea, Thou dost light my lamp;\nThe Lord my God lightens my darkness!" },
            { name: "VERSE", lyrics: "For who is God, but the Lord?\nAnd who is a rock except our God?\nThe God who girded me with strength,\nAnd made my way so very safe." },
            { name: "REFRAIN", lyrics: "Yea, Thou dost light my lamp;\nThe Lord my God lightens my darkness!" },
            { name: "VERSE", lyrics: "He made my feet like hind’s feet;\nAnd set me secure upon the heights.\nHe trains my hands for war,\nSo my arms can bend a bow of bronze." },
            { name: "REFRAIN", lyrics: "Yea, Thou dost light my lamp;\nThe Lord my God lightens my darkness!" },
            { name: "VERSE", lyrics: "Thou hast given me the shield of Thy salvation;\nAnd Thy right hand held me high,\nAnd Thy help made me great.\nThou didst give a wide place for my feet\nAnd they did not slip." },
            { name: "REFRAIN", lyrics: "Yea, Thou dost light my lamp;\nThe Lord my God lightens my darkness!" },
            { name: "VERSE", lyrics: "The Lord lives and blessed be my rock,\nAnd exalted be the God of my salvation.\nFor this I extol Thee, O Lord among the nations,\nAnd sing praise to Thy Name." },
            { name: "REFRAIN", lyrics: "Yea, Thou dost light my lamp;\nThe Lord my God lightens my darkness!" },
            { name: "END", lyrics: "Yea, Thou dost light my lamp;\nThe Lord my God lightens my darkness!\n\nYea, Thou dost light my lamp." }
        ]
    },
    {
        title: "Psalm 25",
        sections: [
            { name: "REFRAIN", lyrics: "O Lord, how we love Your ways\nAnd to walk in them is life for us.\nO Lord, teach us of Your ways\nAnd in Your paths direct our every step." },
            { name: "REFRAIN", lyrics: "And Lord, we love Your word.\nIn it we find both pow’r and wisdom.\nO Lord, teach us of Your word\nAnd in its light we live forever blest." },
            { name: "VERSE", lyrics: "Good and upright is the Lord,\nAnd therefore He will teach\nThe humble man His way,\nAnd lead him in His truth.\nIn faithfulness and love\nHis precepts He reveals\nTo all who humbly wait for Him." },
            { name: "REFRAIN", lyrics: "O Lord, how we love Your ways\nAnd to walk in them is life for us.\nO Lord, teach us of Your ways\nAnd in Your paths direct our every step." },
            { name: "VERSE", lyrics: "The friendship of the Lord\nIs for all who love His name\nAnd who tremble at His word\nAnd fear Him in their heart.\nThe favor of the Lord\nIs a sure and present shield\nTo all who never stray from Him." },
            { name: "REFRAIN", lyrics: "And Lord, we love Your word.\nIn it we find both pow’r and wisdom.\nO Lord, teach us of Your word\nAnd in its light we live forever blest." },
            { name: "VERSE", lyrics: "In His mercy and His love,\nThe Lord does not forget\nThose who trust Him with their lives\nAnd call on Him to save.\nWe lift our eyes to Him\nWho guards us from the foe\nAnd bring us to His place of rest." },
            { name: "REFRAIN", lyrics: "O Lord, how we love Your ways\nAnd to walk in them is life for us.\nO Lord, teach us of Your ways\nAnd in Your paths direct our every step." },
            { name: "END", lyrics: "And Lord, we love Your word.\nIn it we find both pow’r and wisdom.\nO Lord, teach us of Your word\nAnd in its light we live forever blest." }
        ]
    },
    {
        title: "Psalm 37",
        sections: [
            { name: "VERSE", lyrics: "Trust in the Lord and do good\nSo shall you dwell in the land and be fed." },
            { name: "REFRAIN", lyrics: "For this is the day\nThat the Lord has made\nLet us rejoice and be glad in it.\nThis is the day that the Lord has made\nLet us rejoice and be glad in it." },
            { name: "VERSE", lyrics: "Delight thyself in the Lord,\nAnd He shall give to you,\nThe desires that He places in your heart." },
            { name: "REFRAIN", lyrics: "For this is the day\nThat the Lord has made\nLet us rejoice and be glad in it.\nThis is the day that the Lord has made\nLet us rejoice and be glad in it." },
            { name: "VERSE", lyrics: "Commit thy way to the Lord\nAnd trust also in Him,\nAnd He shall bring it to pass." },
            { name: "END", lyrics: "For this is the day\nThat the Lord has made\nLet us rejoice and be glad in it.\nThis is the day that the Lord has made\nLet us rejoice and be glad in it." }
        ]
    },
    {
        title: "Psalm 40",
        sections: [
            { name: "VERSE", lyrics: "I will sing of Your glory,\nI’ll recount Your wondrous deeds.\nI will sing of Your faithfulness,\nOf the love You’ve shown to me." },
            { name: "CHORUS", lyrics: "For You have put\nA new song in my mouth,\nAnd my lips will proclaim Your greatness\nYes, You have put\nA new song in my heart\nAnd set this captive free." },
            { name: "VERSE", lyrics: "You brought me up out of the darkness,\nDrew me into Your great light.\nYou pulled me up\nOut of the mud and mire,\nSet my feet upon a rock." },
            { name: "CHORUS", lyrics: "For You have put\nA new song in my mouth,\nAnd my lips will proclaim Your greatness\nYes, You have put\nA new song in my heart\nAnd set this captive free." },
            { name: "CHORUS", lyrics: "You desire no sacrifice,\nNo offering on Your altar.\nFor my ear You have pierced\nAnd I am here to do Your will." },
            { name: "VERSE", lyrics: "I’ll follow the Lamb\nWherever He leads me\nFor I long to see His face.\nFor this road leads to glory\nThough the gateway in His cross." },
            { name: "END", lyrics: "For You have put\nA new song in my mouth,\nAnd my lips will proclaim Your greatness\nYes, You have put\nA new song in my heart\nAnd set this captive free." }
        ]
    },
    {
        title: "Psalm 45",
        sections: [
            { name: "VERSE", lyrics: "Hear, O daughter, incline your ear\nForget your people\nAnd your father’s house\nFor the King desires you all for Himself\nHe is your Lord\nAnd you must bow to Him." },
            { name: "VERSE", lyrics: "Robed in riches, righteousness and life\nLaden with the gifts that such a Spouse\nMust give His bride\nJoy and gladness shall greet your train\nAs you proceed\nTo the palace of the King." },
            { name: "END", lyrics: "Heart overflowing,\nThis the ode you’ll sing\nWhen at last beholding\nHis glorious majesty.\nFairer are you than all the sons of men,\nFairer are you than the sons of men." }
        ]
    },
    {
        title: "Psalm 89",
        sections: [
            { name: "VERSE", lyrics: "“I have made a covenant\nWith My chosen,\nGiven my servant my word.\nI have made your name to last forever,\nBuilt to outlast all time.”" },
            { name: "REFRAIN", lyrics: "I will celebrate Your love forever,\nYahweh, age on age\nMy words proclaim Your love.\nFor I claim that love\nIs built to last forever,\nFounded firm, Your faithfulness." },
            { name: "VERSE", lyrics: "Yahweh, the assembly\nOf those who love You\nApplaud Your marvelous word.\nWho in the skies can compare\nWith Yahweh, who can rival Him?" },
            { name: "REFRAIN", lyrics: "I will celebrate Your love forever,\nYahweh, age on age\nMy words proclaim Your love.\nFor I claim that love\nIs built to last forever,\nFounded firm, Your faithfulness." },
            { name: "VERSE", lyrics: "Happy the people\nWho learn to acclaim You,\nThey rejoice in Your light.\nYou are our glory\nAnd You are our courage,\nOur hope belongs to You." },
            { name: "REFRAIN", lyrics: "I will celebrate Your love forever,\nYahweh, age on age\nMy words proclaim Your love.\nFor I claim that love\nIs built to last forever,\nFounded firm, Your faithfulness." },
            { name: "VERSE", lyrics: "“I have revealed My chosen servant\nAnd he can rely on Me.\nGiven him My love to last forever,\nHe shall rise in My name.”" },
            { name: "REFRAIN", lyrics: "I will celebrate Your love forever,\nYahweh, age on age\nMy words proclaim Your love.\nFor I claim that love\nIs built to last forever,\nFounded firm, Your faithfulness." },
            { name: "VERSE", lyrics: "“He will call to Me, ‘My Father, my God!’\nFor I make him My first-born son.\nI cannot take back My given promise,\nI’ve called him to shine like the sun.”" },
            { name: "END", lyrics: "I will celebrate Your love forever,\nYahweh, age on age\nMy words proclaim Your love.\nFor I claim that love\nIs built to last forever,\nFounded firm, Your faithfulness." }
        ]
    },
    {
        title: "Psalm 121 - I Lift My Eyes Up",
        sections: [
            { name: "VERSE", lyrics: "I lift my eyes up to the mountains,\nWhere does my help come from?\nMy help comes from You,\nMaker of heaven, Creator of the earth." },
            { name: "END", lyrics: "O, how I need You, Lord.\nYou are my only hope.\nYou’re my only prayer.\nSo I will wait for You\nTo come and rescue me.\nCome and give me life." }
        ]
    },
    {
        title: "Psalm 130",
        sections: [
            { name: "VERSE", lyrics: "Out of the depths I cry to you, O Lord.\nAttend to my cry for mercy,\nO Lord, hear my voice." },
            { name: "REFRAIN", lyrics: "I wait for You, Lord, my soul waits\nAnd in Your word is my hope.\nI wait for You, Lord, my soul waits\nMore than watchmen wait for morning\nMore than the watchmen\nWait for morning." },
            { name: "VERSE", lyrics: "If You kept account of my sin,\nO Lord, how could I stand?\nBut in You I find forgiveness,\nAnd so I fear You, Lord." },
            { name: "REFRAIN", lyrics: "I wait for You, Lord, my soul waits\nAnd in Your word is my hope.\nI wait for You, Lord, my soul waits\nMore than watchmen wait for morning\nMore than the watchmen\nWait for morning." },
            { name: "VERSE", lyrics: "I put my hope in God\nFor in Him is unfailing love.\nAnd with Him is full redemption\nFrom all my sins." },
            { name: "REFRAIN", lyrics: "I wait for You, Lord, my soul waits\nAnd in Your word is my hope.\nI wait for You, Lord, my soul waits\nMore than watchmen wait for morning" },
            { name: "REFRAIN", lyrics: "I wait for You, Lord, my soul waits\nAnd in Your word is my hope.\nI wait for You, Lord, my soul waits" },
            { name: "END", lyrics: "More than watchmen wait for morning\nMore than the watchmen\nWait for morning.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Psalm 135",
        sections: [
            { name: "REFRAIN", lyrics: "Praise the Lord, praise His name,\nYou servants of the Lord.\nPraise Him you people of the Lord’s house\nIn the temple of our God." },
            { name: "REFRAIN", lyrics: "Praise the Lord for He is good\nSing praises to Him who is kind.\nHe who has chosen us Israel\nAs children of His own." },
            { name: "VERSE", lyrics: "I know that the Lord is great,\nGreater than all the other gods.\nHe commands heaven and earth\nIn the seas and the depths below." },
            { name: "VERSE", lyrics: "He makes storm clouds\nFrom the ends of the earth.\nHe makes lightning for the storm\nAnd causes the wind to form." },
            { name: "REFRAIN", lyrics: "Praise the Lord, praise His name,\nYou servants of the Lord.\nPraise Him you people of the Lord’s house\nIn the temple of our God." },
            { name: "REFRAIN", lyrics: "Praise the Lord for He is good\nSing praises to Him who is kind.\nHe who has chosen us Israel\nAs children of His own." },
            { name: "VERSE", lyrics: "There shall be no other god,\nNor idols that men have made.\nFor they who call on their false gods\nCome tumbling to the ground." },
            { name: "VERSE", lyrics: "But we shall praise our God,\nPraise Him priests of the Lord.\nPraise Him all you that worship Him\nThe King of Zion enthroned." },
            { name: "REFRAIN", lyrics: "Praise the Lord, praise His name,\nYou servants of the Lord.\nPraise Him you people of the Lord’s house\nIn the temple of our God." },
            { name: "END", lyrics: "Praise the Lord for He is good\nSing praises to Him who is kind.\nHe who has chosen us Israel\nAs children of His own.\nPraise the Lord!" }
        ]
    },
    {
        title: "Psalm 145",
        sections: [
            { name: "REFRAIN", lyrics: "I will extol You, my God and King,\nAnd bless Your name forever.\nEvery day I will bless You\nAnd praise Your name forever.\nGreat is the Lord and greatly to be praised\nAnd His greatness is unsearchable." },
            { name: "VERSE", lyrics: "I will declare Your greatness\nAnd Your glorious majesty.\nMen will proclaim Your mighty acts\nAnd sing of Your righteousness.\nFor the Lord is gracious\nAnd He is merciful,\nAlways abounding in steadfast love." },
            { name: "REFRAIN", lyrics: "I will extol You, my God and King,\nAnd bless Your name forever.\nEvery day I will bless You\nAnd praise Your name forever.\nGreat is the Lord and greatly to be praised\nAnd His greatness is unsearchable." },
            { name: "VERSE", lyrics: "All Your works shall thank You\nAnd all Your saints shall bless You.\nThey shall speak of Your glory\nAnd tell of Your pow’r.\nYou, O Lord, are faithful\nIn all Your words and deeds.\nYou uphold the falling\nAnd raise those bowed down." },
            { name: "REFRAIN", lyrics: "I will extol You, my God and King,\nAnd bless Your name forever.\nEvery day I will bless You\nAnd praise Your name forever.\nGreat is the Lord and greatly to be praised\nAnd His greatness is unsearchable." },
            { name: "VERSE", lyrics: "The eyes of all look to You\nAnd You open up Your hand.\nYou satisfy all desire of every living thing.\nYou are just in all Your ways\nAnd near to all who call.\nYou hear their cry and save all\nThose who love You." },
            { name: "END", lyrics: "I will extol You, my God and King,\nAnd bless Your name forever.\nEvery day I will bless You\nAnd praise Your name forever.\nGreat is the Lord and greatly to be praised\nAnd His greatness is unsearchable.\nLet us praise our God!" }
        ]
    },
    {
        title: "Psalm 150",
        sections: [
            { name: "REFRAIN", lyrics: "Alleluia! [F1](3x)[/F1]" },
            { name: "VERSE", lyrics: "Praise God in His holy dwelling.\nPraise Him in His mighty throne.\nPraise Him for His wonderful deeds.\nPraise Him for His sov’reign majesty!" },
            { name: "REFRAIN", lyrics: "Alleluia! [F1](3x)[/F1]" },
            { name: "VERSE", lyrics: "Praise Him with the blast of trumpet.\nPraise Him now with lyre and harp.\nPraise Him with timbrel and dance.\nPraise Him with the sound of string and reed!" },
            { name: "REFRAIN", lyrics: "Alleluia! [F1](3x)[/F1]" },
            { name: "VERSE", lyrics: "Praise Him with resounding cymbals,\nWith cymbals that crash, give praise!\nO let ev’rything that has breath,\nLet all living creatures praise the Lord!" },
            { name: "REFRAIN", lyrics: "Alleluia! [F1](3x)[/F1]" },
            { name: "VERSE", lyrics: "Praise God the Almighty Father,\nPraise Christ, His beloved Son.\nGive praise to the Spirit of Love,\nForever the triune God be praised!" },
            { name: "END", lyrics: "Alleluia! [F1](3x)[/F1]" }
        ]
    },
    {
        title: "Psalm 116 - I Am Your Servant",
        sections: [
            { name: "VERSE", lyrics: "What shall I offer to You, Lord my God,\nFor all the goodness\nYou have shown to me?\nIn my affliction You gave me mercy,\nYou have restored my soul to its rest.\nSo I will pay my vows to You, Lord,\nWithin Your house,\nBefore the people of God." },
            { name: "REFRAIN", lyrics: "I am Your servant,\nThe one You have chosen,\nI have been called\nand been freed from the grave.\nSo I will lift up the cup of salvation\nAnd I will call on the name of the Lord,\nI will give thanks in the house of the Lord." },
            { name: "VERSE", lyrics: "I love You, Lord,\nFor You have heard my cry.\nYou freed my life\nFrom the shadow of death.\nMy feet had stumbled,\nYou bore me up, Lord,\nI walk with You in the land of the just.\nSo I will pay my vows to You, Lord,\nWithin Your house,\nBefore the people of God." },
            { name: "REFRAIN", lyrics: "I am Your servant,\nThe one You have chosen,\nI have been called\nand been freed from the grave.\nSo I will lift up the cup of salvation\nAnd I will call on the name of the Lord,\nI will give thanks in the house of the Lord." },
            { name: "END", lyrics: "I am Your servant,\nThe one You have chosen,\nI have been called\nand been freed from the grave.\nSo I will lift up the cup of salvation\nAnd I will call on the name of the Lord,\nI will give thanks in the house of the Lord.\n\nI will give thanks! [F1](2x)[/F1]" }
        ]
    },
    {
        title: "Psalm 84 - O Lord How We Love Your Courts!",
        sections: [
            { name: "VERSE", lyrics: "O Lord, how we love Your courts\nThe place where Your glory abides.\nOur hearts and our flesh\nSing for joy to you, Lord\nTo You, the living God!" },
            { name: "CHORUS", lyrics: "Blessed are those, Lord,\nWhose strength is in Thee,\nWho find their life in Your praise.\nThey shall grow strong,\nGo from strength unto strength,\nUntil they see You face to face." },
            { name: "VERSE", lyrics: "A day in Your courts\nIs more precious to me\nThan a thousand without You, my God.\nThe servant at Your gates\nIs more blessed than he\nWhose wealth keeps him\nFar from You, Lord." },
            { name: "CHORUS", lyrics: "Blessed are those, Lord,\nWhose strength is in Thee,\nWho find their life in Your praise.\nThey shall grow strong,\nGo from strength unto strength,\nUntil they see You face to face." },
            { name: "VERSE", lyrics: "The Almighty is a sun,\nA shield for His own,\nFor all those who walk in His ways.\nNo blessing withheld,\nEndless favor bestowed\nOn him who has made You his prize." },
            { name: "END", lyrics: "Blessed are those, Lord,\nWhose strength is in Thee,\nWho find their life in Your praise.\nThey shall grow strong,\nGo from strength unto strength,\nUntil they see You face to face.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Psalm 95 - Come Let Us Sing For Joy To The Lord",
        sections: [
            { name: "VERSE", lyrics: "Come, let us sing for joy to the Lord\nLet us shout to the rock of salvation!\nLet us come before Him giving thanks\nAnd extol Him with music and song!" },
            { name: "REFRAIN", lyrics: "Alleluia! Alleluia!\nHope in God, O my soul,\nIn Him your joy will be full." },
            { name: "VERSE", lyrics: "For the Lord is the great God\nAnd the King above kings\nIn His hands are the depths of the earth\nThe mountains are His and the sea is His\nHe formed all living things." },
            { name: "REFRAIN", lyrics: "Alleluia! Alleluia!\nHope in God, O my soul,\nIn Him your joy will be full." },
            { name: "VERSE", lyrics: "Come, let us bow down and worship Him\nLet us kneel before the Lord our maker.\nFor He is our God and His people are we\nThe flock under His care." },
            { name: "END", lyrics: "Alleluia! Alleluia!\nHope in God, O my soul,\nIn Him your joy will be full.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Purify My Heart",
        sections: [
            { name: "REFRAIN", lyrics: "Purify my heart;\nCleanse me from all sin.\nLet me walk in Your ways, my God,\nAnd worship in Your courts forever." },
            { name: "VERSE", lyrics: "Open my ears to hear You;\nLet my heart be attentive.\nTo hear and obey is my one desire." },
            { name: "REFRAIN", lyrics: "Purify my heart;\nCleanse me from all sin.\nLet me walk in Your ways, my God,\nAnd worship in Your courts forever." },
            { name: "VERSE", lyrics: "Lord, I bow before You;\nTeach me my place.\nTo do Your will, Lord, is my delight." },
            { name: "REFRAIN", lyrics: "Purify my heart;\nCleanse me from all sin.\nLet me walk in Your ways, my God,\nAnd worship in Your courts forever." },
            { name: "VERSE", lyrics: "Take my life, O Lord;\nTake my heart and my soul.\nMy soul finds rest in You;\nYour presence my home." },
            { name: "END", lyrics: "Purify my heart\nCleanse me from all sin.\nLet me walk in Your ways, my God,\nAnd worship in Your courts forever." }
        ]
    },
    {
        title: "Put On Jesus Christ",
        sections: [
            { name: "REFRAIN", lyrics: "Put on Jesus Christ,\nWe were darkness, now we are light.\nLive in daylight, not in the night.\nPut on Jesus Christ!" },
            { name: "VERSE", lyrics: "You know the time has come,\nWe must rise up now.\nOur salvation is nearer than\nWhen we first believed." },
            { name: "REFRAIN", lyrics: "Put on Jesus Christ,\nWe were darkness, now we are light.\nLive in daylight, not in the night.\nPut on Jesus Christ!" },
            { name: "VERSE", lyrics: "Night is almost over,\nDaylight is at hand.\nLeave behind all the things\nWe did in the shadow of the night." },
            { name: "REFRAIN", lyrics: "Put on Jesus Christ,\nWe were darkness, now we are light.\nLive in daylight, not in the night.\nPut on Jesus Christ!" },
            { name: "VERSE", lyrics: "Put on Jesus Christ\nIn Him we have victory\nFor He shattered the power of the night\nAnd He’s risen in glorious majesty." },
            { name: "END", lyrics: "Put on Jesus Christ,\nWe were darkness, now we are light.\nLive in daylight, not in the night.\nPut on Jesus Christ!" }
        ]
    },
    {
        title: "Redeeming Love",
        sections: [
            { name: "REFRAIN", lyrics: "I come boldly, trusting only\nYour redeeming love,\nFlowing freely from Your side now,\nYour atoning blood, like a river,\nLike a fountain, like a cleansing flood.\nI pour out my worship to You\nFor Your redeeming love." },
            { name: "VERSE", lyrics: "My glory – in Your cross of\nShame and suffering.\nMy glory – what the world\ndisdains as nothing.\nI will glory in such foolishness.\nI will glory, for it’s nothing else\nThan Your wisdom\nAnd Your awesome power, my God." },
            { name: "REFRAIN", lyrics: "I come boldly, trusting only\nYour redeeming love,\nFlowing freely from Your side now,\nYour atoning blood, like a river,\nLike a fountain, like a cleansing flood.\nI pour out my worship to You\nFor Your redeeming love." },
            { name: "VERSE", lyrics: "My glory – in Your deep humiliation.\nYou found me and You crowned me\nWith salvation. I will glory!\nAll my sin and guilt has been covered\nBy the blood You spilt\nAnd now I’m living\nIn Your resurrection and light." },
            { name: "END", lyrics: "I come boldly, trusting only\nYour redeeming love,\nFlowing freely from Your side now,\nYour atoning blood, like a river,\nLike a fountain, like a cleansing flood.\nI pour out my worship to You\nFor Your redeeming love." }
        ]
    },
    {
        title: "Refiner’s Fire",
        sections: [
            { name: "VERSE", lyrics: "Purify my heart,\nLet me be as gold and precious silver.\nPurify my heart,\nLet me be as gold, pure gold." },
            { name: "REFRAIN", lyrics: "Refiner’s fire,\nMy heart’s one desire is to be holy,\nSet apart for You, Lord.\nI choose to be holy,\nSet apart for You, my Master\nReady to do Your will." },
            { name: "VERSE", lyrics: "Purify my heart,\nCleanse me from within\nAnd make me holy.\nPurify my heart,\nCleanse me from my sin deep within." },
            { name: "END", lyrics: "Refiner’s fire,\nMy heart’s one desire is to be holy,\nSet apart for You, Lord.\nI choose to be holy,\nSet apart for You, my Master\nReady to do Your will.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Rendid Honor Al Señor",
        sections: [
            { name: "REFRAIN", lyrics: "Rendid honor al Señor,\nTodo su pueblo le alabe;\nQue todos canten su gloria,\nNuestro Dios esta aqui." },
            { name: "VERSE", lyrics: "Majestuosa es su presencia,\nInfinito su amor.\nY su nombre tiene poder,\nEl nombre de Jesus." },
            { name: "REFRAIN", lyrics: "Rendid honor al Señor,\nTodo su pueblo le alabe;\nQue todos canten su gloria,\nNuestro Dios esta aqui." },
            { name: "VERSE", lyrics: "El es digno de alabanzas,\nDe adorarle por siempre\nDe aclamarle en todo tiempo,\nExaltado sea Dios!" },
            { name: "REFRAIN", lyrics: "Rendid honor al Señor,\nTodo su pueblo le alabe;\nQue todos canten su gloria,\nNuestro Dios esta aqui." },
            { name: "VERSE", lyrics: "Pueblo escogido por el Señor,\nSomos todos de el un pueblo real\nPara adorarle\nY proclamar su salvacion." },
            { name: "END", lyrics: "Rendid honor al Señor,\nTodo su pueblo le alabe;\nQue todos canten su gloria,\nNuestro Dios esta aqui." }
        ]
    },
    {
        title: "Renew Us O Lord",
        sections: [
            { name: "REFRAIN", lyrics: "Renew us, O Lord.\nRaise our hearts to You\nAnd not be conformed\nTo the cares of this world.\nLet us seek the glory of Your face\nHere on earth." },
            { name: "END", lyrics: "Lord, You alone can satisfy us.\nLord, You alone can make us whole.\nIn Your mercy bring us to Yourself\nBeholding Your face." }
        ]
    },
    {
        title: "Return O Israel",
        sections: [
            { name: "VERSE", lyrics: "Return, O Israel.\nLet us return to the Lord our God.\nFor we have stumbled in our iniquity\nAnd fallen in our sin." },
            { name: "VERSE", lyrics: "Take with you words. Cry unto Him:\n“Receive us, O Lord.\nRemove from us our guilt.\nAnd we shall offer to You what is good\nAnd never more shall say, ‘Our God’\nTo the work our hands have made.”" },
            { name: "VERSE", lyrics: "“I will love you freely,” says the Lord,\n“And I will heal you of your faithlessness\nI will betroth you to Me in righteousness\nAnd in mercy and in steadfast love.”" },
            { name: "VERSE", lyrics: "“For I will sow you as a fruitful field\nAnd I will bless you as a growing tree.\nAnd you shall prosper\nAs a well-watered garden\nIf you would but return to Me. [F1](2x)[/F1]\nReturn, return, O Israel.”" },
            { name: "END", lyrics: "Return, return, O Israel. [F1](2x)[/F1]" }
        ]
    },
    {
        title: "Return O My Soul",
        sections: [
            { name: "VERSE", lyrics: "The Lord is gracious\nHe is merciful.\nIn my distress I called to Him.\nHe rescued me." },
            { name: "REFRAIN", lyrics: "Return, O my soul, to your rest\nReturn, my soul,\nFor the Lord has been good to you" },
            { name: "VERSE", lyrics: "My soul He freed from death\nMy eyes from tears\nI shall walk before the Lord\nIn the land of the living" },
            { name: "REFRAIN", lyrics: "Return, O my soul, to your rest\nReturn, my soul,\nFor the Lord has been good to you" },
            { name: "VERSE", lyrics: "How can I repay the Lord\nFor all His goodness to me?\nI will pay my vows to Him\nBefore His people." },
            { name: "END", lyrics: "Return, O my soul, to your rest\nReturn, my soul,\nFor the Lord has been good to you\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Rise O People Called To Worship",
        sections: [
            { name: "VERSE", lyrics: "Rise, O people, called to worship\nHeaven’s highest praise to share\nClothed by God in holy splendor\nJoined by Jesus’ priestly prayer.\nHere and now we see but dimly\nThen and there our eyes behold\nHim whom we by faith now worship\nSoon by sight to ever know." },
            { name: "REFRAIN", lyrics: "You, O fount of life eternal\nYou, the source of endless joy\nFace to face with love forever:\n“Gloria!” will angels cry\n“Glory!” will our hearts reply.\n“Holy, holy, holy is the Lord!”" },
            { name: "VERSE", lyrics: "Lives we’ve offered brought before You\nAs all heaven’s hosts adore\nPray’rs with heav’nly incense burning\nRise to shroud Your holy throne.\nCountless saints\nRobed white in splendor\nWashed in blood of spotless Lamb\nNever more to thirst or hunger\nEver more to understand." },
            { name: "REFRAIN", lyrics: "You, O fount of life eternal\nYou, the source of endless joy\nFace to face with love forever:\n“Gloria!” will angels cry\n“Glory!” will our hearts reply.\n“Holy, holy, holy is the Lord!”" },
            { name: "VERSE", lyrics: "Ev’ry tear wiped by the Father\nEvery nation’s tumult quelled\nRoar of sea and crash of thunder\nBy His will creation stilled.\nHeaven’s hosts then awed to silence\nAt the Lamb enthroned above\nThen will we the silence shatter\nWorshipping the Face of love!" },
            { name: "END", lyrics: "You, O fount of life eternal\nYou, the source of endless joy\nFace to face with love forever:\n“Gloria!” will angels cry\n“Glory!” will our hearts reply.\n“Holy, holy, holy is the Lord!”\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Rise Up O Men Of God",
        sections: [
            { name: "VERSE", lyrics: "Rise up, O men of God\nHave done with lesser things.\nGive heart and soul\nAnd mind and strength\nTo serve the King of kings." },
            { name: "VERSE", lyrics: "Rise up, O men of God\nHis Kingdom tarries long.\nBring in the day of brotherhood\nAnd end the night of wrong." },
            { name: "VERSE", lyrics: "Rise up, O men of God\nThe church for you doth wait.\nHer strength unequal to her task\nRise up and make her great." },
            { name: "END", lyrics: "Lift high the cross of Christ!\nTread where His feet have trod.\nAs brothers of the Son of man,\nRise up, O men of God!" }
        ]
    },
    {
        title: "Sacrifice Lamb",
        sections: [
            { name: "VERSE", lyrics: "Have you ever heard Messiah has come?\nIt says in His word, to cleanse everyone.\nAtonement He made, iniquity bore\nThat we might find life in Him evermore." },
            { name: "REFRAIN", lyrics: "The Sacrifice Lamb has been slain,\nHis blood on the altar a stain,\nTo wipe away guilt and pain,\nTo bring hope eternal.\nSalvation has come to the world,\nGod’s only Son to the world,\nJesus the one for the world, Yeshua is He." },
            { name: "VERSE", lyrics: "The prophets of old\nSpeak much of Messiah.\nHis death they foretold,\nThe purpose was clear.\nIsaiah did say it was for an atonement\nTo give us a way that leads not to death." },
            { name: "REFRAIN", lyrics: "The Sacrifice Lamb has been slain,\nHis blood on the altar a stain,\nTo wipe away guilt and pain,\nTo bring hope eternal.\nSalvation has come to the world,\nGod’s only Son to the world,\nJesus the one for the world, Yeshua is He." },
            { name: "VERSE", lyrics: "So brothers of mine,\nLook not to yourselves.\nFor we are but one, we all need His help.\nWe’ve broken the law,\nBut He paid our debt,\nThat we might find life\nBy Yeshua’s death." },
            { name: "END", lyrics: "The Sacrifice Lamb has been slain,\nHis blood on the altar a stain,\nTo wipe away guilt and pain,\nTo bring hope eternal.\nSo final atonement has come\nAnd brought us new hope by God’s Son.\nIf you will believe in your heart\nYeshua you’ll know." }
        ]
    },
    {
        title: "Saint Patrick’s Breastplate",
        sections: [
            { name: "VERSE", lyrics: "Christ be beside me, Christ be before me.\nChrist be behind me, King of my heart.\nChrist be within me, Christ be below me,\nChrist be above me, never to part." },
            { name: "VERSE", lyrics: "Christ on my right hand, Christ on my left hand,\nChrist all around me, shield in the strife.\nChrist in my sleeping, Christ in my sitting,\nChrist in my rising, light of my life." },
            { name: "END", lyrics: "Christ be in all hearts, thinking about me,\nChrist be in all tongues telling of me.\nChrist be the vision in eyes that see me;\nIn ears that hear me. Christ ever be." }
        ]
    },
    {
        title: "Salvation Belongs To Our God",
        sections: [
            { name: "VERSE", lyrics: "Salvation belongs to our God\nWho sits upon the throne\nAnd unto the Lamb:\nPraise and glory, wisdom and thanks\nHonor and power and strength." },
            { name: "REFRAIN", lyrics: "Be to our God forever and ever! [F1](3x)[/F1]\nAmen!" },
            { name: "VERSE", lyrics: "And we, the redeemed, shall be strong\nIn purpose and unity\nDeclaring aloud:\nPraise and glory, wisdom and thanks\nHonor and power and strength." },
            { name: "END", lyrics: "Be to our God forever and ever! [F1](3x)[/F1]\nAmen!\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Search Me Lord",
        sections: [
            { name: "REFRAIN", lyrics: "Search me Lord\nAnd know my heart\nTest me and know my thoughts.\nPurify my heart and my mind\nAnd lead me in the way everlasting." },
            { name: "VERSE", lyrics: "How can I hope to purify my ways\nBut by Your word?\nWith all my heart, and all my soul,\nI seek Your face, O God!" },
            { name: "REFRAIN", lyrics: "Search me Lord\nAnd know my heart\nTest me and know my thoughts.\nPurify my heart and my mind\nAnd lead me in the way everlasting." },
            { name: "VERSE", lyrics: "Keep watch, O Lord, over every word\nThat comes from my mouth.\nTo evil’s part incline not my heart,\nBut only to do Your will!" },
            { name: "REFRAIN", lyrics: "Search me Lord\nAnd know my heart\nTest me and know my thoughts.\nPurify my heart and my mind\nAnd lead me in the way everlasting." },
            { name: "VERSE", lyrics: "For who will ascend the hill of God,\nYour holy place?\nHe, in your sight, who does what is right\nAnd walks in the ways of his God." },
            { name: "REFRAIN", lyrics: "Search me Lord\nAnd know my heart\nTest me and know my thoughts.\nPurify my heart and my mind\nAnd lead me in the way everlasting." },
            { name: "VERSE", lyrics: "How blessed are the pure of heart,\nFor they shall see God.\nO my soul, make God your all,\nYour prize, your portion in life!" },
            { name: "END", lyrics: "Search me Lord\nAnd know my heart\nTest me and know my thoughts.\nPurify my heart and my mind\nAnd lead me in the way everlasting." }
        ]
    },
    {
        title: "Seated On The Throne",
        sections: [
            { name: "VERSE", lyrics: "He is seated on the throne\nLightnings flash and thunders roar\nThe elders cast their crowns before the Lord\nThe cherubim fly all around\nDay and night the courts resound\nHoly, holy, holy is the Lord!" },
            { name: "CHORUS", lyrics: "And we sing\n“Holy, mighty, worthy is the Lord God!”\nTo Him who sits enthroned be the glory!" },
            { name: "VERSE", lyrics: "Harps are played; the incense smokes\nGod Almighty holds the scroll\nThe seven seals are opened by the Lamb\nFrom every nation, every tribe\nA new song will now arise\nWorthy, worthy, worthy is the Lamb!" },
            { name: "CHORUS", lyrics: "And we sing\n“Holy, mighty, worthy is the Lord God!”\nTo Him who sits enthroned be the glory!" },
            { name: "BRIDGE", lyrics: "Many nations, one voice\nMany peoples, one voice\nAll you nations, give Him praise!\nAll you peoples, give Him glory!\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "And we sing\n“Holy, mighty, worthy is the Lord God!”\nTo Him who sits enthroned be the glory!\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "See The King",
        sections: [
            { name: "VERSE", lyrics: "See the King of kings ascending\nTo His throne of power again\nWho in humble garb descending\nCame to dwell with lowly men.\nGlad the angel host adoring\nFling the golden gates aside\nMortals, view the Victor soaring\nHeav’n receives the Lord with pride." },
            { name: "VERSE", lyrics: "Strike your harps, ye choirs supernal\nLift your songs of welcome now\nFor, behold, your King eternal\nComes with laurels on His brow.\nGone the sorrow and the sighing\nAll the anguish and the pain\nGone the weakness and the dying.\nChoirs immortal, raise the strain." },
            { name: "END", lyrics: "Hallelujah! Endless glory\nTo the King of glory give.\nMortals, heed the gladsome story\nChrist is ris’n and thou may’st live.\nHallelujah! Hallelujah! [F1](3x)[/F1]\nHalle, Hallelujah!" }
        ]
    },
    {
        title: "Shine Jesus Shine",
        sections: [
            { name: "VERSE", lyrics: "Lord, the light of Your love is shining\nIn the midst of the darkness shining\nJesus, light of the world, shine upon us\nSet us free by the truth\nYou now bring us\nShine on me, shine on me!" },
            { name: "REFRAIN", lyrics: "Shine, Jesus, shine.\nFill this land with the Father’s glory.\nBlaze, Spirit, blaze. Set our hearts on fire.\nFlow, river, flow.\nFlood the nations with grace and mercy.\nSend forth Your word, Lord,\nAnd let there be light." },
            { name: "VERSE", lyrics: "Lord, I come to Your awesome presence\nFrom the shadows into Your radiance\nBy the blood I may enter Your brightness\nSearch me, try me,\nConsume all my darkness.\nShine on me, shine on me!" },
            { name: "REFRAIN", lyrics: "Shine, Jesus, shine.\nFill this land with the Father’s glory.\nBlaze, Spirit, blaze. Set our hearts on fire.\nFlow, river, flow.\nFlood the nations with grace and mercy.\nSend forth Your word, Lord,\nAnd let there be light." },
            { name: "VERSE", lyrics: "As we gaze on Your kingly brightness\nSo our faces display Your likeness\nEver changing from glory to glory\nMirrored here, may our lives\nTell your story.\nShine on me, Shine on me!" },
            { name: "END", lyrics: "Shine, Jesus, shine.\nFill this land with the Father’s glory.\nBlaze, Spirit, blaze. Set our hearts on fire.\nFlow, river, flow.\nFlood the nations with grace and mercy.\nSend forth Your word, Lord,\nAnd let there be light.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Shout To The Lord",
        sections: [
            { name: "VERSE", lyrics: "My Jesus, my Savior\nLord, there is none like You.\nAll of my days I want to praise\nThe wonders of Your mighty love." },
            { name: "VERSE", lyrics: "My comfort, my shelter\nTower of refuge and strength\nLet every breath, all that I am\nNever cease to worship You." },
            { name: "REFRAIN", lyrics: "Shout to the Lord,\nAll the earth, let us sing\nPower and majesty, praise to the King.\nMountains bow down\nAnd the seas will roar\nAt the sound of Your name." },
            { name: "REFRAIN", lyrics: "I sing for joy at the works of Your hand.\nForever I’ll love you, forever I’ll stand.\nNothing compares to the promise\nI have in You." },
            { name: "VERSE", lyrics: "My Jesus, my Savior\nLord, there is none like You.\nAll of my days I want to praise\nThe wonders of Your mighty love." },
            { name: "VERSE", lyrics: "My comfort, my shelter\nTower of refuge and strength\nLet every breath, all that I am\nNever cease to worship You." },
            { name: "REFRAIN", lyrics: "Shout to the Lord,\nAll the earth, let us sing\nPower and majesty, praise to the King.\nMountains bow down\nAnd the seas will roar\nAt the sound of Your name." },
            { name: "REFRAIN", lyrics: "I sing for joy at the works of Your hand.\nForever I’ll love you, forever I’ll stand.\nNothing compares to the promise\nI have in You." },
            { name: "REFRAIN", lyrics: "Shout to the Lord,\nAll the earth, let us sing\nPower and majesty, praise to the King.\nMountains bow down\nAnd the seas will roar\nAt the sound of Your name." },
            { name: "END", lyrics: "I sing for joy at the works of Your hand.\nForever I’ll love you, forever I’ll stand.\nNothing compares to the promise\nI have in You." }
        ]
    },
    {
        title: "Side By Side",
        sections: [
            { name: "VERSE", lyrics: "Side by side, shoulder to shoulder\nWe go forward day by day.\nAnd our stride grows bolder and bolder\nFor the Lord Himself is leading the way." },
            { name: "VERSE", lyrics: "For we are Jesus’ disciples\nAnd we’ll follow Him wherever He leads\nTill side by side, together forever\nWe share the wedding feast of the Lamb." },
            { name: "VERSE", lyrics: "For there is one body, one Spirit\nThere is one hope\nThat belongs to our call\nOne Lord, one faith, one baptism\nOne God and Father of us all." },
            { name: "VERSE", lyrics: "Side by side, shoulder to shoulder\nWe go forward day by day.\nAnd our stride grows bolder and bolder\nFor the Lord Himself is leading the way." },
            { name: "VERSE", lyrics: "For we are Jesus’ disciples\nAnd we’ll follow Him wherever He leads\nTill side by side, together forever\nWe share the wedding feast of the Lamb." },
            { name: "VERSE", lyrics: "For there is one body, one Spirit\nThere is one hope\nThat belongs to our call\nOne Lord, one faith, one baptism\nOne God and Father of us all." },
            { name: "VERSE", lyrics: "Side by side, shoulder to shoulder\nWe go forward day by day.\nAnd our stride grows bolder and bolder\nFor the Lord Himself is leading the way." },
            { name: "END", lyrics: "For we are Jesus’ disciples\nAnd we’ll follow Him wherever He leads\nTill side by side, together forever\nWe share the wedding feast of the Lamb.\nTill side by side, together forever\nWe share the wedding feast of the Lamb." }
        ]
    },
    {
        title: "Sing To God A Brand New Canticle",
        sections: [
            { name: "REFRAIN", lyrics: "Sing to God a brand new,\nBrand new canticle and\nFill the valleys with a new song.\nFill the valleys, yes, and\nGo fill the cities, too, and\nSing the ancient Allelu!" },
            { name: "VERSE", lyrics: "Israel, let your joy be God\nAnd sing: “Praise the Lord\nIn everything.”" },
            { name: "REFRAIN", lyrics: "Alleluia, praise the Lord!\nAnd let the nations shout and\nClap their hands for joy,\nAnd let the nations shout and\nClap their hands for joy." },
            { name: "REFRAIN", lyrics: "Sing to God a brand new,\nBrand new canticle and\nFill the valleys with a new song.\nFill the valleys, yes, and\nGo fill the cities, too, and\nSing the ancient Allelu!" },
            { name: "VERSE", lyrics: "For the Lord is a God of love,\nCome to free all the poor with victory." },
            { name: "REFRAIN", lyrics: "Alleluia, praise the Lord!\nAnd let the nations shout and\nClap their hands for joy,\nAnd let the nations shout and\nClap their hands for joy." },
            { name: "REFRAIN", lyrics: "Sing to God a brand new,\nBrand new canticle and\nFill the valleys with a new song.\nFill the valleys, yes, and\nGo fill the cities, too, and\nSing the ancient Allelu!" },
            { name: "VERSE", lyrics: "For the Lord is a King of kings,\nGod on high\nIn whose love we’ll never die." },
            { name: "END", lyrics: "Alleluia, praise the Lord!\nAnd let the nations shout and\nClap their hands for joy,\nAnd let the nations shout and\nClap their hands for joy." }
        ]
    },
    {
        title: "Sing To The Lord",
        sections: [
            { name: "REFRAIN", lyrics: "Sing to the Lord a new song [F1](2x)[/F1]\nSing to the Lord, sing to the Lord\nA new song.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "God made the world in seven days\nAdam sinned and then all men fell away.\nJesus came to redeem my soul\nHe died upon the cross\nAnd He made me whole." },
            { name: "REFRAIN", lyrics: "Sing to the Lord a new song [F1](2x)[/F1]\nSing to the Lord, sing to the Lord\nA new song.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "God said to Moses,\n“Go and set My people free,\nI will be your guide,\nJust always follow Me.”\nMoses led the people to the parted Red Sea,\nAnd they sang and they danced\nAnd they had a jubilee." },
            { name: "REFRAIN", lyrics: "Sing to the Lord a new song [F1](2x)[/F1]\nSing to the Lord, sing to the Lord\nA new song.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Jesus said to Peter,\n“Come on, I’m calling you,\nI know the way is hard\nBut I’ll always see you through.”\nPeter said, “My Lord, I’m a sinful man”\nThen he threw down his net\nAnd to the Lord he ran." },
            { name: "REFRAIN", lyrics: "Sing to the Lord a new song [F1](2x)[/F1]\nSing to the Lord, sing to the Lord\nA new song.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Come on, my brother\nWon’t you turn to Jesus now?\nHe knows that you’re a sinner\nBut He loves you anyhow.\nJesus paid the price for your salvation\nJust call upon His name\nAnd you’re a new creation." },
            { name: "REFRAIN", lyrics: "Sing to the Lord a new song [F1](2x)[/F1]\nSing to the Lord, sing to the Lord\nA new song.\n[F1](2x)[/F1]" },
            { name: "BRIDGE", lyrics: "Come on and sing!\nSing to the Lord a new song!\nCome on and sing your praise to God\nforever more!\n[F1](2x)[/F1]\n[F1](Women)[/F1]\nSing to the Lord a new song! [F1](2x)[/F1]\nSing to the Lord, sing to the Lord a new song!\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "Sing to the Lord a new song!" }
        ]
    },
    {
        title: "Sing With All The Sons Of Glory",
        sections: [
            { name: "VERSE", lyrics: "Sing with all the sons of glory\nSing the resurrection song!\nDeath and sorrow, earth’s dark story\nTo the former days belong.\nAll around the clouds are breaking\nSoon the storms of time shall cease\nIn God’s likeness, man awaking\nKnows the everlasting peace." },
            { name: "VERSE", lyrics: "O what glory! Far exceeding\nAll that eye has yet perceived\nHoliest hearts for ages pleading\nNever that full joy conceived.\nGod has promised, Christ prepares it\nThere on high our welcome waits\nEvery humble spirit shares it\nChrist has passed the eternal gates." },
            { name: "VERSE", lyrics: "Life eternal! Heav’n rejoices\nJesus lives who once was dead.\nJoin, O man, the deathless voices\nChild of God, lift up thy head.\nPatriarchs from the distant ages\nSaints all longing for their heaven\nProphets, psalmists, seers and sages\nAll await the glory given." },
            { name: "END", lyrics: "Life eternal! O what wonders\nCrowd on faith, what joy unknown\nWhen amidst earth’s closing thunders\nSaints shall stand before the throne.\nO, to enter that bright portal\nSee that glowing firmament\nKnow, with Thee, O God immortal\nJesus Christ whom Thou hast sent." }
        ]
    },
    {
        title: "So Bless The Lord",
        sections: [
            { name: "VERSE", lyrics: "Who is He who forgives our iniquities?\nWho is He who heals our disease?\nIt is the Lord who restored your life\nFrom the grave\nand renews your youth like the eagle's." },
            { name: "REFRAIN", lyrics: "So bless the Lord Oh my soul;\nAll within me exalt Him\nRing out my heart; sing out my soul!\nDo not forget in His mercy\nHe has set you free.\nOh Lord be blessed in me." },
            { name: "VERSE", lyrics: "For the Lord has been\nGracious and merciful,\nAll His ways rich in steadfast love\nAs the skies rise high over all the earth,\nSo far has God removed all our sins." },
            { name: "REFRAIN", lyrics: "So bless the Lord Oh my soul;\nAll within me exalt Him\nRing out my heart; sing out my soul!\nDo not forget in His mercy\nHe has set you free.\nOh Lord be blessed in me." },
            { name: "VERSE", lyrics: "As a father is moved and compassionate,\nQuick to spare the son whom He loves,\nSo does God's face of grace ever seek\nTo save the people so close to His heart." },
            { name: "END", lyrics: "So bless the Lord Oh my soul;\nAll within me exalt Him\nRing out my heart; sing out my soul!\nDo not forget in His mercy\nHe has set you free.\nOh Lord be blessed in me.\n[F1](2x)[/F1]\n\nOh Lord be blessed in me." }
        ]
    },
    {
        title: "Song Of Good News",
        sections: [
            { name: "VERSE", lyrics: "Open your ears, O Christian people,\nOpen your ears and hear good news!\nOpen your hearts, O royal priesthood,\nGod has come to you." },
            { name: "REFRAIN", lyrics: "God has spoken to His people, Hallelujah!\nAnd His words are words of wisdom,\nHallelujah!" },
            { name: "VERSE", lyrics: "He who has ears to hear His message,\nHe who has ears then let him hear!\nHe who would learn the way of wisdom,\nLet him hear God’s word." },
            { name: "REFRAIN", lyrics: "God has spoken to His people, Hallelujah!\nAnd His words are words of wisdom,\nHallelujah!" },
            { name: "VERSE", lyrics: "Israel comes to greet the Savior;\nJudah is glad to see His day!\nFrom East and West the peoples travel,\nHe will show the way." },
            { name: "END", lyrics: "God has spoken to His people, Hallelujah!\nAnd His words are words of wisdom,\nHallelujah!" }
        ]
    },
    {
        title: "Song Of My People",
        sections: [
            { name: "VERSE", lyrics: "Abraham, Abraham,\nWhere are you coming from, Abraham?\nI’m coming from the land\nOf the pagans, Lord,\nI’m coming to You, my God.\nAbraham, Abraham, I will be your God." },
            { name: "VERSE", lyrics: "Israel, Israel,\nWhy have you strayed from me, Israel?\nYou say you don’t need\nMy guiding hand,\nYou say you don’t want My love.\nIsrael, Israel, I will be your God." },
            { name: "CHORUS", lyrics: "Gather ‘round, listen now\nTo the words of a carpenter\nWho walked the earth working miracles\nWho died for us on a cross.\n“Take My hand, walk with Me,\nI will be your God.”" },
            { name: "VERSE", lyrics: "Sons of men, sons of men,\nWhere are you coming from, sons of men?\nWe’re coming to You out of darkness, Lord,\nWe’re coming to You, our God.\nSons of men, sons of light,\nI will be your God." },
            { name: "END", lyrics: "Gather ‘round, listen now\nTo the words of a carpenter\nWho walked the earth working miracles\nWho died for us on a cross.\n“Take My hand, walk with Me,\nI will be your God.”" }
        ]
    },
    {
        title: "Song Of Patrick",
        sections: [
            { name: "VERSE", lyrics: "This day God gives me\nStrength of high heaven\nSun and moon shining\nFlame in my hearth\nFlashing of lightning\nWind in its swiftness\nDeeps of the ocean\nFirmness of earth." },
            { name: "REFRAIN", lyrics: "Rising I thank You\nMighty and strong One\nKing of creation, Giver of rest\nLight of the morning\nDispersing the darkness\nYour love awaking the dawn!" },
            { name: "VERSE", lyrics: "This day God sends me\nStrength as my steersman\nMight to uphold me,\n Wisdom as guide\nYour eyes are watchful\nYour ears are list’ning\nYour lips are speaking\nStrength at my side." },
            { name: "REFRAIN", lyrics: "Rising I thank You\nMighty and strong One\nKing of creation, Giver of rest\nLight of the morning\nDispersing the darkness\nYour love awaking the dawn!" },
            { name: "VERSE", lyrics: "God’s way is my way\nGod’s shield is round me\nGod’s host defends me,\nSaving from ill\nAngels of heaven,\nDrive from me always\nAll that would harm me\nStand by me still." },
            { name: "REFRAIN", lyrics: "Rising I thank You\nMighty and strong One\nKing of creation, Giver of rest\nLight of the morning\nDispersing the darkness\nYour love awaking the dawn!" },
            { name: "END", lyrics: "Rising I thank You\nMighty and strong One\nKing of creation, Giver of rest\nFirmly confessing: Oneness of Godhead\nThreeness of Persons, Trinity blest!" }
        ]
    },
    {
        title: "Song Of Praise",
        sections: [
            { name: "REFRAIN", lyrics: "[F1](Women)[/F1]\nHallelujah! [F1](8x)[/F1]\nLord!\n[F1](Men)[/F1]\nBlessing, honor, glory and power!\n[F1](Both)[/F1]\nLord!" },
            { name: "VERSE", lyrics: "God is calling all of the nations to sing,\n“Praise, honor, glory to You!”\nSo He summons all of His people\nTo give thanks everyday\nThousands of voices proclaim:\n“God is light and He has shone on us!”" },
            { name: "REFRAIN", lyrics: "[F1](Women)[/F1]\nHallelujah! [F1](8x)[/F1]\nLord!\n[F1](Men)[/F1]\nBlessing, honor, glory and power!\n[F1](Both)[/F1]\nLord!" },
            { name: "VERSE", lyrics: "We will see a horse with his Rider\nHe is faithful and true to His word\nCrowned with glory, eyes flaming fire\nFrom His mouth issues a sword\nThe mighty Word of God\nKing of kings and Lord of lords is He!" },
            { name: "REFRAIN", lyrics: "[F1](Women)[/F1]\nHallelujah! [F1](8x)[/F1]\nLord!\n[F1](Men)[/F1]\nBlessing, honor, glory and power!\n[F1](Both)[/F1]\nLord!" },
            { name: "VERSE", lyrics: "We await our heavenly city, singing:\n“Jerusalem, God has named you!”\nHe will make His home with His people\nNever more shall we cry\nThe tears wiped from our eyes.\nAll who thirst drink deep\nFrom the well of life!" },
            { name: "END", lyrics: "[F1](Women)[/F1]\nHallelujah! [F1](8x)[/F1]\nLord!\n[F1](Men)[/F1]\nBlessing, honor, glory and power!\n[F1](Both)[/F1]\nLord!" }
        ]
    },
    {
        title: "Song Of Thanks",
        sections: [
            { name: "VERSE", lyrics: "Sing a merry song of thanks unto the Lord.\nThroughout every age His mercy will endure.\nIsrael will shout, let the story out\nHouse of Aaron, take your rest in God secure." },
            { name: "REFRAIN", lyrics: "Alleluia! [F1](16x)[/F1]" },
            { name: "VERSE", lyrics: "In my troubles all I go unto the Lord\nGod is standing by me, what man will I fear?\nTo the Lord we ran, trusting not in man\nTrust in God, my brothers\nHe will always hear." },
            { name: "REFRAIN", lyrics: "Alleluia! [F1](16x)[/F1]" },
            { name: "VERSE", lyrics: "All surrounded when I struggled with my foe\nAwful raging fire, they buzz like angry bees\nGod then heard my call\nSaved me from my fall\nSavior up on high has heard my lonely plea." },
            { name: "REFRAIN", lyrics: "Alleluia! [F1](16x)[/F1]" },
            { name: "VERSE", lyrics: "Loud rejoicing let there be in every home\nGod has come to help us\nStrong and very brave.\nNow I will not die, God has heard my cry\nAfter sending trouble He has come to save." },
            { name: "REFRAIN", lyrics: "Alleluia! [F1](16x)[/F1]" },
            { name: "VERSE", lyrics: "Open up your gates of glory, let me through.\nI’ll give thanks to God\nWho saved my lonely life.\nThis day God has made, revel in His aid\nWe will prosper free of all\nOur cares and strife." },
            { name: "REFRAIN", lyrics: "Alleluia! [F1](16x)[/F1]" },
            { name: "VERSE", lyrics: "Blest are they who come in the name of God.\nGod is Lord of all, His light on us has shone.\nLet us play a horn, dancing till the morn\nMerciful is God, He hears our every moan." },
            { name: "END", lyrics: "Alleluia! [F1](16x)[/F1]" }
        ]
    },
    {
        title: "Song Of Victory",
        sections: [
            { name: "VERSE", lyrics: "O wilt Thou ride with our armies, O God\nAnd send us help from the sanctuary.\nRout the fowler with Thy rod\nAnd cast down the workings\nOf the enemy." },
            { name: "REFRAIN", lyrics: "Thine the power and Thine the glory\nThine the strength and the victory\nThine the truth\nAnd Thine the authority and\nThine the Kingdom for eternity." },
            { name: "REFRAIN", lyrics: "Alleluia! Alleluia! [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "[F1](Men)[/F1]\nO wilt Thou ride with our armies, O God\nAnd send us help from the sanctuary.\nRout the fowler with Thy rod\nAnd cast down the workings\nOf the enemy.\n[F1](Women)[/F1] Alleluia! [F1](4x)[/F1]" },
            { name: "END", lyrics: "[F1](Women)[/F1] O Lord! [F1](3x)[/F1]\n[F1](Men)[/F1] Thine the Kingdom\nAnd power and glory\n[F1](3x)[/F1]\n[F1](Both)[/F1] O Lord!" }
        ]
    },
    {
        title: "Spirit Of The Living God",
        sections: [
            { name: "VERSE", lyrics: "Spirit of the living God,\nWe affirm Your presence here.\nSpirit of the living God,\nWe affirm Your power here." },
            { name: "END", lyrics: "To heal us and to deliver us,\nTo fill us and to change us,\nSpirit of God.\n\nTo rest on us and to empower us,\nTo work through us and to reveal in us\nJesus, the King." }
        ]
    },
    {
        title: "Strong And Faithful",
        sections: [
            { name: "VERSE", lyrics: "Our hearts know no fear\nStrong and faithful is our God.\nWe are His, precious and dear\nA rock unmoved, He is our God." },
            { name: "REFRAIN", lyrics: "For though a thousand may fall\nAnd mountains may crumble\nWe shall continue to stand.\nFor men who are mighty and tall\nMay falter and tremble\nWe shall possess the land.\nFor strong and faithful is our God.\nFor strong and faithful is our God." },
            { name: "VERSE", lyrics: "Clouds of night may fill the sky\nStorms that rage may blow the day\nBut let your hearts rest in your God\nHe will shield you all the way." },
            { name: "END", lyrics: "For though a thousand may fall\nAnd mountains may crumble\nWe shall continue to stand.\nFor men who are mighty and tall\nMay falter and tremble\nWe shall possess the land.\nFor strong and faithful is our God.\nFor strong and faithful is our God.\n[F1](2x)[/F1]\n\nFor strong and faithful is our God." }
        ]
    },
    {
        title: "Strong The Chains",
        sections: [
            { name: "VERSE", lyrics: "Strong the chains that had held us bound\nThrough our fall cast afar\nFrom the light of His face\nYet as great the fetters of our sin\nGreater still is the love of God for man.\nHe has taken heed of our soul’s distress\nKnowing our frame that we are but dust\nThus He sends His first-born Son to be\nRansom for our captivity." },
            { name: "VERSE", lyrics: "Wisdom, knowledge and holiness\nAll revealed in the Lord, our righteousness.\nEvery promise of our faithful God\nFinds its “Yes” by the will of His living word.\nHe is Jesus, fount of truth and life\nMercy and favor in sacrifice.\nHe has raised us from our lowliness\nHealing our nature by His death." },
            { name: "VERSE", lyrics: "Love and worship freely bring\nGiving glory and honor\nAnd thanks everlasting\nLook upon the exalted Lord\nFor in Him is our help and our great reward.\nHe is Christ ‘fore whom all knees shall bend\nHe the beginning, He the end\nHis redeemed in endless joy shall share\nGod’s own glory evermore." },
            { name: "END", lyrics: "For His name by all shall be confessed\nGod and Savior ever blest\nWhile His bride in triumph ceaseless sing\nHymns of glory to her King\nSung to the glory of her King\nSung to the glory of her King." }
        ]
    },
    {
        title: "Taste And See",
        sections: [
            { name: "REFRAIN", lyrics: "Taste and see\nHow good our God can be!\nO taste and see\nHow good our God can be!" },
            { name: "VERSE", lyrics: "I will bless the Lord at all times\nMy mouth will proclaim His praise\nMy soul makes its boast\nIn the Lord our God\nLet the humble hear and be glad." },
            { name: "REFRAIN", lyrics: "Taste and see\nHow good our God can be!\nO taste and see\nHow good our God can be!" },
            { name: "VERSE", lyrics: "Come, glorify the Lord with me\nTogether let us praise His name\nLook to Him and grow bright\nIn His radiant light\nAnd your face will never be ashamed." },
            { name: "REFRAIN", lyrics: "Taste and see\nHow good our God can be!\nO taste and see\nHow good our God can be!" },
            { name: "VERSE", lyrics: "The eyes of the Lord are on the just\nAnd His ears toward all their cries\nThe Lord is near to the broken heart\nAnd the crushed in Spirit, He saves." },
            { name: "REFRAIN", lyrics: "Taste and see\nHow good our God can be!\nO taste and see\nHow good our God can be!" },
            { name: "VERSE", lyrics: "O taste and see the Lord is good\nAnd happy are all who trust in Him\nO fear the Lord, you His holy ones\nTrust in Him and lack no good thing." },
            { name: "END", lyrics: "Taste and see\nHow good our God can be!\nO taste and see\nHow good our God can be!\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Take My Life",
        sections: [
            { name: "VERSE", lyrics: "Take my life and let it be\nConsecrated, Lord, to Thee.\nTake my moments and my days\nLet them flow in ceaseless praise.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Take my hands and let them move\nAt the impulse of Thy love.\nTake my feet and let them be\nSwift and beautiful for Thee.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Take my voice and let me sing\nEver only for my King.\nTake my lips and let them be\nFilled with messages from Thee.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Take my will and make it Thine,\nIt shall be no longer mine.\nTake my heart, it is Thine own\nIt shall be Thy royal throne.\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "Take my love, my Lord, I pour\nAt Thy feet my treasure store.\nTake myself and I will be\nEver, only, all for Thee.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Take Our Bread",
        sections: [
            { name: "REFRAIN", lyrics: "Take our bread, we ask You take our hearts,\nWe love You take our lives,\nOh Father we are Yours, we are Yours." },
            { name: "VERSE", lyrics: "Yours as we stand at the table You set;\nYours as we eat the bread\nOur hearts can’t forget.\nWe are the sign of Your life with us yet,\nWe are Yours, we are Yours." },
            { name: "REFRAIN", lyrics: "Take our bread, we ask You take our hearts,\nWe love You take our lives,\nOh Father we are Yours, we are Yours." },
            { name: "VERSE", lyrics: "Your holy people standing\nWashed in Your blood,\nSpirit filled yet hungry we await You food.\nWe are poor, but we’ve brought ourselves\nThe best we could; we are Yours, we are Yours." },
            { name: "END", lyrics: "Take our bread, we ask You take our hearts,\nWe love You take our lives,\nOh Father we are Yours, we are Yours." }
        ]
    },
    {
        title: "Te Deum",
        sections: [
            { name: "VERSE", lyrics: "You are God, we praise You.\nYou are Lord, we thank You.\nAll creation worships You,\nFather, ancient of days." },
            { name: "VERSE", lyrics: "To You all the angels,\nAll the pow’rs of heaven,\nCherubim and seraphim\nSing in endless praise." },
            { name: "REFRAIN", lyrics: "You are holy, holy, powerful and mighty!\nYour glory fills the heavens,\nYour splendor fills the earth.\nYou are holy, holy, powerful and mighty!\nYour glory fills the heavens,\nYour splendor fills the earth." },
            { name: "VERSE", lyrics: "Your servants, the apostles,\nHonor You and praise You.\nThe fellowship of prophets,\nYour greatness glorifies." },
            { name: "VERSE", lyrics: "The army of the martyrs,\nRobed in white, adores You.\nThroughout the world Your holy church\nProclaims You to the skies." },
            { name: "REFRAIN", lyrics: "Father, glorious, infinite in majesty,\nSon victorious,\nSpirit, comfort and guide.\nYou are holy, holy, powerful and mighty!\nYour glory fills the heavens,\nYour splendor fills the earth." },
            { name: "VERSE", lyrics: "Christ, Son of the Father,\nKing of endless glory,\nYou came among us lowly\nBirth of Mary’s womb." },
            { name: "VERSE", lyrics: "You robbed death of its power,\nYou opened heaven’s treasure,\nNow You sit at God’s right hand,\nSoon to be our Judge." },
            { name: "END", lyrics: "Come, Lord Jesus,\nCome to help Your people\nThose for whom You shed Your blood\nTo whom You gave new birth.\nYou are holy, holy, powerful and mighty!\nYour glory fills the heavens,\nYour splendor fills the earth." }
        ]
    },
    {
        title: "Teach Me To Seek You Lord",
        sections: [
            { name: "VERSE", lyrics: "Teach me to seek You, Lord,\nAnd when I seek You\nShow Yourself to me.\nFor I cannot seek You\nUnless You teach me,\nNor can I find You\nUnless You show Yourself to me." },
            { name: "END", lyrics: "Let me seek You in desiring You,\nDesire You in seeking You.\nLet me find You in loving You,\nAnd love You in finding You." }
        ]
    },
    {
        title: "Teach Me Your Way O Lord",
        sections: [
            { name: "VERSE", lyrics: "Teach me Your way, O Lord,\nAnd I will walk in Your truth.\nGive me an undivided heart,\nThat I may fear Your name." },
            { name: "END", lyrics: "I will praise You, O Lord,\nWith all my heart.\nI will glorify Your name forever\nFor great Your love tow’rd me." }
        ]
    },
    {
        title: "Tell The World",
        sections: [
            { name: "VERSE", lyrics: "For God so loved the world\nHe gave us His only Son\nJesus Christ our Savior,\nHis most precious One.\nHe has sent us His message of love,\nAnd sends those who hear\nTo bring His message to everyone\nIn a voice loud and clear." },
            { name: "END", lyrics: "Let us tell the world of His love,\nThe greatest love the world has known.\nSearch the world for those\nWho have walked astray and lead them home.\nFill the world’s darkest corners\nWith His light from up above.\nWalk every step, every mile, every road\nAnd tell the world, tell the world of His love." }
        ]
    },
    {
        title: "Thanks Be To God",
        sections: [
            { name: "VERSE", lyrics: "Thanks be to God! [F1](2x)[/F1]\nBlessing, honor, glory and thanks\nBe to You, our King and God!" },
            { name: "END", lyrics: "We give thanks to Thee,\nLord God Almighty.\nThroughout all ages\nBlest be Your name\nFor You have taken Your great pow’r\nAnd begun to reign!" }
        ]
    },
    {
        title: "That Blest Abode",
        sections: [
            { name: "VERSE", lyrics: "Ah, that blest abode above,\nWho shall pass its portals?\nWho at length in peace and love,\nDwell with the immortals?\nThey who battle for the right\nWhen the day is longest\nThey who conquer in the fight\nWhen the foe is strongest." },
            { name: "VERSE", lyrics: "Who shall, nearest to the throne,\nHave a place appointed?\nWho have greatest favor shown\nBy the Lord’s Anointed?\nThey who serve Him gladly now,\nKing and Captain royal\nEver mindful of their vow,\nNoble, steadfast, loyal." },
            { name: "END", lyrics: "Ah, the bliss of heav’ns abode!\nRise, my soul, to win it.\nShrink not from the weary road,\nBut in faith begin it.\nList’n not to the call of sense,\nEarth is vain and lying.\nYonder is thy recompense,\n‘Mid a bliss undying. [F1](3x)[/F1]" }
        ]
    },
    {
        title: "The Battle Belongs To The Lord",
        sections: [
            { name: "VERSE", lyrics: "In heavenly armor we’ll enter the land\nThe battle belongs to the Lord.\nNo weapon that’s fashioned\nAgainst us will stand\nThe battle belongs to the Lord." },
            { name: "REFRAIN", lyrics: "And we sing glory, honor,\nPower and strength to the Lord!\nWe sing glory, honor,\nPower and strength to the Lord!" },
            { name: "VERSE", lyrics: "When the power of darkness\nComes in like a flood\nThe battle belongs to the Lord.\nHe’ll raise up a standard\nThe pow’r of His blood\nThe battle belongs to the Lord." },
            { name: "REFRAIN", lyrics: "And we sing glory, honor,\nPower and strength to the Lord!\nWe sing glory, honor,\nPower and strength to the Lord!" },
            { name: "VERSE", lyrics: "When your enemy presses in hard,\nDo not fear\nThe battle belongs to the Lord.\nTake courage, my friend,\nYour redemption is near\nThe battle belongs to the Lord." },
            { name: "END", lyrics: "And we sing glory, honor,\nPower and strength to the Lord!\nWe sing glory, honor,\nPower and strength to the Lord!" }
        ]
    },
    {
        title: "The Celebration Song",
        sections: [
            { name: "VERSE", lyrics: "In the presence of Your people,\nI will praise Your name\nFor alone, You are holy,\nEnthroned on the praises of Israel." },
            { name: "END", lyrics: "Let us celebrate Your goodness,\nAnd Your steadfast love,\nMay Your name be exalted\nHere on earth in heaven above.\nLai, lai, lai ……." }
        ]
    },
    {
        title: "The Dwelling Of God Is Among You Today",
        sections: [
            { name: "VERSE", lyrics: "And then I heard a loud voice say:\n“Behold the dwelling of God\nIs among you today!”\nAnd He shall wipe away your tears,\nThere’ll be no mourning,\nOr crying, or pain, or death anymore." },
            { name: "END", lyrics: "Hallelujah! Hallelujah!\nFor the Lord God Almighty, Omnipotent reigns!\nOur mighty God! Our risen Lord!\nAll the glory, and honor, and power\nAre Yours evermore." }
        ]
    },
    {
        title: "The Father Of Lights",
        sections: [
            { name: "VERSE", lyrics: "We remember before You, our Father,\nYour own Beloved Son\nWho as a light in the darkness\nIn faithfulness has run\nThe race You set before Him\nAnd to the cross has gone." },
            { name: "CHORUS", lyrics: "To the Father of lights [F1](echo)[/F1]\nTo the Father on high [F1](echo)[/F1]\nWe lift up His name, [F1](echo)[/F1]\nOur Lord, the Messiah." },
            { name: "CHORUS", lyrics: "Before the Ancient of days [F1](echo)[/F1]\nBefore the Judge of all things [F1](echo)[/F1]\nWe lift up the name [F1](echo)[/F1]\nOf Jesus, our King,\nOf our Savior and King." },
            { name: "VERSE", lyrics: "The pangs of death\nCould not hold our Redeemer\nYou raised Him from the grave\nAnd seated Him at Your right hand\nThat He might freely give\nThe promised Holy Spirit\nPoured out on us in love." },
            { name: "CHORUS", lyrics: "To the Father of lights [F1](echo)[/F1]\nTo the Father on high [F1](echo)[/F1]\nWe lift up His name, [F1](echo)[/F1]\nOur Lord, the Messiah." },
            { name: "CHORUS", lyrics: "Before the Ancient of days [F1](echo)[/F1]\nBefore the Judge of all things [F1](echo)[/F1]\nWe lift up the name [F1](echo)[/F1]\nOf Jesus, our King,\nOf our Savior and King." },
            { name: "VERSE", lyrics: "We come before You\nWith praise as Your people\nStanding boldly before Your throne.\nHis blood has saved us from judgment\nHis life is now our own.\nWith joy we long to behold Him\nWhen in glory He returns." },
            { name: "CHORUS", lyrics: "To the Father of lights [F1](echo)[/F1]\nTo the Father on high [F1](echo)[/F1]\nWe lift up His name, [F1](echo)[/F1]\nOur Lord, the Messiah." },
            { name: "END", lyrics: "Before the Ancient of days [F1](echo)[/F1]\nBefore the Judge of all things [F1](echo)[/F1]\nWe lift up the name [F1](echo)[/F1]\nOf Jesus, our King,\nOf our Savior and King." }
        ]
    },
    {
        title: "The Horse And Rider",
        sections: [
            { name: "VERSE", lyrics: "I will sing unto the Lord\nFor He has triumphed gloriously,\nThe horse and rider thrown into the sea." },
            { name: "VERSE", lyrics: "The Lord my God, my strength, my song,\nHas now become my victory!" },
            { name: "END", lyrics: "The Lord is God and I will praise Him,\nMy father’s God and I will exalt Him!" }
        ]
    },
    {
        title: "The House Of God",
        sections: [
            { name: "REFRAIN", lyrics: "Take us higher up, draw us deeper still\nFurther into Your heart, O Lord.\nMake us living light, set us on a hill\nShine forth through us, O radiant Son!" },
            { name: "VERSE", lyrics: "Make my heart Your throne, O Lord,\nA dwelling place for the light of God.\nJoin me to Your temple, Lord,\nThat all might see the light in me\nAnd lift their hearts\nTo Your house of glory." },
            { name: "REFRAIN", lyrics: "Take us higher up, draw us deeper still\nFurther into Your heart, O Lord.\nMake us living light, set us on a hill\nShine forth through us, O radiant Son!" },
            { name: "VERSE", lyrics: "Once we were no people, Lord,\nNow we are one in the house of God\nLiving stones now joined in Christ.\nFor we have seen Your temple brings\nThe hopeless heart to the hope of glory." },
            { name: "REFRAIN", lyrics: "Take us higher up, draw us deeper still\nFurther into Your heart, O Lord.\nMake us living light, set us on a hill\nShine forth through us, O radiant Son!" },
            { name: "VERSE", lyrics: "For we are a chosen race\nA shining light set up on a hill\nA holy nation, royal priests\nMay we proclaim Your wondrous name\nUntil the day when You come in glory." },
            { name: "END", lyrics: "Take us higher up, draw us deeper still\nFurther into Your heart, O Lord.\nMake us living light, set us on a hill\nShine forth through us, O radiant Son\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "The King Of Glory",
        sections: [
            { name: "REFRAIN", lyrics: "The King of glory comes, the nation rejoices.\nOpen the gates before Him, lift up your voices." },
            { name: "VERSE", lyrics: "Who is the King of glory;\nHow shall we call Him?\nHe is Emmanuel,\nThe promised of ages." },
            { name: "REFRAIN", lyrics: "The King of glory comes, the nation rejoices.\nOpen the gates before Him, lift up your voices." },
            { name: "VERSE", lyrics: "In all of Galilee, in city or village,\nHe goes among His people curing their illness." },
            { name: "REFRAIN", lyrics: "The King of glory comes, the nation rejoices.\nOpen the gates before Him, lift up your voices." },
            { name: "VERSE", lyrics: "Sing then of David’s Son,\nOur Savior and brother;\nIn all of Galilee was never another." },
            { name: "REFRAIN", lyrics: "The King of glory comes, the nation rejoices.\nOpen the gates before Him, lift up your voices." },
            { name: "VERSE", lyrics: "He gave His life for us, the pledge of salvation;\nAnd He will share with us His heavenly vision." },
            { name: "END", lyrics: "The King of glory comes, the nation rejoices.\nOpen the gates before Him, lift up your voices." }
        ]
    },
    {
        title: "The King Shall Come",
        sections: [
            { name: "VERSE", lyrics: "The King shall come\nWhen morning dawns\nAnd light triumphant breaks,\nWhen beauty gilds the eastern hills\nAnd life to joy awakes." },
            { name: "REFRAIN", lyrics: "Come, O come, King Jesus\nCome, O come, Emmanuel!\nCome quickly, Lord,\nThy church doth wait.\nO come, Emmanuel!\nCome, Emmanuel!" },
            { name: "VERSE", lyrics: "Not as of old a little child\nTo bear and fight and die,\nBut crowned with glory as the sun\nThat lights the morning sky." },
            { name: "REFRAIN", lyrics: "Come, O come, King Jesus\nCome, O come, Emmanuel!\nCome quickly, Lord,\nThy church doth wait.\nO come, Emmanuel!\nCome, Emmanuel!" },
            { name: "VERSE", lyrics: "The King shall come\nWhen morning dawns\nAnd light and beauty brings.\nHail, Christ the Lord, Thy people pray\nCome quickly, King of kings!" },
            { name: "REFRAIN", lyrics: "Come, O come, King Jesus\nCome, O come, Emmanuel!\nCome quickly, Lord,\nThy church doth wait.\nO come, Emmanuel!" },
            { name: "END", lyrics: "Come, Emmanuel! [F1](3x)[/F1]" }
        ]
    },
    {
        title: "The King The Lord Reigns",
        sections: [
            { name: "VERSE", lyrics: "The King, the Lord, reigns!\nHis Christ, the Morning Star, reigns!\nSov’reign, holy, full of love\nHallelujah! He reigns!" },
            { name: "END", lyrics: "So crown Him Lord of lords within us.\nCrown Him Lord of lords among us.\nCrown the King, the Savior\nCrown Him Lord.\nYes, crown Him Lord of lords.\nO, crown Him Lord of lords!" }
        ]
    },
    {
        title: "The Light Of Christ",
        sections: [
            { name: "REFRAIN", lyrics: "The light of Christ\nHas come into the world.\nThe light of Christ\nHas come into the world.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "All men must be born again\nTo see the Kingdom of God.\nThe water and the Spirit\nBring new life in God’s love." },
            { name: "REFRAIN", lyrics: "The light of Christ [F1](echo)[/F1]\nHas come into the world. [F1](echo)[/F1]\nThe light of Christ [F1](echo)[/F1]\nHas come into the world. [F1](echo)[/F1]" },
            { name: "VERSE", lyrics: "God gave up His only Son\nOut of love for the world\nSo that all men who believe in Him\nWill live forever." },
            { name: "REFRAIN", lyrics: "The light of Christ [F1](echo)[/F1]\nHas come into the world. [F1](echo)[/F1]\nThe light of Christ [F1](echo)[/F1]\nHas come into the world. [F1](echo)[/F1]" },
            { name: "VERSE", lyrics: "The light of God has come to us\nSo that we might have salvation.\nFrom the darkness of our sins\nWe walk into glory with Christ Jesus." },
            { name: "REFRAIN", lyrics: "The light of Christ [F1](echo)[/F1]\nHas come into the world. [F1](echo)[/F1]\nThe light of Christ [F1](echo)[/F1]\nHas come into the world. [F1](echo)[/F1]" }
        ]
    },
    {
        title: "The Light Shines In The Darkness",
        sections: [
            { name: "VERSE", lyrics: "In the beginning God made the heavens and earth\nAnd darkness hung over the depths\nThen God said let there be light\nAnd there was and it was good" },
            { name: "CHORUS", lyrics: "So let light shine out of darkness\nFor Christ is the light of the world\nYes the light shines in the darkness\nAnd the darkness has not overcome" },
            { name: "VERSE", lyrics: "On the first day Jesus arose from the dead\nAnd death was led captive away\nMorning broke into the tomb shadows fled\nNight was no more" },
            { name: "CHORUS", lyrics: "So let light shine out of darkness\nFor Christ is the light of the world\nYes the light shines in the darkness\nAnd the darkness has not overcome" },
            { name: "VERSE", lyrics: "On the last day, when earth and heaven have passed\nThe Lord shall create them anew\nWe shall arise from the dead\nAnd the Lamb shall be our light" },
            { name: "END", lyrics: "So let light shine out of darkness\nFor Christ is the light of the world\nYes the light shines in the darkness\nAnd the darkness has not overcome\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "The Lord Is My Light",
        sections: [
            { name: "VERSE", lyrics: "The Lord is my light and my salvation.\nWhom shall I fear, whom shall I fear?\n[F1](2x)[/F1]\nThe Lord is my strength,\nThe strength of my life,\nOf whom, then, shall I be afraid?" }
        ]
    },
    {
        title: "The Lord Of Hosts Is With Us",
        sections: [
            { name: "REFRAIN", lyrics: "For the Lord of hosts is with us\nOur refuge is our God alone.\nPour out your hearts before your King\nFind grace and mercy\nAt His mighty throne." },
            { name: "VERSE", lyrics: "God is our refuge and strength\nOur constant help in trouble\nSo we shall not fear\nThough the earth itself should change.\nWith God in our midst\nWe shall not be moved\nForever shall He reign." },
            { name: "REFRAIN", lyrics: "For the Lord of hosts is with us\nOur refuge is our God alone.\nPour out your hearts before your King\nFind grace and mercy\nAt His mighty throne." },
            { name: "VERSE", lyrics: "Our souls find their rest in the Lord\nFrom Him comes our salvation.\nAll our honor and\nOur deliv’rance rest on God.\nOur shield and defender\nBulwark and strength\nIn Him shall we stand firm." },
            { name: "END", lyrics: "For the Lord of hosts is with us\nOur refuge is our God alone.\nPour out your hearts before your King\nFind grace and mercy\nAt His mighty throne." }
        ]
    },
    {
        title: "The Lord Reigns",
        sections: [
            { name: "REFRAIN", lyrics: "The Lord reigns! [F1](echo)[/F1]\nThe Lord reigns! [F1](echo)[/F1]\nThe Lord (The Lord) reigns on earth!" },
            { name: "VERSE", lyrics: "Clouds and thick darkness surround Him\nHe reigns upon His throne\nFire goes before Him and burns up\nHis foes ‘round about!" },
            { name: "REFRAIN", lyrics: "The Lord reigns! [F1](echo)[/F1]\nThe Lord reigns! [F1](echo)[/F1]\nThe Lord (The Lord) reigns on earth!" },
            { name: "VERSE", lyrics: "His lightnings lighten the world,\nThe earth sees and trembles!\nMountains melt like wax before the Lord\nThe Lord of all the earth!" },
            { name: "REFRAIN", lyrics: "The Lord reigns! [F1](echo)[/F1]\nThe Lord reigns! [F1](echo)[/F1]\nThe Lord (The Lord) reigns on earth!" },
            { name: "VERSE", lyrics: "The Lord loves those who hate evil,\nHe will come to their aid.\nLight will dawn for the righteous\nAnd joy for the upright in heart." },
            { name: "REFRAIN", lyrics: "The Lord reigns! [F1](echo)[/F1]\nThe Lord reigns! [F1](echo)[/F1]\nThe Lord (The Lord) reigns on earth!" },
            { name: "VERSE", lyrics: "Zion hears and is glad\nBecause of Thy judgments, O God\nFor You are most high o’er all the earth\nExalted above all gods!" },
            { name: "REFRAIN", lyrics: "The Lord reigns! [F1](echo)[/F1]\nThe Lord reigns! [F1](echo)[/F1]\nThe Lord (The Lord) reigns on earth!" },
            { name: "VERSE", lyrics: "The heavens themselves show His glory\nAll peoples of the earth can see\nThat He is Creator\nAnd there is no God such as He!" },
            { name: "END", lyrics: "The Lord reigns! [F1](echo)[/F1]\nThe Lord reigns! [F1](echo)[/F1]\nThe Lord (The Lord) reigns on earth!\n[F1](2x)[/F1]\nThe Lord (The Lord reigns) [F1](2x)[/F1]\nThe Lord\nThe Lord reigns on earth!" }
        ]
    },
    {
        title: "The Lord Reigns Let The Earth",
        sections: [
            { name: "REFRAIN", lyrics: "The Lord reigns! [F1](3x)[/F1]\nLet the earth rejoice [F1](3x)[/F1]\nLet the people be glad\nThat our God reigns!" },
            { name: "VERSE", lyrics: "A fire goes before Him\nAnd burns up all His enemies.\nThe hills melt like wax\nAt the presence of the Lord\nAt the presence of the Lord!" },
            { name: "REFRAIN", lyrics: "The Lord reigns! [F1](3x)[/F1]\nLet the earth rejoice [F1](3x)[/F1]\nLet the people be glad\nThat our God reigns!" },
            { name: "VERSE", lyrics: "The heavens declare His righteousness\nThe people see His glory\nFor You, O Lord, are exalted\nOver all the earth\nOver all the earth!" },
            { name: "END", lyrics: "The Lord reigns! [F1](3x)[/F1]\nLet the earth rejoice [F1](3x)[/F1]\nLet the people be glad\nThat our God reigns!" }
        ]
    },
    {
        title: "The Magnificat",
        sections: [
            { name: "REFRAIN", lyrics: "My soul [F1](my soul)[/F1] magnifies the Lord\nAnd my spirit [F1](my spirit)[/F1]\nRejoices [F1](rejoices)[/F1] in God my Savior!" },
            { name: "VERSE", lyrics: "For He who is mighty\nHas done great things\nAnd holy is His name\nFrom age to age His mercy is\nOn those who fear Him\nHe fills the hungry with good things\nHe helps those serve Him." },
            { name: "REFRAIN", lyrics: "My soul [F1](my soul)[/F1] magnifies the Lord\nAnd my spirit [F1](my spirit)[/F1]\nRejoices [F1](rejoices)[/F1] in God my Savior!" },
            { name: "VERSE", lyrics: "He scatters the proud\nAnd He lifts up the lowly\nHe has shown strength with His arm\nFor the Word became flesh and\nHe dwelt among us\nNo one has seen the Father\nBut the Son has made Him known." },
            { name: "REFRAIN", lyrics: "My soul [F1](my soul)[/F1] magnifies the Lord\nAnd my spirit [F1](my spirit)[/F1]\nRejoices [F1](rejoices)[/F1] in God my Savior!" },
            { name: "VERSE", lyrics: "The words of the Lord are Spirit and life\nBlessed are the people\nWho hear them and keep them.\nWhen God speaks His word\nLet it be fulfilled in me.\nFor with the Lord, nothing is impossible." },
            { name: "REFRAIN", lyrics: "My soul [F1](my soul)[/F1] magnifies the Lord\nAnd my spirit [F1](my spirit)[/F1]\nRejoices [F1](rejoices)[/F1] in God my Savior!" },
            { name: "END", lyrics: "My spirit [F1](my spirit)[/F1] rejoices [F1](rejoices)[/F1]\n in Jesus, my Savior!" }
        ]
    },
    {
        title: "The Mission",
        sections: [
            { name: "VERSE", lyrics: "There’s a call going out\nAcross the land in every nation\nA call to all who swear allegiance\nTo the cross of Christ\nA call to true humility\nTo live our lives responsibly\nTo deepen our devotion\nTo the cross at any price." },
            { name: "VERSE", lyrics: "Let us then be sober\nMoving only in the Spirit.\nAs aliens and strangers\nIn a hostile foreign land.\nThe message we’re proclaiming\nIs repentance and forgiveness\nThe offer of salvation\nTo the dying race of man." },
            { name: "CHORUS", lyrics: "To love the Lord our God\nIs the heartbeat of our mission\nThe spring from which\nOur service overflows.\nAcross the street, all around the world\nThe mission’s still the same:\nProclaim and live the truth in Jesus’ name!" },
            { name: "VERSE", lyrics: "As a candle is consumed\nBy the passion of the flame\nSpilling light unsparingly\nThroughout a darkened room\nLet us burn to know Him deeper\nThat our service, flaming bright,\nWill radiate His passion\nAnd blaze with holy light." },
            { name: "END", lyrics: "To love the Lord our God\nIs the heartbeat of our mission\nThe spring from which\nOur service overflows.\nAcross the street, all around the world\nThe mission’s still the same:\nProclaim and live the truth in Jesus’ name!" }
        ]
    },
    {
        title: "The People Of God",
        sections: [
            { name: "REFRAIN", lyrics: "The people of God shines forth like lights\nThe sword of the Spirit is in their hands\nThat You, O Lord, might be glorified\nMay Your Kingdom come!\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Come together, O people of God\nLet all men see in our unity\nThat we live for Jesus the King!" },
            { name: "REFRAIN", lyrics: "The people of God shines forth like lights\nThe sword of the Spirit is in their hands\nThat You, O Lord, might be glorified\nMay Your Kingdom come!" },
            { name: "VERSE", lyrics: "Let our hearts not tire and fail\nBurning always with the zeal\nFor the service of Your name." },
            { name: "REFRAIN", lyrics: "The people of God shines forth like lights\nThe sword of the Spirit is in their hands\nThat You, O Lord, might be glorified\nMay Your Kingdom come!" },
            { name: "VERSE", lyrics: "Let the Lord God conquer our fear\nSo that we might be free\nTo lay our lives before His throne." },
            { name: "END", lyrics: "The people of God shines forth like lights\nThe sword of the Spirit is in their hands\nThat You, O Lord, might be glorified\nMay Your Kingdom come!\n[F1](2x)[/F1]\nMay Your Kingdom come! [F1](2x)[/F1]" }
        ]
    },
    {
        title: "The River Flows",
        sections: [
            { name: "VERSE", lyrics: "From the throne of God\nAnd from the Lamb the river flows.\nLife redeeming, ever healing,\nAge to age it goes." },
            { name: "VERSE", lyrics: "No more sun, the Holy One\nOur light that ever shines.\nCrystal clear, the river here\nWill swell our hearts to join the cry!" },
            { name: "REFRAIN", lyrics: "Awake, O sleeper, rise to life\nAnd Christ will give you light.\nLift your head, behold the river!\nHe mounts His throne\nTo shouts of praise\nBe opened, heaven’s gates!\nEnter in, O King of glory!" },
            { name: "VERSE", lyrics: "“Come!” the Spirit calls\nAnd with the bride, the Spirit cries:\n“Souls that thirst can drink\nTheir fill of water without price.”" },
            { name: "VERSE", lyrics: "Blest are those who wash their robes\nTo gain the tree of life\nFace to face with endless grace\nLift up your hearts to hear the cry." },
            { name: "END", lyrics: "Awake, O sleeper, rise to life\nAnd Christ will give you light.\nLift your head, behold the river!\nHe mounts His throne\nTo shouts of praise\nBe opened, heaven’s gates!\nEnter in, O King of glory!\n[F1](2x)[/F1]\n\nO King of glory!" }
        ]
    },
    {
        title: "The Servant Song",
        sections: [
            { name: "VERSE", lyrics: "I now declare my allegiance\nTo You, O Lord.\nMy life and my will\nAt Your service, my God.\nWhere You go I will go,\nAnd You lead the way.\nMy God, I will live and die for You." },
            { name: "VERSE", lyrics: "Should it be\nThe last breath I take, O Lord\nI will use it to sing\nA song of praise to You.\nShould it be my last drop of blood,\nI will shed it for You,\nMy God, I will live and die for You." },
            { name: "VERSE", lyrics: "Show me where to live,\nO Lord, and I’ll live.\nShow me where to die,\nO Lord, and I’ll die.\nShow me what to do\nAnd I’ll do it by Your side.\nMy God, I will live and die for You." },
            { name: "END", lyrics: "At the sound of Your voice,\nMaster, I will obey.\nI will watch every motion\nYou make with open eyes.\nMay my ears be clear\nTo hear Your command.\nMy God, I will live and die for You.\nFor You are my God!" }
        ]
    },
    {
        title: "The Song Of Moses",
        sections: [
            { name: "REFRAIN", lyrics: "The Lord is my strength and song\nAnd He is become my salvation.\nHe is my God and\nI will prepare Him a habitation\nMy father’s God and I will exalt Him." },
            { name: "VERSE", lyrics: "He hath triumphed gloriously,\nI will sing unto the Lord.\nHe hath triumphed gloriously,\nThe horse and his rider\nHath He thrown in the sea." },
            { name: "REFRAIN", lyrics: "The Lord is my strength and song\nAnd He is become my salvation.\nHe is my God and\nI will prepare Him a habitation\nMy father’s God and I will exalt Him." },
            { name: "VERSE", lyrics: "The Lord is a man of war,\nThe Lord is His name!\nPharaoh’s chariots and his host\nHath He cast, hath He cast into the sea!" },
            { name: "REFRAIN", lyrics: "The Lord is my strength and song\nAnd He is become my salvation.\nHe is my God and\nI will prepare Him a habitation\nMy father’s God and I will exalt Him." },
            { name: "VERSE", lyrics: "Thy right hand, O Lord,\nIs become glorious in pow’r!\nThy right hand, O Lord,\nHath cast in pieces the enemy!" },
            { name: "REFRAIN", lyrics: "The Lord is my strength and song\nAnd He is become my salvation.\nHe is my God and\nI will prepare Him a habitation\nMy father’s God and I will exalt Him." },
            { name: "VERSE", lyrics: "Who is like unto Thee,\nO Lord, among the gods?\nWho is like Thee, glorious in holiness,\nFearful in praises, doing wonders?" },
            { name: "END", lyrics: "The Lord is my strength and song\nAnd He is become my salvation.\nHe is my God and\nI will prepare Him a habitation\nMy father’s God and I will exalt Him.\nI will exalt Him!" }
        ]
    },
    {
        title: "The Spirit And The Bride",
        sections: [
            { name: "REFRAIN", lyrics: "The Spirit and the bride say, “Come.”\nLet all who hear say, “Come.”\nLet him who is thirsty,\nCome take the water of life\nWithout price." },
            { name: "VERSE", lyrics: "Behold, I am coming soon\nBringing My reward.\nI am the Alpha and the Omega,\nThe first and the last,\nThe beginning and the end." },
            { name: "REFRAIN", lyrics: "The Spirit and the bride say, “Come.”\nLet all who hear say, “Come.”\nLet him who is thirsty,\nCome take the water of life\nWithout price." },
            { name: "VERSE", lyrics: "Blessed are all who wash their robes\nTo eat from the tree of life\nAnd enter the city by the gates.\nI am the offspring of David,\nThe bright and morning star." },
            { name: "REFRAIN", lyrics: "The Spirit and the bride say, “Come.”\nLet all who hear say, “Come.”\nLet him who is thirsty,\nCome take the water of life\nWithout price." },
            { name: "VERSE", lyrics: "If any man thirst, let him come to Me,\nAnd let him drink\nAnd out of his heart there shall flow,\nStreams of living water.\nThis is the Spirit, just ask and receive." },
            { name: "END", lyrics: "The Spirit and the bride say, “Come.”\nLet all who hear say, “Come.”\nLet him who is thirsty,\nCome take the water of life\nWithout price.\nEven so, come Lord Jesus!\nCome, Lord Jesus!" }
        ]
    },
    {
        title: "The Steadfast Love Of The Lord",
        sections: [
            { name: "VERSE", lyrics: "The steadfast love of the Lord never ceases\nHis mercies never come to an end.\nThey are new every morning\nNew every morning.\nGreat is thy faithfulness, O Lord!\nGreat is thy faithfulness!" }
        ]
    },
    {
        title: "The Sweetest Name Of All",
        sections: [
            { name: "VERSE", lyrics: "Jesus, You’re the sweetest name of all.\nJesus, You always hear me when I call.\nO Jesus, You pick me up each time I fall.\nYou’re the sweetest, the sweetest name of all." },
            { name: "VERSE", lyrics: "O Jesus, how I love to praise Your name.\nJesus, You’re still the first, the last, the same.\nO Jesus, You died and took away my shame,\nYou’re the sweetest, the sweetest name of all." },
            { name: "END", lyrics: "Jesus, You’re the soon and coming King.\nJesus, we need the love that You can bring.\nO Jesus, we lift our voices up and sing:\nYou’re the sweetest, the sweetest name of all." }
        ]
    },
    {
        title: "The Victory Hymn",
        sections: [
            { name: "VERSE", lyrics: "Hail, Jesus, You’re my King.\nYour life frees me to sing.\nI’ll praise You all my days.\nYou’re perfect in all Your ways." },
            { name: "VERSE", lyrics: "Hail, Jesus, You’re my Lord.\nI will proclaim Your word.\nI want to see Your kingdom come.\nNot my will but Yours be done." },
            { name: "VERSE", lyrics: "Glory, glory to the Lamb!\nYou take me into the land.\nWe will conquer in Your name\nAnd proclaim that Jesus reigns." },
            { name: "END", lyrics: "Hail, hail, Lion of Judah!\nHow powerful You are!\nHail, hail, Lion of Judah!\nHow wonderful You are! [F1](2x)[/F1]" }
        ]
    },
    {
        title: "The Victory Song",
        sections: [
            { name: "VERSE", lyrics: "We are fighting for Jerusalem\nThe city of our King\nAnd His kingdom will be founded\nOn the justice He shall bring\nAnd with the light of truth to guide us\nThis victory song we sing:" },
            { name: "REFRAIN", lyrics: "[F1](Women)[/F1]\nSalvation and glory and power\nBelong to our God, to our God!\n[F1](Men)[/F1]\nBlessing and glory and all power\nAnd all honor and all wisdom\nTo our God, to our God!" },
            { name: "VERSE", lyrics: "With the love of God aflame in us\nWe brandish a two-edged sword\nTo bring our foes to ruin\nAs we call upon the Lord\nAnd while the wicked come against us\nWe proclaim before the horde:" },
            { name: "REFRAIN", lyrics: "[F1](Women)[/F1]\nSalvation and glory and power\nBelong to our God, to our God!\n[F1](Men)[/F1]\nBlessing and glory and all power\nAnd all honor and all wisdom\nTo our God, to our God!" },
            { name: "VERSE", lyrics: "As Christ our Lord commissioned us\nWe carry His word to men\nAs a light to those in darkness\nThat to Christ all knees shall bend\nAnd to every tribe and nation\nWe declare this truth again:" },
            { name: "REFRAIN", lyrics: "[F1](Women)[/F1]\nSalvation and glory and power\nBelong to our God, to our God!\n[F1](Men)[/F1]\nBlessing and glory and all power\nAnd all honor and all wisdom\nTo our God, to our God!" },
            { name: "VERSE", lyrics: "Though a host encamp against us\nOn Christ we have set our face\nBy Him we shall see triumph\nIn the power of His grace\nAnd as the saints of God surround us\nWe shall shout out in that place:" },
            { name: "END", lyrics: "[F1](Women)[/F1]\nSalvation and glory and power\nBelong to our God, to our God!\n[F1](Men)[/F1]\nBlessing and glory and all power\nAnd all honor and all wisdom\nTo our God, to our God!" }
        ]
    },
    {
        title: "There Is None Like You",
        sections: [
            { name: "VERSE", lyrics: "There is none like You.\nNo one else can touch my heart\nLike You do.\nI can search for all eternity, Lord,\nAnd find there is none like You." },
            { name: "END", lyrics: "Your mercy flows like a river wide\nAnd healing comes from Your hand.\nSuffering children are safe in Your arms\nThere is none like You." }
        ]
    },
    {
        title: "There Is One Light",
        sections: [
            { name: "VERSE", lyrics: "There is one light no darkness can conquer,\nThat shines from the beauty\nNo eye can contain\nA spoken word that sounds forth creation\nWhich time will not silence,\nAnd all things sustains." },
            { name: "REFRAIN", lyrics: "Behold such love. [F1](One Lord of love.)[/F1]\nGod’s holy love. [F1](Our Lord of love.)[/F1]\nYou are holy, You are worthy,\nSent from the Father, Spirit filled one\nWithin the three of love, the holy Son." },
            { name: "VERSE", lyrics: "Of royal blood, the King of all kingship,\nOf holiest lineage as high priest He came.\nThe sacrifice, both temple and off’ring,\nGreat shepherd of mercy,\nThe Lamb who was slain." },
            { name: "REFRAIN", lyrics: "Behold such love. [F1](One Lord of love.)[/F1]\nGod’s holy love. [F1](Our Lord of love.)[/F1]\nYou are holy, You are worthy,\nSent from the Father, Spirit filled one\nWithin the three of love, the holy Son." },
            { name: "VERSE", lyrics: "Though in God’s form,\nChrist humbly descended, became as a servant\nThrough death He was raised.\nAnd therefore, God has highly exalted\nThe name of Christ Jesus above every name." },
            { name: "END", lyrics: "Behold such love. [F1](One Lord of love.)[/F1]\nGod’s holy love. [F1](Our Lord of love.)[/F1]\nYou are holy, You are worthy,\nSent from the Father, Spirit filled one\nWithin the three of love, the holy Son.\nYou are holy, You are worthy,\nSent from the Father, Spirit filled one\nWithin the three of love, the holy Son." }
        ]
    },
    {
        title: "There Is Power",
        sections: [
            { name: "VERSE", lyrics: "There is power in the name\nin the name above all names\nIn the Son of God who came\nJesus Christ the name that saves" },
            { name: "VERSE", lyrics: "There is power in the word\npiercing hearts with news unheard\nTurning sinners from dead works\nraising dead men from the earth" },
            { name: "CHORUS", lyrics: "There is power in the Spirit of our God\nin the name\nin the blood\nThere is power in the Spirit of our God\nto proclaim\nto heal\nto conquer and to live" },
            { name: "VERSE", lyrics: "There is power in the cross\nin the blood he shed for us\nTo redeem our every loss\nto present us pure and just" },
            { name: "CHORUS", lyrics: "There is power in the Spirit of our God\nin the name in the blood\nThere is power in the Spirit of our God\nto proclaim to heal to conquer and to live" },
            { name: "BRIDGE", lyrics: "And we shall be filled with power\nwhen the Spirit comes on us\nAnd we will lift Jesus higher\nwhen the Spirit comes on us\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "There is power in the Spirit of our God\nin the name in the blood\nThere is power in the Spirit of our God\nto proclaim\nto heal to\nconquer and to live\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Therefore The Redeemed",
        sections: [
            { name: "VERSE", lyrics: "Therefore the redeemed\nOf the Lord shall return,\nAnd come with singing unto Zion\nAnd everlasting joy shall be upon their head.\nThey shall obtain gladness and joy\nAnd sorrow and mourning shall flee away." }
        ]
    },
    {
        title: "Thine O Lord",
        sections: [
            { name: "REFRAIN", lyrics: "Thine, O Lord, it is all Thine.\nThe greatness, the pow’r and the glory\nThe victory, the majesty!\nFor all that is, in heav’n and earth\nIt all is Thine, it all is Thine!" },
            { name: "VERSE", lyrics: "Thine is the kingdom, O Lord.\nThou art exalted above all.\nRiches and honor come from Thee\nAnd over all Thou rulest." },
            { name: "REFRAIN", lyrics: "Thine, O Lord, it is all Thine.\nThe greatness, the pow’r and the glory\nThe victory, the majesty!\nFor all that is, in heav’n and earth\nIt all is Thine, it all is Thine!" },
            { name: "VERSE", lyrics: "Power and might are in Thy hand.\nThou givest strength to all.\nSo now we thank Thee, our God,\nAnd praise Thy glorious name!" },
            { name: "END", lyrics: "Thine, O Lord, it is all Thine.\nThe greatness, the pow’r and the glory\nThe victory, the majesty!\nFor all that is, in heav’n and earth\nIt all is Thine, it all is Thine!" }
        ]
    },
    {
        title: "Thy Mercy Free",
        sections: [
            { name: "VERSE", lyrics: "Out of the depths we cry to Thee\nLord, hear us, we implore Thee.\nBend down Thy gracious ear to us\nLet our pray’r come before Thee.\nOn our misdeeds in mercy look\nO deign to blot them from Thy book\nAnd let us come before Thee." },
            { name: "VERSE", lyrics: "Thy sov’reign grace and boundless love\nShow Thee, O Lord, forgiving.\nOur purest thoughts and deeds but prove\nSin in our heart is living.\nNone guiltless in Thy sight appear\nAll who approach Thy throne must fear\nAnd humbly trust Thy mercy." },
            { name: "VERSE", lyrics: "Thou canst be merciful while just\nThis is our hope’s foundation.\nIn Thy redeeming grace we trust\nO grant us Thy salvation.\nUpheld by Thee we stand secure\nThy word is firm, Thy promise sure\nAnd we rely upon Thee." },
            { name: "END", lyrics: "Like those who watch for midnight’s hour\nTo hail the dawning morrow,\nWe wait for Thee, we trust Thy pow’r\nUnmoved by doubt or sorrow.\nSo let Thy people hope in Thee\nAnd they shall find Thy mercy free\nAnd Thy redemption plenteous." }
        ]
    },
    {
        title: "Till You See That Your Home Is In Heaven",
        sections: [
            { name: "VERSE", lyrics: "I will touch your eyes\nDo not lose heart.\nI will touch you again\nTill you see the angels and saints\nSurrounding the throne" },
            { name: "VERSE", lyrics: "Till you see the brightness\nAnd majesty of the throne\nWhere your God reigns forever and ever\nYou’ll see them more clearly" },
            { name: "VERSE", lyrics: "Thousands and thousands\nSurrounding the throne\nAnd they’re shouting by night\nAnd by day to your God:" },
            { name: "END", lyrics: "Holy, [F1](holy)[/F1] holy [F1](holy)[/F1]\nis the Lord God Almighty!\nHoly, [F1](holy)[/F1] holy [F1](holy)[/F1]\nis the Lord God Almighty!\nAnd I’ll touch you again\nTill you see that your home is in heav’n.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "To Be Like Jesus",
        sections: [
            { name: "REFRAIN", lyrics: "Father, make me to be like Jesus\nWholly conformed to Your will\nSeeking only to bring You glory\nYour perfect plan to fulfill." },
            { name: "VERSE", lyrics: "He did not count equality with You\nA thing to be grasped for His own\nBut He chose to empty Himself\nTo rely on You alone." },
            { name: "REFRAIN", lyrics: "Father, make me to be like Jesus\nWholly conformed to Your will\nSeeking only to bring You glory\nYour perfect plan to fulfill." },
            { name: "VERSE", lyrics: "He freely took the form of a slave\nBeing born in the likeness of men\nAnd being found in human form\nHumbly His will did bend." },
            { name: "REFRAIN", lyrics: "Father, make me to be like Jesus\nWholly conformed to Your will\nSeeking only to bring You glory\nYour perfect plan to fulfill." },
            { name: "VERSE", lyrics: "He chose to be obedient\nUnto death on a tree\nYou asked Him to lay down His life\nThat I might be set free." },
            { name: "REFRAIN", lyrics: "Father, make me to be like Jesus\nWholly conformed to Your will\nSeeking only to bring You glory\nYour perfect plan to fulfill." },
            { name: "VERSE", lyrics: "Now You have exalted Him\nBestowed on Him the Name\nBefore whom every knee will bend\nAnd every tongue proclaim." },
            { name: "END", lyrics: "Father, make me to be like Jesus\nWholly conformed to Your will\nSeeking only to bring You glory\nYour perfect plan to fulfill." }
        ]
    },
    {
        title: "To Be Like Thee",
        sections: [
            { name: "REFRAIN", lyrics: "To see Thee more clearly\nTo love Thee more dearly\nTo follow Thee more closely\nAnd to serve Thee faithfully." },
            { name: "VERSE", lyrics: "What love could this be?\nAn offering of life for me.\nYou shared my death and set me free\nAllowed me to have new life in Thee\nNow all I want is" },
            { name: "REFRAIN", lyrics: "To see Thee more clearly\nTo love Thee more dearly\nTo follow Thee more closely\nAnd to serve Thee faithfully." },
            { name: "VERSE", lyrics: "My desire is to be like Thee\nLet me not have dominion over me.\nGrant me the grace to be\nAcceptable and holy as I come to Thee.\nNow all I want is" },
            { name: "END", lyrics: "To see Thee more clearly\nTo love Thee more dearly\nTo follow Thee more closely\nAnd to serve Thee faithfully." }
        ]
    },
    {
        title: "To Him Who Sits On The Throne",
        sections: [
            { name: "VERSE", lyrics: "To Him who sits on the throne,\nAnd unto the Lamb.\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "Be blessing, and honor, and glory\nAnd power forever!\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "To Love You And To Make You Loved",
        sections: [
            { name: "REFRAIN", lyrics: "To know You, O Lord,\nAnd to know Your love,\nTo love You and to make You loved!\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Servants of the Lord\nOurs the upward call:\nTo lay down our lives\nAnd to give our all." },
            { name: "REFRAIN", lyrics: "To know You, O Lord,\nAnd to know Your love,\nTo love You and to make You loved!" },
            { name: "VERSE", lyrics: "For to live is Christ\nAnd to die is gain\nBoth in death and life\nOurs a single aim!" },
            { name: "REFRAIN", lyrics: "To know You, O Lord,\nAnd to know Your love,\nTo love You and to make You loved!" },
            { name: "VERSE", lyrics: "Riches, honor, fame –\nGladly we despise\nThat we may attain\nThe pearl of great price." },
            { name: "REFRAIN", lyrics: "To know You, O Lord,\nAnd to know Your love,\nTo love You and to make You loved!" },
            { name: "VERSE", lyrics: "Nothing in this world\nShall possess our hearts.\nYou alone, O Lord,\nAre the better part!" },
            { name: "END", lyrics: "To know You, O Lord,\nAnd to know Your love,\nTo love You and to make You loved!\n[F1](2x)[/F1]\n\nTo love You and to make You loved! [F1](2x)[/F1]" }
        ]
    },
    {
        title: "To The King Of Ages",
        sections: [
            { name: "REFRAIN", lyrics: "To the King of ages,\nImmortal and invisible,\nThe only God!\n[F1](2x)[/F1]\n\nBe honor and glory\nForever and ever!\n[F1](2x)[/F1]\nAmen!" },
            { name: "END", lyrics: "To the King of ages,\nImmortal and invisible,\nThe only God!\n[F1](2x)[/F1]\n\nBe honor and glory\nForever and ever!\nBe honor and glory\nForever and ever! Amen!\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "To The Lamb",
        sections: [
            { name: "VERSE", lyrics: "He is worthy, He is worthy,\nVict’ry to the Lamb who was slain.\nFor His blood has won salvation\nFor every race, kingdom and tribe." },
            { name: "REFRAIN", lyrics: "To the Lamb seated on the throne\nBe praise, honor, glory and might.\nHe who was, He who is,\nHe who shall always be\nHis name be exalted forever. [F1](3x)[/F1]" },
            { name: "VERSE", lyrics: "He has formed a kingdom on earth\nA holy priesthood that serves the Lord.\nGod’s people will rule the nations,\nThe reign of Christ will last forever." },
            { name: "END", lyrics: "To the Lamb seated on the throne\nBe praise, honor, glory and might.\nHe who was, He who is,\nHe who shall always be\nHis name be exalted forever. [F1](3x)[/F1]\nHis name be exalted forever, Amen." }
        ]
    },
    {
        title: "To You Our King We Give Glory",
        sections: [
            { name: "REFRAIN", lyrics: "To You, our King, we give glory\nFor what we preach is not ourselves\nBut Jesus Christ as our Lord\nWith ourselves as your servants." },
            { name: "VERSE", lyrics: "You are the Lord\nGreat is Your name in heaven and earth\nAnd here I am to worship and bow down\nTo the source of all I have." },
            { name: "REFRAIN", lyrics: "To You, our King, we give glory\nFor what we preach is not ourselves\nBut Jesus Christ as our Lord\nWith ourselves as your servants." },
            { name: "VERSE", lyrics: "Your love I will bring\nAs long as I live, to the ends of the earth\nThough there are trials, I will press on\nTill I see You face to face." },
            { name: "END", lyrics: "To You, our King, we give glory\nFor what we preach is not ourselves\nBut Jesus Christ as our Lord\nWith ourselves as your servants." }
        ]
    },
    {
        title: "To Whom Shall We Go",
        sections: [
            { name: "VERSE", lyrics: "When the battle lines are drawn\nAnd there's war in our land\nAnd our King, the Christ, asks for whom you will fight\nWill you joyfully reply?" },
            { name: "CHORUS", lyrics: "To whom else shall we go?\nWho else would we follow?\nWe have come to know that you are the Christ\nTo whom else shall we go?" },
            { name: "VERSE", lyrics: "When the victory is well in hand\nAnd the King takes his throne\nWill he say to us, \"Will you stay with me,\nCome and live within my home?\"" },
            { name: "CHORUS", lyrics: "To whom else shall we go?\nWho else would we follow?\nWe have come to know and love you O Lord.\nTo whom else shall we go?" },
            { name: "BRIDGE", lyrics: "Your words are Spirit and life!\n[F1](3x)[/F1]" },
            { name: "END", lyrics: "To whom else shall we go? Who else would we follow?\nWe have come to know that you are the Christ\nTo whom else shall we go? Who else would we follow?\nWe have come to know and love you O Lord.\nTo whom else shall we go?" }
        ]
    },
    {
        title: "Trading My Sorrows",
        sections: [
            { name: "VERSE", lyrics: "I’m trading my sorrow\nI’m trading my shame\nI’m laying them down\nFor the joy of the Lord." },
            { name: "VERSE", lyrics: "I’m trading my sickness\nI’m trading my pain\nI’m laying them down\nFor the joy of the Lord." },
            { name: "CHORUS", lyrics: "And we say:\nYes, Lord, yes, Lord, yes, yes, Lord. [F1](3x)[/F1]\nAmen!" },
            { name: "BRIDGE", lyrics: "I’m pressed but not crushed\nPersecuted, not abandoned\nStruck down but not destroyed\nI’m blessed beyond the curse\nFor His promise will endure\nAnd His joy’s gonna be my strength." },
            { name: "BRIDGE", lyrics: "Though the sorrow may last for the night\nJoy comes with the morning." },
            { name: "END", lyrics: "And we say:\nYes, Lord, yes, Lord, yes, yes, Lord. [F1](3x)[/F1]\nAmen!" }
        ]
    },
    {
        title: "Trees Of The Field",
        sections: [
            { name: "VERSE", lyrics: "You shall go out with joy\nAnd be led forth with peace.\nThe mountains and the hills\nWill break forth before you.\nThere’ll be shouts of joy\nAnd all the trees of the field\nWill clap, will clap their hands." },
            { name: "END", lyrics: "And all the trees of the field will clap their hands,\nThe trees of the field will clap their hands, [F1](2x)[/F1]\nWhile you go out with joy." }
        ]
    },
    {
        title: "Tu Reino Ha Comenzado Ya",
        sections: [
            { name: "REFRAIN", lyrics: "En la batalla, Señor, hemos de estar;\nEn pie de guerra tu pueblo se levanta.\nY ahora conjubilo proclama\nQue tu reino ha comenzado ya." },
            { name: "VERSE", lyrics: "Con la espada en la mano, tus guerreros,\nAplastan la cabeza de Satan,\nY con el corazon enardecido,\nAhora marchando estan." },
            { name: "REFRAIN", lyrics: "En la batalla, Señor, hemos de estar;\nEn pie de guerra tu pueblo se levanta.\nY ahora conjubilo proclama\nQue tu reino ha comenzado ya." },
            { name: "VERSE", lyrics: "Con fiero Capitan el frente suyo\nClamores de batalla escuchan ya\nY con gran esplendor y poderio,\nLa victoria tendran." },
            { name: "REFRAIN", lyrics: "En la batalla, Señor, hemos de estar;\nEn pie de guerra tu pueblo se levanta.\nY ahora conjubilo proclama\nQue tu reino ha comenzado ya." },
            { name: "VERSE", lyrics: "Tu, Señor, Dios guerro, Dios potente,\nTu diestra poderosa en alto esta,\nPara que al fin to gloria se contemple\nY tu luz brille ya." },
            { name: "REFRAIN", lyrics: "En la batalla, Señor, hemos de estar;\nEn pie de guerra tu pueblo se levanta.\nY ahora conjubilo proclama\nQue tu reino ha comenzado ya." },
            { name: "VERSE", lyrics: "A la batalla vamos, justos suyos,\nSu gloria y su poder a contemplar!\nEntremos en la vida con orgullo:\nVayamos a luchar!" },
            { name: "END", lyrics: "En la batalla, Señor, hemos de estar;\nEn pie de guerra tu pueblo se levanta.\nY ahora conjubilo proclama\nQue tu reino ha comenzado ya." }
        ]
    },
    {
        title: "Unto The House Of The Lord",
        sections: [
            { name: "REFRAIN", lyrics: "I rejoiced when they said to me:\n“Let us go unto the house of the Lord!”\nStanding there, O Jerusalem,\nIn your gates unto the house of the Lord." },
            { name: "VERSE", lyrics: "Look upon Jerusalem\nThe city now restored.\nHere the tribes of Yahweh come\nAs one unto the Lord." },
            { name: "REFRAIN", lyrics: "I rejoiced when they said to me:\n“Let us go unto the house of the Lord!”\nStanding there, O Jerusalem,\nIn your gates unto the house of the Lord." },
            { name: "VERSE", lyrics: "As He ordered Israel\nThey come to praise His name.\nHere where courts of justice\nThe courts of David reign." },
            { name: "REFRAIN", lyrics: "I rejoiced when they said to me:\n“Let us go unto the house of the Lord!”\nStanding there, O Jerusalem,\nIn your gates unto the house of the Lord." },
            { name: "VERSE", lyrics: "Pray for peace, Jerusalem,\nProsperity at home\nPeace inside your city walls\nThat comes from God alone." },
            { name: "REFRAIN", lyrics: "I rejoiced when they said to me:\n“Let us go unto the house of the Lord!”\nStanding there, O Jerusalem,\nIn your gates unto the house of the Lord." },
            { name: "VERSE", lyrics: "Since we are God’s people\nI say, “Peace be to you.”\nMay the God who dwells in us\nYour happiness renew." },
            { name: "END", lyrics: "I rejoiced when they said to me:\n“Let us go unto the house of the Lord!”\nStanding there, O Jerusalem,\nIn your gates unto the house of the Lord.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Unto The King",
        sections: [
            { name: "VERSE", lyrics: "Unto the King eternal,\nUnto the King immortal,\nUnto the King invisible,\nThe only wise God, the only wise God." },
            { name: "VERSE", lyrics: "Now unto the King eternal,\nUnto the King immortal,\nUnto the King invisible,\nThe only wise God, the only wise God." },
            { name: "END", lyrics: "O, unto the King be glory and honor,\nUnto the King forever,\nUnto the King be glory and honor\nForever and ever\nAmen. Amen." }
        ]
    },
    {
        title: "We Are Men Of Jesus Christ",
        sections: [
            { name: "REFRAIN", lyrics: "We are men of Jesus Christ\nWe’ve come to serve the Lord\nIn the strength of God.\nCome, O men of Jesus Christ\nCome, servants of the Lord\nCome and take your stand." },
            { name: "VERSE", lyrics: "The battle rages for the sons of men\nAnd He has made us the sons of God\nThat we may fight now in His battle plan\nFor He is building the kingdom of God\nRuling the nations with sword and rod\nHe is the Word of God!" },
            { name: "REFRAIN", lyrics: "We are men of Jesus Christ\nWe’ve come to serve the Lord\nIn the strength of God.\nCome, O men of Jesus Christ\nCome, servants of the Lord\nCome and take your stand." },
            { name: "VERSE", lyrics: "We struggle not against mere flesh and blood\nBut strive with dark dominions above.\nOur weapons molded not by human hands\nBut by the pow’r of Christ Jesus we stand\nHolding the sword of the Spirit in hand\nHe is the Word of God!" },
            { name: "REFRAIN", lyrics: "We are men of Jesus Christ\nWe’ve come to serve the Lord\nIn the strength of God.\nCome, O men of Jesus Christ\nCome, servants of the Lord\nCome and take your stand." },
            { name: "VERSE", lyrics: "To Christ our King we offer all our lives\nA fragrant offering and sacrifice\nTo live is Christ, to die is gain for us\nTriumphant praises to God we sing\nRejoice in vict’ry with Christ the King\nHe is the Word of God!" },
            { name: "END", lyrics: "We are men of Jesus Christ\nWe’ve come to serve the Lord\nIn the strength of God.\nCome, O men of Jesus Christ\nCome, servants of the Lord\nCome and take your stand.[F1](2x)[/F1]\nServe the word of God" }
        ]
    },
    {
        title: "We Are Servants Of The Lord",
        sections: [
            { name: "REFRAIN", lyrics: "We are servants of the Lord.\nHe is our Master, Jesus Christ.\nAll our joy in You, our God.\nLo, we have come to do Your will." },
            { name: "VERSE", lyrics: "Sacrifices You don’t desire\nBut a people who will obey You.\nTo do Your will is our delight\nO God, write Your law upon our hearts." },
            { name: "REFRAIN", lyrics: "We are servants of the Lord.\nHe is our Master, Jesus Christ.\nAll our joy in You, our God.\nLo, we have come to do Your will." },
            { name: "VERSE", lyrics: "Within the great congregation\nWe will tell of Your deliverance.\nNever will we restrain our lips\nFrom speaking of Your steadfast love\nAnd kindness." },
            { name: "REFRAIN", lyrics: "We are servants of the Lord.\nHe is our Master, Jesus Christ.\nAll our joy in You, our God.\nLo, we have come to do Your will." },
            { name: "VERSE", lyrics: "May all who seek You rejoice in You\nAll who love Your salvation.\nGreat are You, O Lord our God\nYour blessing is on all who trust in You." },
            { name: "REFRAIN", lyrics: "We are servants of the Lord.\nHe is our Master, Jesus Christ.\nAll our joy in You, our God.\nLo, we have come to do Your will." },
            { name: "VERSE", lyrics: "O may we give our lives for You\nTo know You in Your fullness!\nAnd though we are not worthy\nO Master, You have called us\nTo be Yours." },
            { name: "END", lyrics: "We are servants of the Lord.\nHe is our Master, Jesus Christ.\nAll our joy in You, our God.\nLo, we have come to do Your will.\nYou are our Master, Lord Jesus Christ!" }
        ]
    },
    {
        title: "We Belong To God",
        sections: [
            { name: "VERSE", lyrics: "None of us lives as his own\nAnd none of us dies as his own.\nFor while we live\nWe are responsible to God\nAnd when we die\nWe die as His servants." },
            { name: "REFRAIN", lyrics: "For both in life and death\nWe belong to God.\nThat is why Christ has died for us\nAnd come again.\nWe shall all appear before\nThe judgment seat of God" },
            { name: "REFRAIN", lyrics: "For it is written:\n“Every knee shall bend before Me\nAnd every tongue shall give praise\nto God.”" },
            { name: "VERSE", lyrics: "For we are sure that\nNeither death nor life\nNor this nor future ages nor their powers\nNo height, no depth,\nNo creature that thrives\nWill come between us\nAnd the love of Christ." },
            { name: "REFRAIN", lyrics: "For both in life and death\nWe belong to God.\nThat is why Christ has died for us\nAnd come again.\nWe shall all appear before\nThe judgment seat of God" },
            { name: "REFRAIN", lyrics: "For it is written:\n“Every knee shall bend before Me\nAnd every tongue shall give praise\nto God.”" },
            { name: "VERSE", lyrics: "Give yourselves as sacrifice to God\nHoly and acceptable to the Lord\nDo not allow your minds\nTo be conformed to this age\nBut let your hearts be ruled by His Spirit." },
            { name: "REFRAIN", lyrics: "For both in life and death\nWe belong to God.\nThat is why Christ has died for us\nAnd come again.\nWe shall all appear before\nThe judgment seat of God" },
            { name: "REFRAIN", lyrics: "For it is written:\n“Every knee shall bend before Me\nAnd every tongue shall give praise\nto God.”" },
            { name: "VERSE", lyrics: "Now not all of us shall fall asleep\nBut all of us are to be changed.\nIn the twinkling of an eye\nAs the last trumpet sounds\nWe shall rise victorious in Christ!" },
            { name: "REFRAIN", lyrics: "For both in life and death\nWe belong to God.\nThat is why Christ has died for us\nAnd come again.\nWe shall all appear before\nThe judgment seat of God" },
            { name: "REFRAIN", lyrics: "For it is written:\n“Every knee shall bend before Me\nAnd every tongue shall give praise\nto God.”" },
            { name: "REFRAIN", lyrics: "For both in life and death\nWe belong to God.\nThat is why Christ has died for us\nAnd come again.\nWe shall all appear before\nThe judgment seat of God" },
            { name: "END", lyrics: "For it is written:\n“Every knee shall bend before Me\nAnd every tongue shall give praise\nto God.”" }
        ]
    },
    {
        title: "We Enter In",
        sections: [
            { name: "VERSE", lyrics: "We enter in. We have been called\nInto the fullness, filling all in all,\nBefore the fount of life\nWhere echoes day and night.\n“Holy!” the heavens cry\nAnd we adore …" },
            { name: "REFRAIN", lyrics: "You are worthy, Lord, we cry\nFace to face and eye to eye.\nAlleluia! Yours the power,\nYours salvation, O Most High.\nAnd so we adore You.\nO Lord, we adore You as we enter." },
            { name: "VERSE", lyrics: "Behold, He stands, the Son of Man\nFor us once slain\nNow risen as the Lamb.\nWe own the fullness\nOf His priceless gift of love.\n“Holy!” the heavens cry\nAnd we adore …" },
            { name: "REFRAIN", lyrics: "You are worthy, Lord, we cry\nFace to face and eye to eye.\nAlleluia! Yours the power,\nYours salvation, O Most High.\nAnd so we adore You.\nO Lord, we adore You as we enter." },
            { name: "VERSE", lyrics: "O Spirit, come!\nTake up Your home and fill our hearts\nTo make them all your own.\nConfirm our mortal frame,\nOur hearts and minds enflame.\n“Holy!” the heavens cry\nAnd we adore …" },
            { name: "REFRAIN", lyrics: "You are worthy, Lord, we cry\nFace to face and eye to eye.\nAlleluia! Yours the power,\nYours salvation, O Most High." },
            { name: "END", lyrics: "You are worthy, Lord, we cry\nFace to face and eye to eye.\nAlleluia! Yours the power,\nYours salvation, O Most High.\nAnd so we adore You,\nO Lord, we adore You\nAs we enter, we enter in!" }
        ]
    },
    {
        title: "We Exalt Your Name",
        sections: [
            { name: "VERSE", lyrics: "You are the Holy One\nThe Lord Most High\nYou reign in majesty, You reign on high.\nAnd You are the Worthy One\nLamb that was slain.\nYou bought us with Your blood\nAnd with You we’ll reign." },
            { name: "REFRAIN", lyrics: "We exalt Your name!\nHigh and mighty One of Israel.\nWe exalt Your name!\nLead us on to war in the power of Your name.\nWe exalt Your name!\nThe name above all names!\nOur victorious King, we exalt Your name!" },
            { name: "VERSE", lyrics: "You are the King of kings,\nThe Lord of lords.\nAll men will bow to You\nBefore Your throne." },
            { name: "REFRAIN", lyrics: "We exalt Your name!\nHigh and mighty One of Israel.\nWe exalt Your name!\nLead us on to war in the power of Your name.\nWe exalt Your name!\nThe name above all names!\nOur victorious King, we exalt Your name!" },
            { name: "END", lyrics: "We exalt Your name!\nThe name above all names!\nOur victorious King, we exalt Your name! [F1](2x)[/F1]" }
        ]
    },
    {
        title: "We Give You Thanks O Lord",
        sections: [
            { name: "REFRAIN", lyrics: "We give You thanks, O Lord.\nWe praise You with our song.\nWe give You thanks, O Lord.\nTo You our lives belong." },
            { name: "VERSE", lyrics: "For the love You have shown us\nFor the call on our lives\nFor Your word, rich among us\nWe give You thanks, O Lord." },
            { name: "REFRAIN", lyrics: "We give You thanks, O Lord.\nWe praise You with our song.\nWe give You thanks, O Lord.\nTo You our lives belong." },
            { name: "VERSE", lyrics: "For the ways You have led us\nFor the trials that have come\nThrough all the mercy You’ve shown us\nWe give You thanks, O Lord." },
            { name: "REFRAIN", lyrics: "We give You thanks, O Lord.\nWe praise You with our song.\nWe give You thanks, O Lord.\nTo You our lives belong." },
            { name: "VERSE", lyrics: "For the sisters You’ve given us\nFor our life lived in love\nFor loyalty and trust among us\nWe give You thanks, O Lord." },
            { name: "REFRAIN", lyrics: "We give You thanks, O Lord.\nWe praise You with our song.\nWe give You thanks, O Lord.\nTo You our lives belong." },
            { name: "VERSE", lyrics: "For the life lived for heaven\nFor the hope that will come\nFor the taste of Your kingdom above\nWe give You thanks, O Lord." },
            { name: "END", lyrics: "We give You thanks, O Lord.\nWe praise You with our song.\nWe give You thanks, O Lord.\nTo You our lives belong." }
        ]
    },
    {
        title: "We Will Magnify",
        sections: [
            { name: "VERSE", lyrics: "O Lord our God,\nHow majestic is your name!\nThe earth is full of your glory.\nO Lord our God,\nYou are robed in majesty.\nYou set your glory above the heavens." },
            { name: "REFRAIN", lyrics: "We will magnify, we will magnify\nThe Lord enthroned in Zion!\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "O Lord our God,\nYou have established a throne.\nYou reign in righteousness and splendor.\nO Lord our God,\nThe skies are ringing with your praise.\nSoon those on earth will come to worship." },
            { name: "REFRAIN", lyrics: "We will magnify, we will magnify\nThe Lord enthroned in Zion!\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "O Lord our God,\nThe world was made at your command.\nIn you all things now hold together.\nNow to Him who sits\nOn the throne and to the Lamb\nBe praise and glory and power forever." },
            { name: "END", lyrics: "We will magnify, we will magnify\nThe Lord enthroned in Zion!\n[F1](4x)[/F1]" }
        ]
    },
    {
        title: "We'll Be Faithful",
        sections: [
            { name: "VERSE", lyrics: "Forgetting what lies behind\nSetting our hearts on the prize\nAlways keeping our eyes on our Lord Jesus.\nWe’re running the race to win\nAll the way to the end\nLaying down every sin\nThat would seek to hinder us." },
            { name: "REFRAIN", lyrics: "And we’ll be faithful to our calling\nFor You are able to keep us from falling\nFor in Your promise we will trust\nYou’ll be faithful to finish\nThe work You began in us." },
            { name: "VERSE", lyrics: "Forgetting what lies behind\nSetting our hearts on the prize\nAlways keeping our eyes on our Lord Jesus.\nWe’re running the race to win\nAll the way to the end\nLaying down every sin\nThat would seek to hinder us." },
            { name: "REFRAIN", lyrics: "And we’ll be faithful to our calling\nFor You are able to keep us from falling\nFor in Your promise we will trust\nYou’ll be faithful to finish\nThe work You began in us.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Well Done",
        sections: [
            { name: "REFRAIN", lyrics: "Oh when this life is over\nAnd I take my final rest\nWhen I’ve made my final journey\nRound the sun,\nMay the angels receive me\nIn the land of the blest\nAnd may I hear my Master say:\n“Well done!”" },
            { name: "VERSE", lyrics: "All that I’ve done\nAll the battles that I’ve won\nAll that means nothing to me now.\nBut there’s one simple word\nAll I hope is to be heard\nWhen I finally meet my Maker.\n“Well done.”" },
            { name: "REFRAIN", lyrics: "Oh when this life is over\nAnd I take my final rest\nWhen I’ve made my final journey\nRound the sun,\nMay the angels receive me\nIn the land of the blest\nAnd may I hear my Master say:\n“Well done!”" },
            { name: "VERSE", lyrics: "No earthly treasure\nAnd no swiftly passing pleasure\nCan bring any joy to me now\nNo, my heart’s one desire\nAll my hope’s eternal fire\nIs to hear those blessed words:\n“Well done.”" },
            { name: "VERSE", lyrics: "All my life’s story\nAll the vain and fleeting glory\nAll that has faded for me now.\nBut that one blessed crown,\nWorth more than all the word’s renown\nShall be mine if I hear:\n“Well done.”" },
            { name: "END", lyrics: "Oh when this life is over\nAnd I take my final rest\nWhen I’ve made my final journey round the sun,\nMay the angels receive me\nIn the land of the blest\nAnd may I hear my Master say\nMay I hear my Master say: [F1](2x)[/F1]\n“W-e-ll done!”" }
        ]
    },
    {
        title: "While We Still Breathe",
        sections: [
            { name: "VERSE", lyrics: "As a father has compassion on his children\nSo the Lord has compassion on those who fear him\nFor he knows how we are formed\nHe remembers we are dust\nAs for man his days are like the grass" },
            { name: "VERSE", lyrics: "Like the flower of the field he flourishes\nThe wind blows and removes it from its place\nBut from everlasting to everlasting\nThe Lord's love is with those who fear him" },
            { name: "CHORUS", lyrics: "Come let us praise\nCome let us raise our hands to the king\nCome and adore\nJesus our Lord yet while we still breathe" },
            { name: "CHORUS", lyrics: "Let us proclaim his wonderful name\nLet our voices rise\nLet us magnify our Lord Jesus Christ" },
            { name: "VERSE", lyrics: "What is man that you are mindful of him\nFor what is our life but a mist\nThat appears for a while and then vanishes\nWe are dust and to dust we shall return" },
            { name: "VERSE", lyrics: "Yet how great is the love the Lord has lavished on us\nThat we should be called children of God\nFor he has rescued us from the dominion of darkness\nAnd brought us into the kingdom of his Son" },
            { name: "CHORUS", lyrics: "Come let us praise\nCome let us raise our hands to the king\nCome and adore\nJesus our Lord yet while we still breathe" },
            { name: "CHORUS", lyrics: "Let us proclaim his wonderful name\nLet our voices rise\nLet us magnify our Lord Jesus Christ" },
            { name: "CHORUS", lyrics: "Come let us praise\nCome let us raise our hands to the king\nCome and adore\nJesus our Lord yet while we still breathe" },
            { name: "END", lyrics: "Let us proclaim his wonderful name\nLet our voices rise\nLet us magnify our Lord Jesus Christ" }
        ]
    },
    {
        title: "Who Can Compare To Our Loving God",
        sections: [
            { name: "VERSE", lyrics: "Who can compare to our loving God?\nHis love is eternal and unchanging.\nHe looks upon us with mercy\nDoesn’t count our transgressions\nBut He forgives us." },
            { name: "REFRAIN", lyrics: "Lift your voice high unto the Lord!\nLet us give praise\nTo our merciful and loving God!\nLet us worship the Lord." },
            { name: "END", lyrics: "How awesome are the works\nOf the Lord our God!\nHe changed our being\nAnd raised us on high.\nWe are now heirs through Jesus Christ.\nWe have eternal life\nAnd a heavenly home." }
        ]
    },
    {
        title: "Who Has Known",
        sections: [
            { name: "VERSE", lyrics: "O the depth of the riches of God!\nAnd the breadth of the wisdom\nAnd knowledge of God!" },
            { name: "REFRAIN", lyrics: "For who has known the mind of God?\nTo Him be glory forever!" },
            { name: "VERSE", lyrics: "A virgin will carry a child and give birth,\nAnd His name shall be called Emmanuel." },
            { name: "REFRAIN", lyrics: "For who has known the mind of God?\nTo Him be glory forever!" },
            { name: "VERSE", lyrics: "The people of darkness\nHave seen a great light.\nFor a Child has been born\nHis dominion is wide." },
            { name: "END", lyrics: "For who has known the mind of God?\nTo Him be glory forever!" }
        ]
    },
    {
        title: "Who Is Like Thee",
        sections: [
            { name: "REFRAIN", lyrics: "So good, so kind, so merciful, so just\nSo pure, so righteous, so with us\nSo wise, so faithful, so full of grace\nSo steadfast, so loving is the Lord.\nWho is like Thee?\nWho is like Thee, O Lord?\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "So wise, so faithful, so full of grace\nSo steadfast, so loving is the Lord.\nWho is like Thee?\nWho is like Thee, O Lord?" }
        ]
    },
    {
        title: "Psalm 73 - Whom Have I In Heaven?",
        sections: [
            { name: "REFRAIN", lyrics: "Whom have I in heaven but You, O Lord?\nAnd when I am with You\nThe earth delights me not.\nThough my heart and my flesh\nShould waste away,\nGod is my rock, my portion forever." },
            { name: "VERSE", lyrics: "Your law is my delight,\nI hasten to keep Your ways.\nI rise to bless You at night,\nBy day I sing Your praise.\nThough the wicked do not fear the Lord\nAnd refuse to keep His word,\nI shall love the Lord, my God." },
            { name: "REFRAIN", lyrics: "Whom have I in heaven but You, O Lord?\nAnd when I am with You\nThe earth delights me not.\nThough my heart and my flesh\nShould waste away,\nGod is my rock, my portion forever." },
            { name: "VERSE", lyrics: "The commandment of the Lord is pure\nIt gives light to the eyes\nThe precepts of the Lord are sure\nThey make the simple wise.\nMore to be desired than the purest gold\nLet the law of the Lord be told\nThen shall I rejoice in You." },
            { name: "REFRAIN", lyrics: "Whom have I in heaven but You, O Lord?\nAnd when I am with You\nThe earth delights me not.\nThough my heart and my flesh\nShould waste away,\nGod is my rock, my portion forever." },
            { name: "VERSE", lyrics: "I am always with You\nYou hold my right hand\nYou guide me by Your truth\nAnd You lead me to glory.\nMy only joy is to be\nForever praising Thee!\nGod, my Lord, my King, my all." },
            { name: "REFRAIN", lyrics: "Whom have I in heaven but You, O Lord?\nAnd when I am with You\nThe earth delights me not.\nThough my heart and my flesh\nShould waste away,\nGod is my rock, my portion forever." },
            { name: "VERSE", lyrics: "I shall be the loyal friend\nOf all who know Your just decrees\nBut those who defy Your name\nI count as my enemies.\nFor the wicked You will destroy\nBut the righteous shall know Your joy\nAnd You shall reign victorious King." },
            { name: "END", lyrics: "Whom have I in heaven but You, O Lord?\nAnd when I am with You\nThe earth delights me not.\nThough my heart and my flesh\nShould waste away,\nGod is my rock, my portion forever." }
        ]
    },
    {
        title: "Why So Downcast O My Soul",
        sections: [
            { name: "VERSE", lyrics: "Why so downcast, O my soul?\nPut your hope in God. [F1](3x)[/F1]\n[F1](2x)[/F1]\nAnd bless the Lord, O my soul." }
        ]
    },
    {
        title: "Worship The Lord",
        sections: [
            { name: "REFRAIN", lyrics: "Worship the Lord in Spirit and truth\nWorship the Lord in love.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Let us fix our eyes on Him\nWith pure hearts rise to Him\nThe King of glory in our midst.\n[F1](2x)[/F1]" },
            { name: "REFRAIN", lyrics: "Worship the Lord in Spirit and truth\nWorship the Lord in love.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Let us fix our eyes on Him\nWith pure hearts rise to Him\nThe King of glory in our midst.\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "Worship the Lord in Spirit and truth\nWorship the Lord in love.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Yahweh The Faithful One",
        sections: [
            { name: "CHORUS", lyrics: "Yahweh’s love will last forever,\nHis faithfulness till the end of time.\nYahweh is a loving God,\nYahweh, the faithful One." },
            { name: "VERSE", lyrics: "Have no fear, for I am with you\nI will be your shield.\nGo now and leave your homeland\nFor I will give you a home." },
            { name: "CHORUS", lyrics: "Yahweh’s love will last forever,\nHis faithfulness till the end of time.\nYahweh is a loving God,\nYahweh, the faithful One." },
            { name: "VERSE", lyrics: "You shall be my chosen people\nAnd I will be your God.\nI will bless your name forever\nAnd keep you from all harm." },
            { name: "CHORUS", lyrics: "Yahweh’s love will last forever,\nHis faithfulness till the end of time.\nYahweh is a loving God,\nYahweh, the faithful One." },
            { name: "VERSE", lyrics: "Look up and see the heavens\nAnd count the stars if you can.\nYour name will be even greater\nGreater than all these stars." },
            { name: "CHORUS", lyrics: "Yahweh’s love will last forever,\nHis faithfulness till the end of time.\nYahweh is a loving God,\nYahweh, the faithful One." },
            { name: "VERSE", lyrics: "See now the land before you\nRich with food and rain.\nNo longer must you wander\nFor this will be your home." },
            { name: "END", lyrics: "Yahweh’s love will last forever,\nHis faithfulness till the end of time.\nYahweh is a loving God,\nYahweh, the faithful One." }
        ]
    },
    {
        title: "Yea My Life",
        sections: [
            { name: "REFRAIN", lyrics: "Yea, my life is hidden in Christ\nDeath no longer rules o’er me!\nYea, my life is hidden in Christ\nIn Christ, my life is hid." },
            { name: "VERSE", lyrics: "Continually we carry about\nIn our bodies the dying of Jesus\nSo that in our bodies the life of Christ\nMay also be revealed." },
            { name: "REFRAIN", lyrics: "Yea, my life is hidden in Christ\nDeath no longer rules o’er me!\nYea, my life is hidden in Christ\nIn Christ, my life is hid." },
            { name: "VERSE", lyrics: "We do not lose heart for each day\nWe are renewed\nEven while our bodies are passing away\nFor the present burden of our trial\nIs light enough for us and earns for us\nAn eternal weight of glory." },
            { name: "REFRAIN", lyrics: "Yea, my life is hidden in Christ\nDeath no longer rules o’er me!\nYea, my life is hidden in Christ\nIn Christ, my life is hid." },
            { name: "VERSE", lyrics: "Indeed we believe that when\nThis earthly tent of ours shall pass away\nWe shall find a new home\nA dwelling in the heavens,\nNot made by human hands\nBut made by God\nAnd made to last forever." },
            { name: "END", lyrics: "Yea, my life is hidden in Christ\nDeath no longer rules o’er me!\nYea, my life is hidden in Christ\nIn Christ, my life is hid." }
        ]
    },
    {
        title: "You Alone",
        sections: [
            { name: "VERSE", lyrics: "You are the peace that guards my heart,\nMy help in time of need.\nYou are the hope that leads me on\nAnd brings me to my knees.\nFor there I find You waiting\nAnd there I find release.\nSo with all my heart I’ll worship\nAnd unto You I sing." },
            { name: "END", lyrics: "For You alone deserve all glory\nFor You alone deserve all praise.\nFather, we worship and adore You.\nFather, we long to see Your Face.\nFor You alone deserve all glory\nFor You alone deserve all praise.\nFather, we love You\nAnd we worship You this day." }
        ]
    },
    {
        title: "You Are Holy",
        sections: [
            { name: "REFRAIN", lyrics: "Holy, You are holy, holy, Almighty Lord.\nWho was, who is and is to come.\nYou are holy, You are holy." },
            { name: "VERSE", lyrics: "Worthy, You are worthy, worthy,\nAlmighty Lord.\nFor You have created everything.\nYou are worthy, You are worthy,\nWorthy Lord." },
            { name: "END", lyrics: "Holy, You are holy, holy, Almighty Lord.\nWho was, who is and is to come.\nYou are holy, You are holy.\nHoly Lord" }
        ]
    },
    {
        title: "You Are My Delight",
        sections: [
            { name: "REFRAIN", lyrics: "You, O Lord, are all my delight.\nI long to behold You face to face\nTo dwell in Your courts, my Lord,\nDay and night.\nFor You are our only good\nAnd in You is the fullness of life." },
            { name: "VERSE", lyrics: "Spirit of God, come raise our minds\nBeyond the love of earthly things.\nTrain our hearts\nTo seek the things of heaven\nAnd fix our eyes\nOn the hope of eternal life." },
            { name: "REFRAIN", lyrics: "You, O Lord, are all my delight.\nI long to behold You face to face\nTo dwell in Your courts, my Lord,\nDay and night.\nFor You are our only good\nAnd in You is the fullness of life." },
            { name: "VERSE", lyrics: "Spirit of God, come raise our minds\nBeyond the love of earthly things.\nTrain our hearts\nTo seek the things of heaven\nAnd fix our eyes\nOn the hope of eternal life." },
            { name: "REFRAIN", lyrics: "You, O Lord, are all my delight.\nI long to behold You face to face\nTo dwell in Your courts, my Lord,\nDay and night.\nFor You are our only good\nAnd in You is the fullness of life." },
            { name: "END", lyrics: "For You are our only good\nAnd in You is the fullness of life." }
        ]
    },
    {
        title: "You Are Our Treasure",
        sections: [
            { name: "VERSE", lyrics: "Blessed be our God and King\nWho gives us all good things\nWho loved us though His enemies\nWho cleansed us from our sins\nWho offers us eternal life\nWho saves and sets us free.\nO what can we give back to Him\nWho gives eternally?" },
            { name: "REFRAIN", lyrics: "You, O Lord, are all our treasure\nTo do Your will our pleasure\nOur hearts belong to You alone.\nTo You, our glorious King\nWith joy our lives we bring\nAnd lay them down before Your throne,\nBefore Your throne." },
            { name: "VERSE", lyrics: "You are called to love your God\nWith all your heart and mind.\nFollow Me and perfect be\nAnd leave all else behind.\nCome, my brothers,\nWe are lovers of the cross of Christ.\nAs one man let’s take our stand\nWith Jesus, Lord of life." },
            { name: "REFRAIN", lyrics: "You, O Lord, are all our treasure\nTo do Your will our pleasure\nOur hearts belong to You alone.\nTo You, our glorious King\nWith joy our lives we bring\nAnd lay them down before Your throne,\nBefore Your throne." },
            { name: "VERSE", lyrics: "We have died to fear and pride\nAnd now are free to fight\nTo break the chains of death and pain\nTo end the reign of night\nTo see all men acknowledge Him\nTo boldly speak His word\nSide by side we live and die\nAs servants of our Lord." },
            { name: "REFRAIN", lyrics: "You, O Lord, are all our treasure\nTo do Your will our pleasure\nOur hearts belong to You alone.\nTo You, our glorious King\nWith joy our lives we bring\nAnd lay them down before Your throne,\nBefore Your throne." },
            { name: "VERSE", lyrics: "We fix our gaze upon the days\nWhen God will reign in peace\nWhen we shall find our heart’s delight\nAnd see Him face to face.\nBut while our King goes conquering\nAnd war is in the land\nOur glory is to fight by Him\nA two-edged sword in hand." },
            { name: "END", lyrics: "You, O Lord, are all our treasure\nTo do Your will our pleasure\nOur hearts belong to You alone.\nTo You, our glorious King\nWith joy our lives we bring\nAnd lay them down before Your throne,\nBefore Your throne." }
        ]
    },
    {
        title: "You Are The King Of Glory",
        sections: [
            { name: "VERSE", lyrics: "You are the King of glory\nIn majesty enthroned.\nAll nations shall adore You\nAnd worship You alone.\nThere is none in the heavens\nAs worthy of our praise.\nWe’ll honor You with worship\nAnd praise You all our days." },
            { name: "VERSE", lyrics: "The righteous shall adore You\nWith all their heart and soul\nWhile heavenly choirs join them\nYour greatness to extol.\nAnd at the name of Jesus\nEvery knee shall bend\nWhile all proclaim Your glory\nA kingdom without end." },
            { name: "END", lyrics: "Blessed are You, our Lord\nKing extolled in highest praise.\nMartyrs, saints and angels\nJoin us in the song we raise.\nAlmighty and forever, ruler of all things\nAll glory, laud and honor\nTo our God, the King of kings." }
        ]
    },
    {
        title: "You Shall Be Clothed With Power",
        sections: [
            { name: "REFRAIN", lyrics: "You shall be clothed with power from on high\nWhen the Holy Spirit comes to you\nAnd you shall be My witnesses\nThroughout the ends of the earth.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Go forth to all the world\nAnd tell the Good News.\nProclaim, “God’s kingdom has come\nThrough the triumph of His Son!”" },
            { name: "REFRAIN", lyrics: "You shall be clothed with power from on high\nWhen the Holy Spirit comes to you\nAnd you shall be My witnesses\nThroughout the ends of the earth.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "The works that I have done you also shall do\nAnd still there’s more to come\nFor my Spirit rests on you!" },
            { name: "REFRAIN", lyrics: "You shall be clothed with power from on high\nWhen the Holy Spirit comes to you\nAnd you shall be My witnesses\nThroughout the ends of the earth.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "The deaf shall hear my voice,\nThe blind shall see\nThe lame shall leap for joy\nAnd the captives shall be free." },
            { name: "END", lyrics: "You shall be clothed with power from on high\nWhen the Holy Spirit comes to you\nAnd you shall be My witnesses\nThroughout the ends of the earth.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "You The Fount",
        sections: [
            { name: "VERSE", lyrics: "You, the fount who quenches our thirsting,\nAll restless longings rest only in you.\nWell overflowing, the source of all goodness,\nNothing less for me than ev’rything for thee!" },
            { name: "REFRAIN", lyrics: "Claim me, Lord, for your own;\nCome and take me by fire.\nCome and capture my heart,\nThat my heart might be free!" },
            { name: "REFRAIN", lyrics: "Come and widen my soul,\nAnd then raise my desires,\nUntil all that I am is in you,\nAnd you are in me." },
            { name: "VERSE", lyrics: "Make of me a temple for glory.\nLord, make my heart a home for your throne.\nYours be the presence I bring all around me,\nYour love in all my ways,\nYour likeness in my face!" },
            { name: "REFRAIN", lyrics: "Claim me, Lord, for your own;\nCome and take me by fire.\nCome and capture my heart,\nThat my heart might be free!" },
            { name: "REFRAIN", lyrics: "Come and widen my soul,\nAnd then raise my desires,\nUntil all that I am is in you,\nAnd you are in me." },
            { name: "VERSE", lyrics: "How I long to see you in glory.\nWhen shall these eyes\nBe filled with your gaze?\nFor now, in this life,\nWe wander as pilgrims;\nHeaven is our home,\nForever is your grace!" },
            { name: "REFRAIN", lyrics: "Claim me, Lord, for your own;\nCome and take me by fire.\nCome and capture my heart,\nThat my heart might be free!" },
            { name: "REFRAIN", lyrics: "Come and widen my soul,\nAnd then raise my desires,\nUntil all that I am is in you,\nAnd you are in me." },
            { name: "REFRAIN", lyrics: "Claim me, Lord, for your own;\nCome and take me by fire.\nCome and capture my heart,\nThat my heart might be free!" },
            { name: "REFRAIN", lyrics: "Come and widen my soul,\nAnd then raise my desires,\nUntil all that I am is in you,\nAnd you are in me." },
            { name: "END", lyrics: "You are in me, Lord,\nAnd I am in thee." }
        ]
    },
    {
        title: "Your Love",
        sections: [
            { name: "VERSE", lyrics: "I’m so amazed by what You’ve done.\nEvery day it becomes more real to me.\nIt’s love that You are offering to me\nA kind of love only You can give." },
            { name: "REFRAIN", lyrics: "I will proclaim Your love to the nations\nLift you up on high.\nI will proclaim Your love to all people.\nSet me on fire, set me on fire!\nSet me on fire with Your love!" },
            { name: "VERSE", lyrics: "You laid down Your life for us.\nUnconditional love you poured out for all men.\nFriends, no longer servants\nThat’s what we are.\nA new way to the Father made possible." },
            { name: "REFRAIN", lyrics: "I will proclaim Your love to the nations\nLift you up on high.\nI will proclaim Your love to all people.\nSet me on fire, set me on fire!\nSet me on fire with Your love!" },
            { name: "BRIDGE", lyrics: "Set me on fire, set me on fire!\nSet me on fire with Your love!\n\nSet me on fire, set me on fire!\nSet me on fire!" },
            { name: "END", lyrics: "I will proclaim Your love to the nations\nLift you up on high.\nI will proclaim Your love to all people.\nSet me on fire, set me on fire!\nSet me on fire with Your love!\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Your Love Is Better Than Life Itself",
        sections: [
            { name: "CHORUS", lyrics: "Your love is better than life itself, Jesus.\nYou fill my heart with\nThis song of praise\nFor Your holy ways\nAre far better than mine!" },
            { name: "VERSE", lyrics: "I’ve seen Your glory because\nYour Spirit’s touched me.\nI know my life is now hid with You.\nNothing man can do,\nCan take me from Your side." },
            { name: "VERSE", lyrics: "Lord, You make my heart new\nI give it to You\nFor the praise of Your glory!\nLord, my strength is Your word\nThe moment I heard\nNew life came upon me." },
            { name: "VERSE", lyrics: "Lead me more closely to You alone.\nJesus, wash me and bring me\nBefore Your throne\nMy life’s not my own\nIt’s Yours for whatever\nYou choose to do with it!" },
            { name: "VERSE", lyrics: "Lord, my soul thirsts for You!\nWhat more can I do\nTo be pleasing to You?\nYour law is all my delight\nIt brightens the night\nLike a lamp to my feet." },
            { name: "END", lyrics: "Your love is better than life itself, Jesus.\nYou fill my heart with\nThis song of praise\nFor Your holy ways\nAre far better than mine!" }
        ]
    },
    {
        title: "Your Love O Lord",
        sections: [
            { name: "VERSE", lyrics: "Your love, O Lord, reaches the heaven\nYour faithfulness stretches to the sky\nYour righteousness is like a mighty mountain\nYour justice flows like the ocean’s tide\nAnd I will lift my voice\nTo worship You, my King\nAnd I will find my strength\nIn the shadows of Your wings.\nYour love, O Lord!" }
        ]
    },
    {
        title: "Your Steadfast Love",
        sections: [
            { name: "VERSE", lyrics: "Your steadfast love extends to the heavens\nYour faithfulness reaches to the clouds\nYour righteousness is like\nMajestic mountains\nAnd Your wisdom like depths of the sea\nAnd You come to me." },
            { name: "END", lyrics: "Filling my heart with loving kindness\nI find my peace\nIn the shadow of Your wings.\nI eat my fill from the abundance\nOf Your household\nAnd I drink from the streams of rejoicing.\nYou are my King. [F1](3x)[/F1]" }
        ]
    },
    {
        title: "Yours Is The Greatness And The Power",
        sections: [
            { name: "VERSE", lyrics: "Yours, Lord our God,\nIs the greatness and the pow’r\nAnd the glory and the victory\nAnd the majesty and the sovereignty!\nYours is the Kingdom\nYours is dominion\nAnd You are exalted as Head over all." }
        ]
    },
    {
        title: "I Shall Not Want",
        sections: [
            { name: "VERSE", lyrics: "I shall not want, O Lord,\nYou are enough for me.\nMy God and my all,\nNothing else I desire\nThan to have God alone.\n\nTake my off’ring of praise,\nAll my thoughts, my desires,\nMy life and my spirit.\nIn You I shall not want." },
            { name: "END", lyrics: "I shall not want, O Lord,\nMy God and my All." }
        ]
    },
    {
        title: "You Will Receive Power",
        sections: [
            { name: "VERSE", lyrics: "In the time after the suff’ring of the Lord\nHe showed us many ways\nHe was still alive\nAnd He told us not to leave Jerusalem\nUntil we are bold with power on High" },
            { name: "REFRAIN", lyrics: "You will receive power\nWhen the Holy Spirit falls upon You\nAnd you will be My witnesses\nTo the ends of all the earth" },
            { name: "VERSE", lyrics: "In the time after the suff’ring of the Lord\nHe showed us many ways\nHe was still alive\nAnd He told us not to leave Jerusalem\nUntil we are bold with power on High" },
            { name: "END", lyrics: "You will receive power\nWhen the Holy Spirit falls upon You\nAnd you will be My witnesses\nTo the ends of all the earth\n[F1](2x)[/F1]\nTo the ends of all the earth [F1](2x)[/F1]" }
        ]
    },
    {
        title: "We Come To You",
        sections: [
            { name: "VERSE", lyrics: "We come to Mount Zion\nThe heavenly Jerusalem the city of our God\nTo thousands upon thousands\nof angels gathered round\nWe come to praise the Lord of Hosts" },
            { name: "CHORUS", lyrics: "We come to you to the living God\nYou who bought us at a price we come freely\nUnto Jesus Christ our Lord\nOnce rejected now become our cornerstone\nO Son of God we come to you" },
            { name: "VERSE", lyrics: "We come to temple courts\nThe true and better dwelling place\nnot made with human hands\nWhere our High Priest has entered\nonce for all to give\nHis life his perfect holy blood" },
            { name: "CHORUS", lyrics: "We come to you to the living God\nYou who bought us at a price we come freely\nUnto Jesus Christ our Lord\nOnce rejected now become our cornerstone\nO Son of God we come to you" },
            { name: "VERSE", lyrics: "We come with nothing in our hands\nNo worthy sacrifice to bring\nyet offering our lives\nFrom every tribe and nation\nall corners of the earth\nWe come to serve the Lord of all" },
            { name: "CHORUS", lyrics: "We come to you to the living God\nYou who bought us at a price we come freely\nUnto Jesus Christ our Lord\nOnce rejected now become our cornerstone\nO Son of God ..." },
            { name: "END", lyrics: "We come to you to the living God\nYou who bought us at a price we come freely\nUnto Jesus Christ our Lord\nOnce rejected now become our cornerstone\nO Son of God we come to you [F1](2x)[/F1]" }
        ]
    },
    {
        title: "The Lord Of Hosts Is Here",
        sections: [
            { name: "VERSE", lyrics: "The Lord of hosts is here\nOur God is before us\nAnd we have only to worship him\nAs he brings his Word" },
            { name: "CHORUS", lyrics: "Hallelujah\nSpeak O Lord\nDo not be silent\nWe wait for you\nHallelujah\nAnd we will lift our hands as you appear\nThe Lord of hosts is here" },
            { name: "VERSE", lyrics: "The Lord of hosts is King\nHe is seated upon his throne\nAnd who are we that the Lord of hosts\nWould make of us his own" },
            { name: "END", lyrics: "Hallelujah\nSpeak O Lord\nDo not be silent\nWe wait for you\nHallelujah\nAnd we will lift our hands as you appear\nThe Lord of hosts is here" }
        ]
    },
    {
        title: "I Saw The King",
        sections: [
            { name: "VERSE", lyrics: "I saw the armies of angels arising\nThe banners of heaven appeared on the clouds\nI saw the King in his glory arriving\nThe cry goes up our salvation is near" },
            { name: "VERSE", lyrics: "I heard the tongues of the holy ones singing\nAnthems of cherubim thund’ring on high\nVoices on voices in harmony ringing\nAll God’s redeemed join the heavenly choir" },
            { name: "CHORUS", lyrics: "See the King upon his throne\nSee the victory he has won\nSee his love and mercy saving\nJesus reigns forevermore" },
            { name: "VERSE", lyrics: "Under his feet ev’ry mountain shall crumble\nValleys arise to prepare him a way\nSo shall the prideful before him be humbled\nAnd the afflicted be raised to his side" },
            { name: "CHORUS", lyrics: "See the King upon his throne\nSee the victory he has won\nSee his love and mercy saving\nJesus reigns forevermore" },
            { name: "VERSE", lyrics: "Look to his coming you sleepers awaken\nWhere he approaches the shadows depart\nFeel from your arms Satan’s fetters are breaking\nLift up your heads and rejoice in the light" },
            { name: "CHORUS", lyrics: "See the King upon his throne\nSee the victory he has won\nSee his love and mercy saving\nJesus reigns forevermore" },
            { name: "END", lyrics: "See the King upon his throne\nSee the victory he has won\nSee his love and mercy saving\nJesus reigns forevermore [F1](2x)[/F1]" }
        ]
    },
    {
        title: "The Way",
        sections: [
            { name: "VERSE", lyrics: "Jesus, I believe in Your promise\nSo I won't be troubled, I know in heaven\nYou've made room for me\nJesus, I believe in Your power\nI know if I ask it, You will fulfill it\nFor the glory of His Name" },
            { name: "PRE-CHORUS", lyrics: "In this world, we'll have trouble\nBut I take heart, for You have come\nNow my sorrow turns to joy\nAnd I'll gladly sing" },
            { name: "CHORUS", lyrics: "You are the Way, the Truth,\nYou are the Life\nYou are the Christ, the Messiah\nI can't deny, oh\nYour resurrection gave me life\nI'll confess while I'm alive\nThat You're the Way, the Truth,\nYou are the Life so I will\nLive in You" },
            { name: "VERSE", lyrics: "Jesus, I abide in Your love\nI bear You witness and keep Your commandments\nThat Your joy be mine\nJesus, send down Your Spirit\nThat He may dwell in me\nTeach me in all things\nAnd guide me in truth" },
            { name: "PRE-CHORUS", lyrics: "In this world, we'll have trouble\nBut I take heart, for You have come\nNow my sorrow turns to joy\nAnd I'll gladly sing" },
            { name: "CHORUS", lyrics: "You are the Way, the Truth,\nYou are the Life\nYou are the Christ, the Messiah\nI can't deny, oh\nYour resurrection gave me life\nI'll confess while I'm alive\nThat You're the Way, the Truth,\nYou are the Life so I will\nLive in You" },
            { name: "BRIDGE", lyrics: "I'll give You my heart, I'll give You my soul,\nMy mind and my strength; I'll give You my all\n[F1](4x)[/F1]" },
            { name: "CHORUS", lyrics: "Cuz You’re the Way, the Truth,\nYou are the Life\nYou are the Christ, the Messiah\nI can't deny, oh\nYour resurrection gave me life\nI'll confess while I'm alive\nThat You're the Way, the Truth,\nYou are the Life so I will live" },
            { name: "END", lyrics: "In You - The Way, the Truth,\nYou are the Life\nYou are the Christ, the Messiah\nI can't deny, oh\nYour resurrection gave me life\nI'll confess while I'm alive\nThat You're the Way, the Truth,\nYou are the Life so I will\nLive in You" }
        ]
    },
    {
        title: "He Is Our Shield",
        sections: [
            { name: "VERSE", lyrics: "He is our shield, our defender\nOur provider, the God in whom we trust\nAnd we are his people\nGuided by his rod and staff\nTo the promised land he leads us on" },
            { name: "PRE-CHORUS", lyrics: "Heavenly hosts surround his throne with praise\nTo highest heaven our lives we raise" },
            { name: "CHORUS", lyrics: "He is King of Kings and Lord of Lords\nLight from Light and God from God\nHis mercy flows from sea to sea\nShepherd of our hearts and souls\nWarrior to destroy our foes\nWe follow where your Spirit leads\nLead us on" },
            { name: "VERSE", lyrics: "He is our shield, our defender\nOur provider, the God in whom we trust\nAnd we are his people\nGuided by his rod and staff\nTo the promised land he leads us on" },
            { name: "PRE-CHORUS", lyrics: "Heavenly hosts surround his throne with praise\nTo highest heaven our lives we raise" },
            { name: "END", lyrics: "He is King of Kings and Lord of Lords\nLight from Light and God from God\nHis mercy flows from sea to sea\nShepherd of our hearts and souls\nWarrior to destroy our foes\nWe follow where your Spirit leads\nLead us on... [F1](2x)[/F1]" }
        ]
    },
    {
        title: "Psalm 96 - Sing To The Lord A Song Of Praise",
        sections: [
            { name: "VERSE", lyrics: "Great is the Lord, worthy of praise.\nHe is to be feared for his righteousness.\nFor all the gods of the nations are idols,\nBut the Lord God brings new life." },
            { name: "REFRAIN", lyrics: "Sing to the Lord a song of praise,\nWith new hearts, bless His name.\nSing to the Lord a song of praise,\nTo all the earth, His deeds proclaim." },
            { name: "VERSE", lyrics: "Say among all people, “The Lord is right,\nIn this world of change, He is secure.”\nWorship the Lord for who He is and all He’s made;\nBow before Him, all the earth!" },
            { name: "REFRAIN", lyrics: "Sing to the Lord a song of praise,\nWith new hearts, bless His name.\nSing to the Lord a song of praise,\nTo all the earth, His deeds proclaim." },
            { name: "VERSE", lyrics: "Let the heavens rejoice and the earth be glad.\nTrees of the forest will be freed to sing.\nFor our Lord has come to judge the earth\nIn righteousness, in His truth!" },
            { name: "END", lyrics: "Sing to the Lord a song of praise,\nWith new hearts, bless His name.\nSing to the Lord a song of praise,\nTo all the earth, His deeds proclaim.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Psalm 100 - Sing Joyfully Unto The Lord!",
        sections: [
            { name: "REFRAIN", lyrics: "Sing joyfully unto the Lord!\nAll the lands\nServe the Lord with gladness!\nCome into His presence with singing!" },
            { name: "VERSE", lyrics: "Know the Lord is God.\nHe made us and we are His.\nWe are His people,\nThe sheep of His pasture." },
            { name: "REFRAIN", lyrics: "Sing joyfully unto the Lord!\nAll the lands\nServe the Lord with gladness!\nCome into His presence with singing!" },
            { name: "VERSE", lyrics: "Enter His gates with thanksgiving,\nCome into His courts with praise.\nWorship the Lord and bless His name!" },
            { name: "REFRAIN", lyrics: "Sing joyfully unto the Lord!\nAll the lands\nServe the Lord with gladness!\nCome into His presence with singing!" },
            { name: "VERSE", lyrics: "For the Lord is good\nHis steadfast love endures forever\nAnd He is faithful to all generations." },
            { name: "END", lyrics: "Sing joyfully unto the Lord!\nAll the lands\nServe the Lord with gladness!\nCome into His presence with singing!\n[F1](2x)[/F1]\nwith singing! [F1](3x)[/F1]" }
        ]
    },
    {
        title: "Psalm 115 - Not To Us",
        sections: [
            { name: "REFRAIN", lyrics: "Not to us, O Lord,\nBut to Your name be glory!\nNot to us, O Lord,\nBecause of Your love and faithfulness." },
            { name: "VERSE", lyrics: "You who fear Him, trust in the Lord\nFor He is our help and shield.\nThe Lord remembers us\nAnd will bless us,\nWill bless both small and great." },
            { name: "REFRAIN", lyrics: "Not to us, O Lord,\nBut to Your name be glory!\nNot to us, O Lord,\nBecause of Your love and faithfulness." },
            { name: "VERSE", lyrics: "May you be blessed by the Lord,\nThe Maker of heaven and earth.\nThe highest heavens belong to the Lord\nBut the earth He has given to man." },
            { name: "REFRAIN", lyrics: "Not to us, O Lord,\nBut to Your name be glory!\nNot to us, O Lord,\nBecause of Your love and faithfulness." },
            { name: "VERSE", lyrics: "The dead do not praise the Lord,\nThose who go down to the depths.\nIt is we who extol the Lord\nBoth now and forever more." },
            { name: "REFRAIN", lyrics: "Not to us, O Lord,\nBut to Your name be glory!\nNot to us, O Lord,\nBecause of Your love and faithfulness." }
        ]
    },
    {
        title: "We Want To See Jesus",
        sections: [
            { name: "VERSE", lyrics: "We want to see Jesus lifted high\nA banner that flies across this land\nThat all men might see\nThe truth and know\nHe is the way to heaven.\n[F1](2x)[/F1]" },
            { name: "REFRAIN", lyrics: "We want to see, we want to see\nWe want to see Jesus lifted high.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "We want to see Jesus lifted high\nA banner that flies across this land\nThat all men might see\nThe truth and know\nHe is the way to heaven.\n[F1](2x)[/F1]" },
            { name: "REFRAIN", lyrics: "We want to see, we want to see\nWe want to see Jesus lifted high.\n[F1](2x)[/F1]" },
            { name: "BRIDGE", lyrics: "Step by step we’re moving forward\nLittle by little we’re taking ground.\nEvery pray’r a powerful weapon\nStrongholds come tumbling down\nAnd down and down." },
            { name: "VERSE", lyrics: "We want to see Jesus lifted high\nA banner that flies across this land\nThat all men might see\nThe truth and know\nHe is the way to heaven.\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "We want to see, we're gonna see\nWe're gonna see Jesus lifted high.\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Singing Hallelujah",
        sections: [
            { name: "VERSE", lyrics: "We have come to mount Zion,\nTo the city of the Living God;\nThe heavenly Jerusalem,\nWith myriads of angels round the throne." },
            { name: "REFRAIN", lyrics: "Singing “Hallelujah,”\n[F1](3x)[/F1]" },
            { name: "VERSE", lyrics: "And we’ve come unto Jesus\nThrough the blood of the new covenant.\nMade pure to stand\nBefore the throne of grace,\nWith all the first-born saints\nIn endless praise!" },
            { name: "REFRAIN", lyrics: "Singing “Hallelujah,”\n[F1](3x)[/F1]" },
            { name: "VERSE", lyrics: "Since we've found such a kingdom\nWhich shall never be removed,\nLet us worship the Lord in fear and awe,\nIn reverence and heartfelt gratitude!" },
            { name: "END", lyrics: "Singing “Hallelujah,”\n[F1](6x)[/F1]" }
        ]
    },
    {
        title: "I Will Call Upon The Lord",
        sections: [
            { name: "VERSE", lyrics: "I will call upon the Lord\nWho is worthy to be praised\nSo shall I be saved from my enemies." },
            { name: "REFRAIN", lyrics: "The Lord reigneth\nAnd blessed be my rock\nAnd let the God of my salvation\nBe exalted!\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "I will call upon the Lord\nWho is worthy to be praised\nSo shall I be saved from my enemies." },
            { name: "END", lyrics: "The Lord reigneth\nAnd blessed be my rock\nAnd let the God of my salvation\nBe exalted!\n[F1](4x)[/F1]" }
        ]
    },
    {
        title: "Anchored",
        sections: [
            { name: "VERSE", lyrics: "The fear of the Lord [F1](echo)[/F1]\nIs the beginning of wisdom [F1](echo)[/F1]\nThe fear of the Lord [F1](echo)[/F1]\nIs the beginning of wisdom [F1](echo)[/F1]\nAnd the knowledge of the Holy One\nIs understanding" },
            { name: "CHORUS", lyrics: "Teach us, Lord, to be righteous\nLead us to stand firm on the unchanging truth\nGive us wisdom and understanding\nTo love You\nWith all our heart" },
            { name: "VERSE", lyrics: "The ways of the Lord [F1](echo)[/F1]\nAre above all reason [F1](echo)[/F1]\nThe ways of the Lord [F1](echo)[/F1]\nAre above all reason [F1](echo)[/F1]\nAnd the will of our sovereign God\nEndures forever" },
            { name: "CHORUS", lyrics: "Teach us, Lord, to be righteous\nLead us to stand firm on the unchanging truth\nGive us wisdom and understanding\nTo love You\nWith all our heart" },
            { name: "VERSE", lyrics: "God, you always prevail\nYour Word never fails\nYour way is higher\nYou’re the hope of our souls\nOur all in all\nTo You, we are anchored, O Lord\n[F1](2x)[/F1]" },
            { name: "CHORUS", lyrics: "Teach us, Lord, to be righteous\nLead us to stand firm on the unchanging truth\nGive us wisdom and understanding\nTo love You\nWith all our heart" },
            { name: "VERSE", lyrics: "The Spirit of the Lord [F1](echo)[/F1]\nIs moving within us [F1](echo)[/F1]\nThe Spirit of the Lord [F1](echo)[/F1]\nIs moving within us [F1](echo)[/F1]" },
            { name: "END", lyrics: "And the fire of His love\nWill renew the earth\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "My Glorious Victor",
        sections: [
            { name: "VERSE", lyrics: "My glorious Victor, Prince divine\nClasp these surrendered hands in thine\nAt length my will is all thine own\nGlad vassal of a Savior’s throne [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "My Master lead me to thy door\nAnd pierce this willing ear once more\nThy bonds are freedom let me stay\nWith thee to toil endure obey [F1](2x)[/F1]" },
            { name: "CHORUS", lyrics: "I am your servant forever\nand here I will remain\nI am your servant forever\nfreely I come and freely stay" },
            { name: "VERSE", lyrics: "Yes, ear and hand and thought and will\nUse all in thy dear slav’ry still\nSelf’s weary liberties I cast\nBeneath thy feet there keep them fast [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Tread them still down and then I know\nThese hands shall with thy gifts o’erflow\nAnd pierced ears shall hear the tone\nWhich tells me thou and I are one [F1](2x)[/F1]" },
            { name: "END", lyrics: "I am your servant forever\nand here I will remain\nI am your servant forever\nfreely I come and freely stay\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Make Us More Like You",
        sections: [
            { name: "VERSE", lyrics: "Amidst the battle and gathering storms\nFrom living stones a temple forms\nTear open the heavens and send down your flame\n\nRefined by your presence and called by your name\nThe holy of holies is opened to us\nSo Lord, make us holy like you" },
            { name: "CHORUS", lyrics: "Purify us, make us more like you\nMirrors of your glory, walking in the truth\nJesus Christ, make us holy, make us new\nFree to serve you in the life you call us to\nMake us more like you" },
            { name: "VERSE", lyrics: "Into the day, the night behind us\nThe fire of God to forge and guide us\nShaped by your word, moved by your grace\n\nHealed by your mercy to look on your face\nObedient, faithful, courageous and pure\nA people made whole in your love" },
            { name: "END", lyrics: "Purify us, make us more like you\nMirrors of your glory, walking in the truth\nJesus Christ, make us holy, make us new\nFree to serve you in the life you call us to\n[F1](2x)[/F1]\nMake us more like you" }
        ]
    },
    {
        title: "I Offer My Life",
        sections: [
            { name: "VERSE", lyrics: "All that I am, all that I have,\nI lay them down before You, O Lord.\nAll my regrets, all my acclaim,\nThe joy and the pain\nI’m making them Yours." },
            { name: "REFRAIN", lyrics: "Lord, I offer my life to You\nEverything I’ve been through\nUse it for Your glory.\nLord, I offer my days to You\nLifting my praise to You\nAs a pleasing sacrifice.\nLord, I offer You my life." },
            { name: "VERSE", lyrics: "Things in the past, things yet unseen\nWishes and dreams\nThat are yet to come true.\nAll of my hopes, all of my plans\nMy heart and my hands are lifted to You." },
            { name: "REFRAIN", lyrics: "Lord, I offer my life to You\nEverything I’ve been through\nUse it for Your glory.\nLord, I offer my days to You\nLifting my praise to You\nAs a pleasing sacrifice.\nLord, I offer You my life." },
            { name: "BRIDGE", lyrics: "What can we give\nThat You have not given?\nAnd what do we have\nThat is not already Yours?\nAll we possess\nAre these lives we’re living\nAnd that’s what we give to You, Lord." },
            { name: "END", lyrics: "Lord, I offer my life to You\nEverything I’ve been through\nUse it for Your glory.\nLord, I offer my days to You\nLifting my praise to You\nAs a pleasing sacrifice.\nLord, I offer You my life." }
        ]
    },
    {
        title: "The Lord The Lord",
        sections: [
            { name: "REFRAIN", lyrics: "The Lord the Lord\nA God merciful and gracious\nSlow to anger\nAnd abounding in steadfast love\nAnd faithfulness\n[F1](3x)[/F1]" },
            { name: "BRIDGE", lyrics: "Slow to anger\nAnd abounding in steadfast love\nAnd faithfulness" },
            { name: "END", lyrics: "The Lord the Lord\nA God merciful and gracious\nSlow to anger\nAnd abounding in steadfast love\nAnd faithfulness" }
        ]
    },
    {
        title: "A Joyful Thanks",
        sections: [
            { name: "VERSE", lyrics: "How good it is to give thanks\nAnd sing in Your honor, O Lord.\nWe come with joy,\nProclaiming Your words everywhere." },
            { name: "REFRAIN", lyrics: "That Your victory is firm\nAnd Your love is eternal, O Lord.\nWe proclaim the joy in our hearts,\nTrusting with all of our lives.\nTo You, O Lord, forever, Amen." },
            { name: "VERSE", lyrics: "How good it is to give thanks\nAnd sing in Your honor, O Lord.\nWe come with joy,\nProclaiming Your words everywhere." },
            { name: "REFRAIN", lyrics: "That Your victory is firm\nAnd Your love is eternal, O Lord.\nWe proclaim the joy in our hearts,\nTrusting with all of our lives.\nTo You, O Lord\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "Forever, Amen\n[F1](3x)[/F1]" }
        ]
    },
    {
        title: "Majesty",
        sections: [
            { name: "VERSE", lyrics: "Majesty, worship His majesty!\nUnto Jesus be glory, honor and praise!\nMajesty, kingdom, authority\nFlows from His throne\nUnto His own – His anthem raise!" },
            { name: "END", lyrics: "So exalt, lift up on high\nThe name of Jesus!\nMagnify, come, glorify\nChrist Jesus the King!\nMajesty, worship His majesty!\nJesus who died, now glorified\nKing of all kings!" }
        ]
    },
    {
        title: "Our Hearts Will Rise",
        sections: [
            { name: "VERSE", lyrics: "Eye has not seen, no ear has heard\nNo heart conceived\nThe hope prepared for us.\nNow we see dimly, but one day clearly\nFace to face we shall behold our God." },
            { name: "REFRAIN", lyrics: "Our hearts will rise\nAs You open our eyes\nAnd we see You in glory\nAnd we’re taken by love!\nThen we shall know\nEven as we’re known:\nYou are love eternal, You are the One!" },
            { name: "VERSE", lyrics: "And all creation waits with eager longing\nUntil the Father then reveals His own.\nSo we are pilgrims searching for that city\nOur hearts are restless\nFor Your love alone." },
            { name: "REFRAIN", lyrics: "Our hearts will rise\nAs You open our eyes\nAnd we see You in glory\nAnd we’re taken by love!\nThen we shall know\nEven as we’re known:\nYou are love eternal, You are the One!" },
            { name: "VERSE", lyrics: "And in that city, there is no temple,\nThere is no grieving\nAnd there is no night.\nBut there is Jesus before the Father\nAnd by the Spirit we will wake to light." },
            { name: "END", lyrics: "Our hearts will rise\nAs You open our eyes\nAnd we see You in glory\nAnd we’re taken by love!\nThen we shall know\nEven as we’re known:\nYou are love eternal, You are the One!\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Lord You Are More Precious Than Silver",
        sections: [
            { name: "VERSE", lyrics: "Lord, You are more precious than silver.\nLord, You are more costly than gold.\nLord, You are more beautiful\nthan diamonds,\nAnd nothing I desire compares with You." }
        ]
    },
    {
        title: "How Great Is Our God",
        sections: [
            { name: "VERSE", lyrics: "The splendor of a King\nClothed in majesty\nLet all the earth rejoice\nAll the earth rejoice" },
            { name: "VERSE", lyrics: "He wraps Himself in light\nAnd darkness tries to hide\nIt trembles at His voice\nTrembles at His voice" },
            { name: "CHORUS", lyrics: "How great is our God, sing with me\nHow great is our God and all will see\nHow great, how great is our God" },
            { name: "VERSE", lyrics: "Age to age, He stands\nAnd time is in His hands\nBeginning and the end [F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "The Godhead Three in One\nFather, Spirit, Son\nLion and the Lamb [F1](2x)[/F1]" },
            { name: "CHORUS", lyrics: "How great is our God, sing with me\nHow great is our God and all will see\nHow great, how great is our God" },
            { name: "VERSE", lyrics: "Name above all names\nWorthy of our praise\nMy heart will sing\nHow great is our God" },
            { name: "VERSE", lyrics: "[F1](Men)[/F1]\nName above all names\nWorthy of our praise\nMy heart will sing\nHow great is our God\n\n[F1](Women)[/F1]\nHow great is our God, sing with me\nHow great is our God and all will see\nHow great, how great is our God" },
            { name: "END", lyrics: "How great is our God, sing with me\nHow great is our God and all will see\nHow great, how great is our God" }
        ]
    },
    {
        title: "The Love Of God Is Greater Far",
        sections: [
            { name: "VERSE", lyrics: "The love of God is greater far\nThan tongue or pen can ever tell\nIt goes beyond the highest star\nAnd reaches to the lowest hell\nThere's not in man so foul a stain\nCan turn God's love away\nNor soul so lost but that the cost\nGod's love would gladly pay" },
            { name: "VERSE", lyrics: "Could we with ink the ocean fill\nAnd were the skies of parchment made\nWere every stalk on earth a quill\nAnd every man a scribe by trade\nTo write the love of God above\nWould drain the ocean dry\nNor could the scroll contain the whole\nThough stretched from sky to sky" },
            { name: "VERSE", lyrics: "When once I walked the guilty path\nAlive to sin to goodness dead\nDeserving naught of God but wrath\nHe sent his only Son instead\nWhat cause had he this slave to free\nBy giving up his Son\nGod's love it was no other cause\nNor other hope I own" },
            { name: "VERSE", lyrics: "Where should I seek a clearer sign\nWhen I may read the love of God\nIn each dark streak each graven line\nInscribed in Jesus' flesh and blood\nMy soul has heard no better word\nThan what each wound there tells\nI've found more hope in one red drop\nThan in all comforts else" },
            { name: "VERSE", lyrics: "Why in despair then should I sink\nMy life despise ungratefully\nWhat folly this when I but think\nThat Jesus died for me for me\nThough slanders yet my soul beset\nWith these let Christ contend\nThe wretch's plea and comfort he\nThe sinner's surest friend" }
        ]
    },
    {
        title: "To Follow Him",
        sections: [
            { name: "REFRAIN", lyrics: "All praise to Him\nWho has redeemed our lives.\nAll thanks to Him\nWho claims our hearts.\nWe gladly follow in obedience to Him\nOur God and King\nWho names us for Himself." },
            { name: "VERSE", lyrics: "For we have tasted\nOf the mercies of the Lord\nAnd we have seen how good His life can be.\nHe has renewed His favor day after day\nAnd constantly He proves Himself our help." },
            { name: "REFRAIN", lyrics: "All praise to Him\nWho has redeemed our lives.\nAll thanks to Him\nWho claims our hearts.\nWe gladly follow in obedience to Him\nOur God and King\nWho names us for Himself." },
            { name: "VERSE", lyrics: "How blessed are the men\nWho hear the call of God!\nMore blessed still the men\nWho answer Him!\nHow great the joy they have\nIn serving Him alone\nWho make of Him\nTheir portion and their all." },
            { name: "REFRAIN", lyrics: "All praise to Him\nWho has redeemed our lives.\nAll thanks to Him\nWho claims our hearts.\nWe gladly follow in obedience to Him\nOur God and King\nWho names us for Himself." },
            { name: "VERSE", lyrics: "What shall we offer to the Lord, Our faithful King,\nWho always leads us in His victory?\nA life of praise and adoration\nWe will seek\nAnd by His Spirit please Him\nAs His sons." },
            { name: "END", lyrics: "All praise to Him\nWho has redeemed our lives.\nAll thanks to Him\nWho claims our hearts.\nWe gladly follow in obedience to Him\nOur God and King\nWho names us for Himself." }
        ]
    },
    {
        title: "Holy Holy Holy Lord",
        sections: [
            { name: "VERSE", lyrics: "The powers of heaven bow, and thrones are set in place\nThe Father seated at the centre\nTen thousand thousands bring an endless hymn of praise\nSinging, Holy, holy Lord." },
            { name: "VERSE", lyrics: "And from his throne goes forth a blazing stream of flame\nAnd his is blessing, power and honour\nWho will not fear this God and glorify his name\nSinging, Holy, holy Lord?" },
            { name: "BRIDGE", lyrics: "Then to the great I AM\nOne like a Son of Man\nIs borne upon the clouds of glory\nThe heavens silent fall\nThen worthy comes the call\nAnd all the throne room cries out, Holy!" },
            { name: "CHORUS", lyrics: "All hail the victory of the Lamb\nCreation's king whose blood has foiled the serpent's plan\nRaised up to sit at God's right hand\nHoly, holy, holy Lord!" },
            { name: "BRIDGE", lyrics: "You are the first and last\nYour kingdom shall not pass\nYour reign established for the ages\nOur Saviour crucified\nYour wounds now glorified\nEnthroned upon your people's praises" },
            { name: "CHORUS", lyrics: "All hail the victor, Jesus Christ\nCreation ransomed in your sovereign sacrifice\nYour death triumphant wins us life\nHoly, holy, holy Lord!" },
            { name: "END", lyrics: "All hail the victory of the Lamb\nCreation's king whose blood has foiled the serpent's plan\nRaised up to sit at God's right hand\nHoly, holy, holy Lord! [F1](3x)[/F1]" }
        ]
    },
    {
        title: "Song Of Ascent",
        sections: [
            { name: "VERSE", lyrics: "Rise up we’ve heard the call\nto ascend the holy mountain\nTo praise the Lord of all\nto worship at his footstool\nWe do not come to a place of fear\nOf darkness and terror and storm\nBut to the heavenly Jerusalem\nWhere saints and angels praise before the throne" },
            { name: "CHORUS", lyrics: "Sing a song of ascent\nas they sang as they went\nTo the dwelling of God Almighty\nSing to him a new song oh awaken the dawn\nTo the place where he rests\nSing a song of ascent" },
            { name: "VERSE", lyrics: "Such grace we have been shown\nA kingdom opened to us\nThis world is not our home\nThis flesh no lasting dwelling\nBut our praise will rise above these things\nAnd silence the lies of the foe\nSo with hearts set on pilgrimage\nFrom strength to strength we go" },
            { name: "END", lyrics: "Sing a song of ascent\nas they sang as they went\nTo the dwelling of God Almighty\nSing to him a new song oh awaken the dawn\nTo the place where he rests\nSing a song of ascent\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "Shine On Us",
        sections: [
            { name: "CHORUS", lyrics: "Shine on us! Shine on us!\nLet Your face shine on us, O Lord\nAnd we shall be saved." },
            { name: "VERSE", lyrics: "Light of the world, true light of God\nShed on us your grace.\nBright morning star, rise in our hearts\nGive to us the light of\nThe glory of our God\nShining in Your face." },
            { name: "CHORUS", lyrics: "Shine on us! Shine on us!\nLet Your face shine on us, O Lord\nAnd we shall be saved." },
            { name: "VERSE", lyrics: "Lamp to our feet, light for our path\nBright eternal day\nPillar of fire, great burning torch\nYou are the light of\nThe knowledge of our God\nShowing us the way." },
            { name: "CHORUS", lyrics: "Shine on us! Shine on us!\nLet Your face shine on us, O Lord\nAnd we shall be saved." },
            { name: "VERSE", lyrics: "O blazing Sun of righteousness\nIn Your light we see.\nO Lamb of God, we seek Your face\nYou are the light of\nThe city of our God\nFor all eternity." },
            { name: "END", lyrics: "Shine on us! Shine on us!\nLet Your face shine on us, O Lord\nAnd we shall be saved." }
        ]
    },
    {
        title: "The Lord Is Here",
        sections: [
            { name: "VERSE", lyrics: "Hallelujah! Hallelujah!\nShout your praises on high\nFor the Lord is here.\nKing of kings and Lord of lords\nHoly, holy is He!" },
            { name: "VERSE", lyrics: "Put your hand in the air, everybody.\nShout your praises on high.\nThe Lord our God is here with us\nHe’s in our midst." },
            { name: "VERSE", lyrics: "He is faithful, yes, He is.\nThough we’re not He remains like this.\nNow let me hear everybody\nSing and dance\nFor the Lord is here." }
        ]
    },
    {
        title: "Let The Righteous Rejoice",
        sections: [
            { name: "REFRAIN", lyrics: "Praise the Lord, O my soul,\nAnd forget not all His benefits.\nPraise the Lord, O my soul.\nLet the righteous rejoice and be glad.\n[F1](2x)[/F1]" },
            { name: "VERSE", lyrics: "Blessed are they who hunger\nFor righteousness,\nSurely they will be filled.\nAnd those who suffer\nFor the sake of righteousness\nTheirs is the Kingdom of heaven." },
            { name: "REFRAIN", lyrics: "Praise the Lord, O my soul,\nAnd forget not all His benefits.\nPraise the Lord, O my soul.\nLet the righteous rejoice and be glad." },
            { name: "VERSE", lyrics: "Seek first His kingdom\nAnd His righteousness,\nMake God your portion in life.\nSecure your treasure in heaven alone\nWhere your treasure is\nYour heart will be also." },
            { name: "REFRAIN", lyrics: "Rejoice and be glad, O my soul.\nI know that my Redeemer lives\nAnd I shall see the face of God." },
            { name: "REFRAIN", lyrics: "Praise the Lord, O my soul,\nAnd forget not all His benefits.\nPraise the Lord, O my soul.\nLet the righteous rejoice and be glad." },
            { name: "END", lyrics: "Rejoice and be glad, O my soul.\nI know that my Redeemer lives\nAnd I shall see the face of God. [F1](3x)[/F1]" }
        ]
    },
    {
        title: "Arise My Soul",
        sections: [
            { name: "REFRAIN", lyrics: "Arise, my soul, be glad this day\nThe King of kings has called to you,\n“Follow Me, wherever I lead.\nLeave behind all things that burden you\nAnd let your heart rejoice in Me.\nI have come to lead you home.”" },
            { name: "VERSE", lyrics: "I have redeemed you.\nI’ve called you by name\nAnd you are mine.\nYou are precious in my eyes.\nYou are honored and I love you." },
            { name: "REFRAIN", lyrics: "Arise, my soul, be glad this day\nThe King of kings has called to you,\n“Follow Me, wherever I lead.\nLeave behind all things that burden you\nAnd let your heart rejoice in Me.\nI have come to lead you home.”" },
            { name: "VERSE", lyrics: "I am He who wipes away your sins.\nI remember them no more.\nI have poured my Spirit out on you.\nNow you say, “I am the Lord’s!”" },
            { name: "REFRAIN", lyrics: "Arise, my soul, be glad this day\nThe King of kings has called to you,\n“Follow Me, wherever I lead.\nLeave behind all things that burden you\nAnd let your heart rejoice in Me.\nI have come to lead you home.”" },
            { name: "VERSE", lyrics: "Hear, O daughter, incline your ear\nLeave behind your people\nAnd your father’s house.\nFor the King desires you.\nBow to Him for He is your Lord!" },
            { name: "REFRAIN", lyrics: "Arise, my soul, be glad this day\nThe King of kings has called to you,\n“Follow Me, wherever I lead.\nLeave behind all things that burden you\nAnd let your heart rejoice in Me.\nI have come to lead you home”" },
            { name: "END", lyrics: "Arise, my soul, be glad this day\nThe King of kings has called to you,\n“Follow Me, wherever I lead.\nLeave behind all things that burden you\nAnd let your heart rejoice in Me.\nI will come to bring you home.”" }
        ]
    },
    {
        title: "Have Your Way With Me",
        sections: [
            { name: "VERSE", lyrics: "I am the handmaid of the Lord\nBe it done to me according to Thy word.\nNot my will but Your will be done.\nTeach me Your ways\nAnd lead me in Your truth." },
            { name: "REFRAIN", lyrics: "Have Your way with me, O Lord.\nWork out Your will in my life.\nForm me according to Your ways,\nO Lord, at any cost to me." },
            { name: "VERSE", lyrics: "Not by might or by my own strength\nBut by Your Holy Spirit\nYou formed Your image in me.\nI must decrease and You must increase\nRoot out all things in me\nThat do not glorify You." },
            { name: "REFRAIN", lyrics: "Have Your way with me, O Lord.\nWork out Your will in my life.\nForm me according to Your ways,\nO Lord, at any cost to me.\n[F1](2x)[/F1]\nHave Your way with me [F1](2x)[/F1]" }
        ]
    },
    {
        title: "Sovereign Lord",
        sections: [
            { name: "VERSE", lyrics: "You, Lord, are my King,\nmy hope and my strength\nYou, Lord, are near me,\nsurround me and call me\nAnd I give my life to you\nboth now and for ever\nI worship before your throne.\nI lay my will before you\nSovereign Lord, sovereign Lord\n[F1](2x)[/F1]" }
        ]
    },
    {
        title: "You Alone Are Holy",
        sections: [
            { name: "VERSE", lyrics: "O Lord God Almighty, O Lord Most Holy\nYou are King of kings and Lord of lords\nThe Father of us all.\nAnd we bow down before You\nEvery creature shall adore You.\nYou are mighty God, the Messiah\nThe Savior of the world." },
            { name: "REFRAIN", lyrics: "You alone are holy!\nYou alone, O Lord!\nYou alone are worthy, Lamb of God!" },
            { name: "VERSE", lyrics: "O Lord God Almighty, O Lord Most Holy\nYou are King of kings and Lord of lords\nThe Father of us all.\nAnd we bow down before You\nEvery creature shall adore You.\nYou are mighty God, the Messiah\nThe Savior of the world." },
            { name: "REFRAIN", lyrics: "We behold Your splendor\nSeated on the throne\nRobed and crowned with glory\nEver more\n\nMighty Lord! Mighty Lord!" }
        ]
    },
    {
        title: "Fountain Of Life",
        sections: [
            { name: "VERSE", lyrics: "Fountain of life, ocean of love\nSource of all truth and beauty\nComing down from above." },
            { name: "VERSE", lyrics: "Torrent of joy, wellspring of hope\nRiver of living waters\nFlowing out from my soul." },
            { name: "VERSE", lyrics: "O God, my God, for You I long\nMy soul thirsts for You\nMy flesh faints for You\nForever to You I belong." },
            { name: "END", lyrics: "O God, my God, there at Your side\nThe fullness of grace\nThe light of Your face\nIn You am I satisfied." }
        ]
    },
    {
        title: "Where Else Could I Go",
        sections: [
            { name: "VERSE", lyrics: "My soul thirsts for you\nMy flesh faints for you\nO Lord for you alone I long\nThe flesh counts for nothing\nThere's life in your Spirit\nO Lord let me come to you" },
            { name: "PRE-CHORUS", lyrics: "For I know I'll never be whole\nUntil I'm one with you" },
            { name: "CHORUS", lyrics: "Where else could I go\nWhere else would I go\nWhere else could I go\nWhere else would I go\nOnly you have words of life eternal" },
            { name: "VERSE", lyrics: "My soul thirsts for you\nMy flesh faints for you\nO Lord for you alone I long\nThe flesh counts for nothing\nThere's life in your Spirit\nO Lord let me come to you" },
            { name: "PRE-CHORUS", lyrics: "For I know I'll never be whole\nUntil I'm one with you" },
            { name: "CHORUS", lyrics: "Where else could I go\nWhere else would I go\nWhere else could I go\nWhere else would I go\nOnly you have words of life eternal\n[F1](2x)[/F1]" },
            { name: "END", lyrics: "Only you have words of life O Lord [F1](2x)[/F1]\nOnly you have words of life eternal" }
        ]
    },
    {
        title: "The Voice Of One Calling In The Desert",
        sections: [
            { name: "INTRO", lyrics: "The voice of one calling in the desert\nPrepare the way of the Lord\nThe voice of one calling in the desert\nMake straight the path for the Lord" },
            { name: "REFRAIN", lyrics: "And every valley shall be lifted up\nEvery mountain and hill be made low\nAnd the crooked roads straight\nAnd the rough places plain\nAnd then all the world will see\nThe salvation of our God" },
            { name: "REFRAIN", lyrics: "This is the generation of those who seek the Lord [F1](2x)[/F1]\nThis is the generation called to prepare His way" },
            { name: "VERSE", lyrics: "So with His armor, fit for the fight\nWith the sword of His spirit held tight\nIn the strength of His might\nPut God's enemies to flight\nAnd then all the world will see\nThe salvation of our God" },
            { name: "REFRAIN", lyrics: "This is the generation of those who seek the Lord [F1](2x)[/F1]\nThis is the generation called to prepare His way" },
            { name: "VERSE", lyrics: "So rallied round His standard raised high\nMen of dust now raised to the sky\nSide by side, eye to eye\nHe is lord!, as one we'll cry\nAnd then all the world will see\nThe salvation of our God" },
            { name: "BRIDGE", lyrics: "Who is the King of Glory? Who is He?\nHe is the Lord, both strong and mighty\nWho is the King of Glory? Who is He?\nThe Lord Almighty, He is the King of Glory" },
            { name: "REFRAIN", lyrics: "This is the generation of those who seek the Lord [F1](2x)[/F1]\nThis is the generation called to prepare His way" },
            { name: "END", lyrics: "And every valley shall be lifted up\nEvery mountain and hill be made low\nAnd the crooked roads straight\nAnd the rough places plain\nAnd then all the world will see\nThe salvation of our God [F1](4x)[/F1]" }
        ]
    },
    {
        title: "Lord’s Day - Ordinary Time",
        sections: [
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "In the beginning was the Word,\nAnd the Word was with God,\nAnd the Word was God.\n[C1]All things were made through Him,\nand without Him nothing was made\nthat has been made.[/C1]" },
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "In Him was life,\nAnd the life\nwas the light of men.\n[C1]The light shines in the darkness,\nand the darkness\nhas not overcome it.[/C1]" },
            { name: "ASSISTANT", lyrics: "Heavenly Father, in honor of Your Son,\nLight of the World and Author of Life,\nwe are about to kindle\nthe light for the Lord’s Day.\nOn this day You raised Your Son,\nJesus, from the dead,\nand began the new creation." },
            { name: "ASSISTANT", lyrics: "May our celebration of\nHis resurrection this day\nbe filled with Your peace\nand heavenly blessing.\nBe gracious to us and cause\nYour Holy Spirit to dwell\nmore richly among us." },
            { name: "ASSISTANT", lyrics: "Father of mercy, continue\nYour loving kindness toward us.\nMake us worthy to walk\nin the way of Your Son,\nloyal to Your teaching,\nand unwavering in love and service." },
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "Keep far from us all anxiety,\ndarkness and gloom;\nand grant that peace,\nlight and joy ever abide among us.\n[C1]For in You is the fountain of life;\nIn Your light do we see light.[/C1]" },
            { name: "ASSISTANT", lyrics: "[F1](Light the candle)[/F1]" },
            { name: "ASSISTANT", lyrics: "Blessed are You, Lord our God,\nwho created light on the first day,\nand raised Your Son, the Light of the World,\nto begin the new creation." },
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "Blessed are You, Lord our God,\nKing of the Universe, who give us joy\nas we kindle the light for the Lord’s Day.\n[C1]Amen[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us trust in the Lord\nand in His saving help.\n[C1]The Lord is my light\nand my salvation.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us receive His life\nand rejoice in His presence.\n[C1]He is the true light\nthat enlightens every man.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us keep His commandments\nand walk in His ways.\n[C1]His word is a lamp\nto my feet and a light for my path.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us proclaim His goodness\nand show forth His glory.\n[C1]We are the light of the world\nand the salt of the earth.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Brothers and sisters,\nthis is the Lord’s Day.\n[C1]Let us welcome it in joy and peace.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Today we set aside the concerns of the week\nthat we may honor the Lord\nand celebrate His resurrection.\nToday we cease from our work\nin order to worship God,\nand remember the eternal life\nto which He has called us.\n[C1]The Lord Himself is with us,\nto refresh and strengthen us.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us welcome God\namong us and give Him glory.\n[C1]Let us love one another in Christ.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "May the Holy Spirit be with us,\nto deepen our devotion to the Lord,\nand to increase our zeal for the\nway of life He has given us.\n[C1]Amen.[/C1]" },
            { name: "LEADER", lyrics: "[F1](Worship)[/F1]" },
            { name: "LEADER", lyrics: "[F1](Men - Pour and raise the wine)[/F1]" },
            { name: "LEADER", lyrics: "Let us praise God with this symbol of joy,\nand thank Him for the\nblessings of the past week\nfor health, strength, and wisdom,\nfor our life together\nin [F1](Family/Community)[/F1]" },
            { name: "LEADER", lyrics: "for the discipline of our trials\nand temptations, for the happiness\nthat has come to us out of our work." },
            { name: "LEADER", lyrics: "Let us thank him this day especially for\nthe great blessings he has\nbestowed on us in Christ.\nFrom His fullness we have all\nreceived grace upon grace.\nWe who were dead through sin\nhave been brought to life" },
            { name: "LEADER", lyrics: "together with Christ,\nand raised up with Him,\nand made to sit in\nheavenly places with Him.\nLord our God, you have brought us\ninto the rest of Christ." },
            { name: "[C1]GROUP[/C1]", lyrics: "[C1]Now we live with Him\nthrough the Holy Spirit,\nand we look for the day\nwhen we will dwell with Him\nin Your everlasting Kingdom.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Blessed are you, Lord, our God,\nKing of the Universe,\nwho have created the fruit of the vine\n[C1]Amen.[/C1]" },
            { name: "LEADER", lyrics: "Blessed are you, Lord our God,\nfor the true rest you have\ngiven us in your Son Jesus,\nand for this day which is a\ncommemoration of his redeeming work.\nWe welcome this day with gladness,\nand consecrate it to the" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "celebration of His resurrection\nand of the new creation founded in Him.\nLook graciously upon your\nservants and show us your glory.\nBlessed are you, Lord our God,\nwho favor your people in\nthe days set aside to your honor.\n[C1]Amen.\n\n[F1](Pass the wine)[/F1][/C1]" },
            { name: "LEADER", lyrics: "[F1](Men - Raise the bread)[/F1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "The eyes of all look to you, O Lord,\nand you give them\ntheir food in due season.\n[C1]You open Your hand,\nYou satisfy the desire\nof every living thing.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Blessed are you,\nLord our God, King of the Universe,\nwho brings forth bread from the earth.\n[C1]Amen.\n\n[F1](Begin the meal)[/F1][/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us bless the Lord.\n[C1]Blessed be the name of the Lord\nfrom this time forth and forever.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us bless our God,\nof whose bounty we have partaken.\n[C1]Blessed be our God,\nof whose bounty we have partaken,\nand through whose goodness we live.[/C1]" },
            { name: "LEADER", lyrics: "Blessed are you, Lord our God,\nwho feed the whole world with your goodness,\nwith grace, with steadfast love and mercy.\nThrough your great goodness\nfood has never failed us.\nMay it not fail us for ever and ever,\nfor your great Name’s sake," },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "since you nourish and sustain all beings,\nand do good to all, and provide food for all\nyour creatures whom you have created.\nBlessed are you, Lord our God,\nKing of the Universe, who gives food to all.\n[C1]Blessed be His name forever.[/C1]" },
            { name: "LEADER", lyrics: "Blessed are you, Lord our God,\nfor by your great mercy\nwe have been born anew\nto a living hope through the resurrection\nof Jesus Christ from the dead,\nand to an inheritance" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "that is imperishable,\nundefiled and unfading.\nBlessed are You, Lord our God,\nKing of the Universe,\nfor giving us new life in Your Son.\n[C1]Blessed be His name forever.[/C1]" },
            { name: "LEADER", lyrics: "Have mercy, Lord our God,\nupon Your people who belong to Your Son,\nthe dwelling place of Your Spirit.\nGrant that the Christian people throughout\nthe world may attain the unity\nfor which Jesus prayed" },
            { name: "LEADER", lyrics: "on the eve of his sacrifice, and that we in\n[F1](Family/Community)[/F1]\nmay be a sign of that unity\nand a means of its growth.\nMay all your people be renewed\nin the power of your Spirit," },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "so that we might be\nwithout spot or blemish,\nand ready for your Son’s return.\nBlessed are you, Lord our God,\nKing of the Universe,\nRuler and Builder of your people.\n[C1]Blessed be His name forever.[/C1]" },
            { name: "LEADER", lyrics: "May the Lord bless you and keep you;\nmay the Lord make his face to shine\nupon you and be gracious to you;\nmay the Lord lift up his countenance\nupon you and give you peace." },
            { name: "[C1]GROUP[/C1]", lyrics: "[C1]Amen.\n\nHAPPY LORD'S DAY![/C1]" }
        ]
    },
    {
        title: "Lord’s Day - Advent",
        sections: [
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "In the beginning was the Word,\nAnd the Word was with God,\nAnd the Word was God.\n[C1]All things were made through Him,\nand without Him nothing was made\nthat has been made.[/C1]" },
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "In Him was life,\nAnd the life\nwas the light of men.\n[C1]The light shines in the darkness,\nand the darkness\nhas not overcome it.[/C1]" },
            { name: "ASSISTANT", lyrics: "Heavenly Father, in honor of Your Son,\nLight of the World and Author of Life,\nwe are about to kindle\nthe light for the Lord’s Day.\nOn this day You raised Your Son,\nJesus, from the dead,\nand began the new creation." },
            { name: "ASSISTANT", lyrics: "May our celebration of\nHis resurrection this day\nbe filled with Your peace\nand heavenly blessing.\nBe gracious to us and cause\nYour Holy Spirit to dwell\nmore richly among us." },
            { name: "ASSISTANT", lyrics: "Father of mercy, continue\nYour loving kindness toward us.\nMake us worthy to walk\nin the way of Your Son,\nloyal to Your teaching,\nand unwavering in love and service." },
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "Keep far from us all anxiety,\ndarkness and gloom;\nand grant that peace,\nlight and joy ever abide among us.\n[C1]For in You is the fountain of life;\nIn Your light do we see light.[/C1]" },
            { name: "ASSISTANT", lyrics: "[F1](Light the candle)[/F1]" },
            { name: "ASSISTANT", lyrics: "Blessed are You, Lord our God,\nwho created light on the first day,\nand raised Your Son, the Light of the World,\nto begin the new creation." },
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "Blessed are You, Lord our God,\nKing of the Universe, who give us joy\nas we kindle the light for the Lord’s Day.\n[C1]Amen[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us trust in the Lord\nand in His saving help.\n[C1]The Lord is my light\nand my salvation.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us receive His life\nand rejoice in His presence.\n[C1]He is the true light\nthat enlightens every man.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us keep His commandments\nand walk in His ways.\n[C1]His word is a lamp\nto my feet and a light for my path.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us proclaim His goodness\nand show forth His glory.\n[C1]We are the light of the world\nand the salt of the earth.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Brothers and sisters,\nthis is the Lord’s Day.\n[C1]Let us welcome it in joy and peace.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Today we set aside the concerns of the week\nthat we may honor the Lord\nand celebrate His resurrection.\nToday we cease from our work\nin order to worship God,\nand remember the eternal life\nto which He has called us.\n[C1]The Lord Himself is with us,\nto refresh and strengthen us.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us welcome God\namong us and give Him glory.\n[C1]Let us love one another in Christ.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "May the Holy Spirit be with us,\nto deepen our devotion to the Lord,\nand to increase our zeal for the\nway of life He has given us.\n[C1]Amen.[/C1]" },
            { name: "LEADER", lyrics: "[F1](Worship)[/F1]" },
            { name: "LEADER", lyrics: "[F1](Men - Pour and raise the wine)[/F1]" },
            { name: "LEADER", lyrics: "Let us praise God with this symbol of joy,\nand thank Him for the\nblessings of the past week\nfor health, strength, and wisdom,\nfor our life together\nin [F1](Family/Community)[/F1]" },
            { name: "LEADER", lyrics: "for the discipline of our trials\nand temptations, for the happiness\nthat has come to us out of our work." },
            { name: "LEADER", lyrics: "Let us thank Him this day especially for\nthe salvation we receive in Christ.\nBy His coming in the flesh,\nHe ransomed us from sin\nand the power of death,\nand by His coming again\nHe will renew all things," },
            { name: "LEADER", lyrics: "destroy every evil,\nand establish the eternal reign\nof God on earth.\nLord our God, You have made us\nYour sons and daughters\nthrough Jesus Christ." },
            { name: "[C1]GROUP[/C1]", lyrics: "[C1]Now we live with Him\nthrough the Holy Spirit,\nand we look for the day\nwhen we will dwell with Him\nin Your everlasting Kingdom.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Blessed are you, Lord, our God,\nKing of the Universe,\nwho have created the fruit of the vine\n[C1]Amen.[/C1]" },
            { name: "LEADER", lyrics: "Blessed are you, Lord our God,\nfor the true rest you have\ngiven us in your Son Jesus,\nand for this day which is a\ncommemoration of his redeeming work.\nWe welcome this day with gladness,\nand consecrate it to the" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "celebration of His resurrection\nand of the new creation founded in Him.\nLook graciously upon your\nservants and show us your glory.\nBlessed are you, Lord our God,\nwho favor your people in\nthe days set aside to your honor.\n[C1]Amen.\n\n[F1](Pass the wine)[/F1][/C1]" },
            { name: "LEADER", lyrics: "[F1](Men - Raise the bread)[/F1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "The eyes of all look to you, O Lord,\nand you give them\ntheir food in due season.\n[C1]You open Your hand,\nYou satisfy the desire\nof every living thing.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Blessed are you,\nLord our God, King of the Universe,\nwho brings forth bread from the earth.\n[C1]Amen.\n\n[F1](Begin the meal)[/F1][/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us bless the Lord.\n[C1]Blessed be the name of the Lord\nfrom this time forth and forever.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us bless our God,\nof whose bounty we have partaken.\n[C1]Blessed be our God,\nof whose bounty we have partaken,\nand through whose goodness we live.[/C1]" },
            { name: "LEADER", lyrics: "Blessed are you, Lord our God,\nwho feed the whole world with your goodness,\nwith grace, with steadfast love and mercy.\nThrough your great goodness\nfood has never failed us.\nMay it not fail us for ever and ever,\nfor your great Name’s sake," },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "since you nourish and sustain all beings,\nand do good to all, and provide food for all\nyour creatures whom you have created.\nBlessed are you, Lord our God,\nKing of the Universe, who gives food to all.\n[C1]Blessed be His name forever.[/C1]" },
            { name: "LEADER", lyrics: "Blessed are you, Lord our God,\nfor by your great mercy\nwe have been born anew\nto a living hope through the resurrection\nof Jesus Christ from the dead,\nand to an inheritance" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "that is imperishable,\nundefiled and unfading.\nBlessed are You, Lord our God,\nKing of the Universe,\nfor giving us new life in Your Son.\n[C1]Blessed be His name forever.[/C1]" },
            { name: "LEADER", lyrics: "Have mercy, Lord our God,\nupon Your people who belong to Your Son,\nthe dwelling place of Your Spirit.\nGrant that the Christian people throughout\nthe world may attain the unity\nfor which Jesus prayed" },
            { name: "LEADER", lyrics: "on the eve of his sacrifice, and that we in\n[F1](Family/Community)[/F1]\nmay be a sign of that unity\nand a means of its growth.\nMay all your people be renewed\nin the power of your Spirit," },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "so that we might be\nwithout spot or blemish,\nand ready for your Son’s return.\nBlessed are you, Lord our God,\nKing of the Universe,\nRuler and Builder of your people.\n[C1]Blessed be His name forever.[/C1]" },
            { name: "LEADER", lyrics: "May the Lord bless you and keep you;\nmay the Lord make his face to shine\nupon you and be gracious to you;\nmay the Lord lift up his countenance\nupon you and give you peace." },
            { name: "[C1]GROUP[/C1]", lyrics: "[C1]Amen.\n\nHAPPY LORD'S DAY![/C1]" }
        ]
    },
    {
        title: "Lord’s Day - Christmas",
        sections: [
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "In the beginning was the Word,\nAnd the Word was with God,\nAnd the Word was God.\n[C1]All things were made through Him,\nand without Him nothing was made\nthat has been made.[/C1]" },
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "In Him was life,\nAnd the life\nwas the light of men.\n[C1]The light shines in the darkness,\nand the darkness\nhas not overcome it.[/C1]" },
            { name: "ASSISTANT", lyrics: "Heavenly Father, in honor of Your Son,\nLight of the World and Author of Life,\nwe are about to kindle\nthe light for the Lord’s Day.\nOn this day You raised Your Son,\nJesus, from the dead,\nand began the new creation." },
            { name: "ASSISTANT", lyrics: "May our celebration of\nHis resurrection this day\nbe filled with Your peace\nand heavenly blessing.\nBe gracious to us and cause\nYour Holy Spirit to dwell\nmore richly among us." },
            { name: "ASSISTANT", lyrics: "Father of mercy, continue\nYour loving kindness toward us.\nMake us worthy to walk\nin the way of Your Son,\nloyal to Your teaching,\nand unwavering in love and service." },
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "Keep far from us all anxiety,\ndarkness and gloom;\nand grant that peace,\nlight and joy ever abide among us.\n[C1]For in You is the fountain of life;\nIn Your light do we see light.[/C1]" },
            { name: "ASSISTANT", lyrics: "[F1](Light the candle)[/F1]" },
            { name: "ASSISTANT", lyrics: "Blessed are You, Lord our God,\nwho created light on the first day,\nand raised Your Son, the Light of the World,\nto begin the new creation." },
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "Blessed are You, Lord our God,\nKing of the Universe, who give us joy\nas we kindle the light for the Lord’s Day.\n[C1]Amen[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us trust in the Lord\nand in His saving help.\n[C1]The Lord is my light\nand my salvation.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us receive His life\nand rejoice in His presence.\n[C1]He is the true light\nthat enlightens every man.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us keep His commandments\nand walk in His ways.\n[C1]His word is a lamp\nto my feet and a light for my path.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us proclaim His goodness\nand show forth His glory.\n[C1]We are the light of the world\nand the salt of the earth.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Brothers and sisters,\nthis is the Lord’s Day.\n[C1]Let us welcome it in joy and peace.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Today we set aside the concerns of the week\nthat we may honor the Lord\nand celebrate His resurrection.\nToday we cease from our work\nin order to worship God,\nand remember the eternal life\nto which He has called us.\n[C1]The Lord Himself is with us,\nto refresh and strengthen us.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us welcome God\namong us and give Him glory.\n[C1]Let us love one another in Christ.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "May the Holy Spirit be with us,\nto deepen our devotion to the Lord,\nand to increase our zeal for the\nway of life He has given us.\n[C1]Amen.[/C1]" },
            { name: "LEADER", lyrics: "[F1](Worship)[/F1]" },
            { name: "LEADER", lyrics: "[F1](Men - Pour and raise the wine)[/F1]" },
            { name: "LEADER", lyrics: "Let us praise God with this symbol of joy,\nand thank Him for the\nblessings of the past week\nfor health, strength, and wisdom,\nfor our life together\nin [F1](Family/Community)[/F1]" },
            { name: "LEADER", lyrics: "for the discipline of our trials\nand temptations, for the happiness\nthat has come to us out of our work." },
            { name: "LEADER", lyrics: "Let us thank him this day especially for\nthe great blessings he has\nbestowed on us in Christ.\nIn him the fullness of God\nwas pleased to dwell,\nreconciling earth to heaven,\nand imparting to us\nthe fullness of life." },
            { name: "LEADER", lyrics: "In him the Word became flesh,\nenabling men and women of flesh\nto become children of God.\nLord our God, you have revealed to us\nyour glory in Jesus your Son,\nand have made us partakers\nof the divine nature." },
            { name: "[C1]GROUP[/C1]", lyrics: "[C1]Now we live with Him\nthrough the Holy Spirit,\nand we look for the day\nwhen we will dwell with Him\nin Your everlasting Kingdom.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Blessed are you, Lord, our God,\nKing of the Universe,\nwho have created the fruit of the vine\n[C1]Amen.[/C1]" },
            { name: "LEADER", lyrics: "Blessed are you, Lord our God,\nfor the true rest you have\ngiven us in your Son Jesus,\nand for this day which is a\ncommemoration of his redeeming work.\nWe welcome this day with gladness,\nand consecrate it to the" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "celebration of His resurrection\nand of the new creation founded in Him.\nLook graciously upon your\nservants and show us your glory.\nBlessed are you, Lord our God,\nwho favor your people in\nthe days set aside to your honor.\n[C1]Amen.\n\n[F1](Pass the wine)[/F1][/C1]" },
            { name: "LEADER", lyrics: "[F1](Men - Raise the bread)[/F1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "The eyes of all look to you, O Lord,\nand you give them\ntheir food in due season.\n[C1]You open Your hand,\nYou satisfy the desire\nof every living thing.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Blessed are you,\nLord our God, King of the Universe,\nwho brings forth bread from the earth.\n[C1]Amen.\n\n[F1](Begin the meal)[/F1][/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us bless the Lord.\n[C1]Blessed be the name of the Lord\nfrom this time forth and forever.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us bless our God,\nof whose bounty we have partaken.\n[C1]Blessed be our God,\nof whose bounty we have partaken,\nand through whose goodness we live.[/C1]" },
            { name: "LEADER", lyrics: "Blessed are you, Lord our God,\nwho feed the whole world with your goodness,\nwith grace, with steadfast love and mercy.\nThrough your great goodness\nfood has never failed us.\nMay it not fail us for ever and ever,\nfor your great Name’s sake," },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "since you nourish and sustain all beings,\nand do good to all, and provide food for all\nyour creatures whom you have created.\nBlessed are you, Lord our God,\nKing of the Universe, who gives food to all.\n[C1]Blessed be His name forever.[/C1]" },
            { name: "LEADER", lyrics: "Blessed are you, Lord our God,\nfor by your great mercy\nwe have been born anew\nto a living hope through the resurrection\nof Jesus Christ from the dead,\nand to an inheritance" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "that is imperishable,\nundefiled and unfading.\nBlessed are You, Lord our God,\nKing of the Universe,\nfor giving us new life in Your Son.\n[C1]Blessed be His name forever.[/C1]" },
            { name: "LEADER", lyrics: "Have mercy, Lord our God,\nupon Your people who belong to Your Son,\nthe dwelling place of Your Spirit.\nGrant that the Christian people throughout\nthe world may attain the unity\nfor which Jesus prayed" },
            { name: "LEADER", lyrics: "on the eve of his sacrifice, and that we in\n[F1](Family/Community)[/F1]\nmay be a sign of that unity\nand a means of its growth.\nMay all your people be renewed\nin the power of your Spirit," },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "so that we might be\nwithout spot or blemish,\nand ready for your Son’s return.\nBlessed are you, Lord our God,\nKing of the Universe,\nRuler and Builder of your people.\n[C1]Blessed be His name forever.[/C1]" },
            { name: "LEADER", lyrics: "May the Lord bless you and keep you;\nmay the Lord make his face to shine\nupon you and be gracious to you;\nmay the Lord lift up his countenance\nupon you and give you peace." },
            { name: "[C1]GROUP[/C1]", lyrics: "[C1]Amen.\n\nHAPPY LORD'S DAY![/C1]" }
        ]
    },
    {
        title: "Lord’s Day - Lent",
        sections: [
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "In the beginning was the Word,\nAnd the Word was with God,\nAnd the Word was God.\n[C1]All things were made through Him,\nand without Him nothing was made\nthat has been made.[/C1]" },
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "In Him was life,\nAnd the life\nwas the light of men.\n[C1]The light shines in the darkness,\nand the darkness\nhas not overcome it.[/C1]" },
            { name: "ASSISTANT", lyrics: "Heavenly Father, in honor of Your Son,\nLight of the World and Author of Life,\nwe are about to kindle\nthe light for the Lord’s Day.\nOn this day You raised Your Son,\nJesus, from the dead,\nand began the new creation." },
            { name: "ASSISTANT", lyrics: "May our celebration of\nHis resurrection this day\nbe filled with Your peace\nand heavenly blessing.\nBe gracious to us and cause\nYour Holy Spirit to dwell\nmore richly among us." },
            { name: "ASSISTANT", lyrics: "Father of mercy, continue\nYour loving kindness toward us.\nMake us worthy to walk\nin the way of Your Son,\nloyal to Your teaching,\nand unwavering in love and service." },
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "Keep far from us all anxiety,\ndarkness and gloom;\nand grant that peace,\nlight and joy ever abide among us.\n[C1]For in You is the fountain of life;\nIn Your light do we see light.[/C1]" },
            { name: "ASSISTANT", lyrics: "[F1](Light the candle)[/F1]" },
            { name: "ASSISTANT", lyrics: "Blessed are You, Lord our God,\nwho created light on the first day,\nand raised Your Son, the Light of the World,\nto begin the new creation." },
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "Blessed are You, Lord our God,\nKing of the Universe, who give us joy\nas we kindle the light for the Lord’s Day.\n[C1]Amen[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us trust in the Lord\nand in His saving help.\n[C1]The Lord is my light\nand my salvation.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us receive His life\nand rejoice in His presence.\n[C1]He is the true light\nthat enlightens every man.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us keep His commandments\nand walk in His ways.\n[C1]His word is a lamp\nto my feet and a light for my path.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us proclaim His goodness\nand show forth His glory.\n[C1]We are the light of the world\nand the salt of the earth.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Brothers and sisters,\nthis is the Lord’s Day.\n[C1]Let us welcome it in joy and peace.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Today we set aside the concerns of the week\nthat we may honor the Lord\nand celebrate His resurrection.\nToday we cease from our work\nin order to worship God,\nand remember the eternal life\nto which He has called us.\n[C1]The Lord Himself is with us,\nto refresh and strengthen us.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us welcome God\namong us and give Him glory.\n[C1]Let us love one another in Christ.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "May the Holy Spirit be with us,\nto deepen our devotion to the Lord,\nand to increase our zeal for the\nway of life He has given us.\n[C1]Amen.[/C1]" },
            { name: "LEADER", lyrics: "[F1](Worship)[/F1]" },
            { name: "LEADER", lyrics: "[F1](Men - Pour and raise the wine)[/F1]" },
            { name: "LEADER", lyrics: "Let us praise God with this symbol of joy,\nand thank Him for the\nblessings of the past week\nfor health, strength, and wisdom,\nfor our life together\nin [F1](Family/Community)[/F1]" },
            { name: "LEADER", lyrics: "for the discipline of our trials\nand temptations, for the happiness\nthat has come to us out of our work." },
            { name: "LEADER", lyrics: "Let us thank him this day especially for\nthe victory over sin that he won\nfor us upon the cross,\nand for this season in which\nwe turn our eyes to him\nwith renewed fervor," },
            { name: "LEADER", lyrics: "hungering and thirsting\nfor righteousness.\nLord our God, we have fasted this week\nthat we might seek Your face." },
            { name: "[C1]GROUP[/C1]", lyrics: "[C1]And now we eat and drink\nwith joy as we celebrate\nyour salvation.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Blessed are you, Lord, our God,\nKing of the Universe,\nwho have created the fruit of the vine\n[C1]Amen.[/C1]" },
            { name: "LEADER", lyrics: "Blessed are you, Lord our God,\nfor the true rest you have\ngiven us in your Son Jesus,\nand for this day which is a\ncommemoration of his redeeming work.\nWe welcome this day with gladness,\nand consecrate it to the" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "celebration of His resurrection\nand of the new creation founded in Him.\nLook graciously upon your\nservants and show us your glory.\nBlessed are you, Lord our God,\nwho favor your people in\nthe days set aside to your honor.\n[C1]Amen.\n\n[F1](Pass the wine)[/F1][/C1]" },
            { name: "LEADER", lyrics: "[F1](Men - Raise the bread)[/F1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "The eyes of all look to you, O Lord,\nand you give them\ntheir food in due season.\n[C1]You open Your hand,\nYou satisfy the desire\nof every living thing.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Blessed are you,\nLord our God, King of the Universe,\nwho brings forth bread from the earth.\n[C1]Amen.\n\n[F1](Begin the meal)[/F1][/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us bless the Lord.\n[C1]Blessed be the name of the Lord\nfrom this time forth and forever.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us bless our God,\nof whose bounty we have partaken.\n[C1]Blessed be our God,\nof whose bounty we have partaken,\nand through whose goodness we live.[/C1]" },
            { name: "LEADER", lyrics: "Blessed are you, Lord our God,\nwho feed the whole world with your goodness,\nwith grace, with steadfast love and mercy.\nThrough your great goodness\nfood has never failed us.\nMay it not fail us for ever and ever,\nfor your great Name’s sake," },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "since you nourish and sustain all beings,\nand do good to all, and provide food for all\nyour creatures whom you have created.\nBlessed are you, Lord our God,\nKing of the Universe, who gives food to all.\n[C1]Blessed be His name forever.[/C1]" },
            { name: "LEADER", lyrics: "Blessed are you, Lord our God,\nfor by your great mercy\nwe have been born anew\nto a living hope through the resurrection\nof Jesus Christ from the dead,\nand to an inheritance" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "that is imperishable,\nundefiled and unfading.\nBlessed are You, Lord our God,\nKing of the Universe,\nfor giving us new life in Your Son.\n[C1]Blessed be His name forever.[/C1]" },
            { name: "LEADER", lyrics: "Have mercy, Lord our God,\nupon Your people who belong to Your Son,\nthe dwelling place of Your Spirit.\nGrant that the Christian people throughout\nthe world may attain the unity\nfor which Jesus prayed" },
            { name: "LEADER", lyrics: "on the eve of his sacrifice, and that we in\n[F1](Family/Community)[/F1]\nmay be a sign of that unity\nand a means of its growth.\nMay all your people be renewed\nin the power of your Spirit," },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "so that we might be\nwithout spot or blemish,\nand ready for your Son’s return.\nBlessed are you, Lord our God,\nKing of the Universe,\nRuler and Builder of your people.\n[C1]Blessed be His name forever.[/C1]" },
            { name: "LEADER", lyrics: "May the Lord bless you and keep you;\nmay the Lord make his face to shine\nupon you and be gracious to you;\nmay the Lord lift up his countenance\nupon you and give you peace." },
            { name: "[C1]GROUP[/C1]", lyrics: "[C1]Amen.\n\nHAPPY LORD'S DAY![/C1]" }
        ]
    },
    {
        title: "Lord’s Day - Easter",
        sections: [
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "In the beginning was the Word,\nAnd the Word was with God,\nAnd the Word was God.\n[C1]All things were made through Him,\nand without Him nothing was made\nthat has been made.[/C1]" },
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "In Him was life,\nAnd the life\nwas the light of men.\n[C1]The light shines in the darkness,\nand the darkness\nhas not overcome it.[/C1]" },
            { name: "ASSISTANT", lyrics: "Heavenly Father, in honor of Your Son,\nLight of the World and Author of Life,\nwe are about to kindle\nthe light for the Lord’s Day.\nOn this day You raised Your Son,\nJesus, from the dead,\nand began the new creation." },
            { name: "ASSISTANT", lyrics: "May our celebration of\nHis resurrection this day\nbe filled with Your peace\nand heavenly blessing.\nBe gracious to us and cause\nYour Holy Spirit to dwell\nmore richly among us." },
            { name: "ASSISTANT", lyrics: "Father of mercy, continue\nYour loving kindness toward us.\nMake us worthy to walk\nin the way of Your Son,\nloyal to Your teaching,\nand unwavering in love and service." },
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "Keep far from us all anxiety,\ndarkness and gloom;\nand grant that peace,\nlight and joy ever abide among us.\n[C1]For in You is the fountain of life;\nIn Your light do we see light.[/C1]" },
            { name: "ASSISTANT", lyrics: "[F1](Light the candle)[/F1]" },
            { name: "ASSISTANT", lyrics: "Blessed are You, Lord our God,\nwho created light on the first day,\nand raised Your Son, the Light of the World,\nto begin the new creation." },
            { name: "ASSISTANT-[C1]GROUP[/C1]", lyrics: "Blessed are You, Lord our God,\nKing of the Universe, who give us joy\nas we kindle the light for the Lord’s Day.\n[C1]Amen[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us trust in the Lord\nand in His saving help.\n[C1]The Lord is my light\nand my salvation.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us receive His life\nand rejoice in His presence.\n[C1]He is the true light\nthat enlightens every man.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us keep His commandments\nand walk in His ways.\n[C1]His word is a lamp\nto my feet and a light for my path.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us proclaim His goodness\nand show forth His glory.\n[C1]We are the light of the world\nand the salt of the earth.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Brothers and sisters,\nthis is the Lord’s Day.\n[C1]Let us welcome it in joy and peace.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Today we set aside the concerns of the week\nthat we may honor the Lord\nand celebrate His resurrection.\nToday we cease from our work\nin order to worship God,\nand remember the eternal life\nto which He has called us.\n[C1]The Lord Himself is with us,\nto refresh and strengthen us.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us welcome God\namong us and give Him glory.\n[C1]Let us love one another in Christ.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "May the Holy Spirit be with us,\nto deepen our devotion to the Lord,\nand to increase our zeal for the\nway of life He has given us.\n[C1]Amen.[/C1]" },
            { name: "LEADER", lyrics: "[F1](Worship)[/F1]" },
            { name: "LEADER", lyrics: "[F1](Men - Pour and raise the wine)[/F1]" },
            { name: "LEADER", lyrics: "Let us praise God with this symbol of joy,\nand thank Him for the\nblessings of the past week\nfor health, strength, and wisdom,\nfor our life together\nin [F1](Family/Community)[/F1]" },
            { name: "LEADER", lyrics: "for the discipline of our trials\nand temptations, for the happiness\nthat has come to us out of our work." },
            { name: "LEADER", lyrics: "Let us thank him this day especially for\nthe great victory he has won for us in Christ.\nBy his resurrection he has triumphed over sin,\nconquered death, defeated Satan,\nand won for us the riches\nof an eternal inheritance.\nWe who were perishing through sin" },
            { name: "LEADER", lyrics: "have been brought to life\ntogether with Christ,\nand raised up with him,\nand made to sit in\nheavenly places with him.\nLord our God, you have given us\na new birth through\nthe resurrection of Christ." },
            { name: "[C1]GROUP[/C1]", lyrics: "[C1]Now we live with Him\nthrough the Holy Spirit,\nand we look for the day\nwhen we will dwell with Him\nin Your everlasting Kingdom.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Blessed are you, Lord, our God,\nKing of the Universe,\nwho have created the fruit of the vine\n[C1]Amen.[/C1]" },
            { name: "LEADER", lyrics: "Blessed are you, Lord our God,\nfor the true rest you have\ngiven us in your Son Jesus,\nand for this day which is a\ncommemoration of his redeeming work.\nWe welcome this day with gladness,\nand consecrate it to the" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "celebration of His resurrection\nand of the new creation founded in Him.\nLook graciously upon your\nservants and show us your glory.\nBlessed are you, Lord our God,\nwho favor your people in\nthe days set aside to your honor.\n[C1]Amen.\n\n[F1](Pass the wine)[/F1][/C1]" },
            { name: "LEADER", lyrics: "[F1](Men - Raise the bread)[/F1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "The eyes of all look to you, O Lord,\nand you give them\ntheir food in due season.\n[C1]You open Your hand,\nYou satisfy the desire\nof every living thing.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Blessed are you,\nLord our God, King of the Universe,\nwho brings forth bread from the earth.\n[C1]Amen.\n\n[F1](Begin the meal)[/F1][/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us bless the Lord.\n[C1]Blessed be the name of the Lord\nfrom this time forth and forever.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Let us bless our God,\nof whose bounty we have partaken.\n[C1]Blessed be our God,\nof whose bounty we have partaken,\nand through whose goodness we live.[/C1]" },
            { name: "LEADER", lyrics: "Blessed are you, Lord our God,\nwho feed the whole world with your goodness,\nwith grace, with steadfast love and mercy.\nThrough your great goodness\nfood has never failed us.\nMay it not fail us for ever and ever,\nfor your great Name’s sake," },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "since you nourish and sustain all beings,\nand do good to all, and provide food for all\nyour creatures whom you have created.\nBlessed are you, Lord our God,\nKing of the Universe, who gives food to all.\n[C1]Blessed be His name forever.[/C1]" },
            { name: "LEADER", lyrics: "Blessed are you, Lord our God,\nfor by your great mercy\nwe have been born anew\nto a living hope through the resurrection\nof Jesus Christ from the dead,\nand to an inheritance" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "that is imperishable,\nundefiled and unfading.\nBlessed are You, Lord our God,\nKing of the Universe,\nfor giving us new life in Your Son.\n[C1]Blessed be His name forever.[/C1]" },
            { name: "LEADER", lyrics: "Have mercy, Lord our God,\nupon Your people who belong to Your Son,\nthe dwelling place of Your Spirit.\nGrant that the Christian people throughout\nthe world may attain the unity\nfor which Jesus prayed" },
            { name: "LEADER", lyrics: "on the eve of his sacrifice, and that we in\n[F1](Family/Community)[/F1]\nmay be a sign of that unity\nand a means of its growth.\nMay all your people be renewed\nin the power of your Spirit," },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "so that we might be\nwithout spot or blemish,\nand ready for your Son’s return.\nBlessed are you, Lord our God,\nKing of the Universe,\nRuler and Builder of your people.\n[C1]Blessed be His name forever.[/C1]" },
            { name: "LEADER", lyrics: "May the Lord bless you and keep you;\nmay the Lord make his face to shine\nupon you and be gracious to you;\nmay the Lord lift up his countenance\nupon you and give you peace." },
            { name: "[C1]GROUP[/C1]", lyrics: "[C1]Amen.\n\nHAPPY LORD'S DAY![/C1]" }
        ]
    },
    {
        title: "Lord’s Day - Closing",
        sections: [
            { name: "LEADER", lyrics: "Blessed be the Lord God of Israel,\nfor he has visited and redeemed his people,\nand has raised up a horn of salvation for us\nin the house of his servant David,\nas he spoke by the mouth of\nhis holy prophets from of old," },
            { name: "LEADER", lyrics: "that we should be saved from our enemies,\nand from the hand of all who hate us;\nto perform the mercy\npromised to our fathers,\nand to remember his holy covenant,\nthe oath which he swore\nto our father Abraham," },
            { name: "LEADER", lyrics: "to grant us that we,\nbeing delivered from the hand of our enemies,\nmight serve him without fear,\nin holiness and righteousness before\nHim all the days of our life.\nFor the day has dawned upon us from on high" },
            { name: "LEADER", lyrics: "to give light to those who sit\nin darkness and in the shadow of death,\nto guide our feet into the way of peace.\n[F1](Luke 1:68-79)[/F1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "[F1](Men - Pour and raise the wine)[/F1]\nBehold, God is my salvation.\n[C1]I will trust and will not be afraid.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "For God the Lord is my strength and song.\n[C1]And he has become my salvation.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Therefore with joy you will\ndraw water from the wells of salvation.\nSalvation belongs to the Lord.\n[C1]Your blessing be upon your people.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "The Lord of Hosts is with us.\n[C1]The God of Jacob is our refuge.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "God’s people had light and joy\nand gladness and honor.\n[C1]So be it with us.[/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "I will lift the cup of salvation\nand call upon the Name of the Lord.\nBlessed are you, Lord our God,\nKing of the Universe,\nwho have created the fruit of the vine.\n[C1]Amen.\n[F1](Pass the wine)[/F1][/C1]" },
            { name: "LEADER", lyrics: "[F1](Men - Raise the bread)[/F1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Blessed are you, Lord our God,\nKing of the Universe, who bring forth\nbread from the earth.\n[C1]Amen.\n[F1](Begin the meal)[/F1][/C1]" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "Blessed are You, Lord our God,\nKing of the Universe,\nwho sanctify us through faith\nin the resurrection of Christ\nand bless us in this day set apart\nto celebrate His victory.\nBlessed are you, Lord our God,\nwho have given us new life in your Son.\n[C1]Amen.\n[F1](Pass the wine)[/F1][/C1]" },
            { name: "LEADER", lyrics: "Father in Heaven, grant that we may begin\nthe working days which draw near to us in peace;\nfreed from all sin and transgression,\nfilled with the joy of Your Holy Spirit,\nand following in the ways of Your Son Jesus." },
            { name: "LEADER", lyrics: "knowing that in Christ our labor is not in vain.\nMay all that we do, in word or deed,\nbe to the praise of your glory\nthrough Jesus your Son.\nOur God and King, guide and defend\nthe people called by Your Name." },
            { name: "LEADER", lyrics: "Strengthen and prosper all who\ncherish thoughts of good towards your people,\nand fulfill their purposes,\nbut frustrate those who devise\nevil plans against your people,\nand make their designs of no effect;" },
            { name: "LEADER", lyrics: "as it is said,\n“Take counsel together,\nbut it will come to nothing;\nspeak a word, but it will not stand,\nfor God is with us”\n[F1](Isaiah 8:10)[/F1]" },
            { name: "LEADER", lyrics: "Open to us, Father of Mercies\nand Lord of Forgiveness,\nin this week and in the weeks to come,\nthe gates of heavenly help and rejoicing,\nof holiness and peace,\nof the study of your teaching and of prayer.\nIn us also let the Scripture be fulfilled:" },
            { name: "LEADER-[C1]GROUP[/C1]", lyrics: "How beautiful on the mountains\nare the feet of him who brings good news,\nwho heralds peace, brings happiness,\nproclaims salvation,\nwho says to Zion, “Your God reigns.”\n[F1](Isaiah 52:7)[/F1]\n[C1]Amen.[/C1]" },
        ]
    },
    {
        title: "Night Prayers",
        sections: [
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "PSALM 4", lyrics: "When I call, answer me,\nO God of justice;\nFrom anguish You released me,\nhave mercy and hear me!\n[C1]O men, how long\nwill your hearts be closed?\nWill you love what is futile\nand seek what is false?[/C1]" },
            { name: "PSALM 4", lyrics: "It is the Lord who grants favors\nto those whom He loves;\nThe Lord hears me\nwhenever I call Him.\n[C1]Fear Him, do not sin,\nponder on your bed and be still.\nMake justice your sacrifice\nand trust in the Lord.\n[/C1]" },
            { name: "PSALM 4", lyrics: "“What can bring us\nhappiness?” many say.\nLift up the light\nof Your face on us, O Lord.\n[C1]You have put into my heart\na greater joy\nThan they have from abundance\nof corn and new wine.\n[/C1]" },
            { name: "PSALM 4", lyrics: "I will lie down in peace\nand sleep comes at once.\nFor You alone, Lord,\nmake me dwell in safety." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "PSALM 91", lyrics: "He who dwells in the shelter\nof the Most High\nAnd abides in the shade\nof the Almighty\n[C1]Says to the Lord, “My refuge,\nMy stronghold, my God\nin whom I trust!”[/C1]" },
            { name: "PSALM 91", lyrics: "It is He who will free you from the snare\nOf the fowler who seeks to destroy you.\n[C1]He will conceal you with his pinions\nAnd under His wings\nyou will find refuge.[/C1]" },
            { name: "PSALM 91", lyrics: "You will not fear the terror of the night\nNor the arrow that flies by day.\n[C1]Nor the plague that prowls\nin the darkness\nNor the scourge that\nlays waste at noon.[/C1]" },
            { name: "PSALM 91", lyrics: "A thousand may fall at your side,\nTen thousand fall at your right.\n[C1]You it will never approach\nHis faithfulness is buckler and shield.[/C1]" },
            { name: "PSALM 91", lyrics: "Your eyes have only to look\nTo see how the wicked are repaid.\n[C1]You who have said, “Lord, my refuge!”\nAnd have made the Most High\nyour dwelling.[/C1]" },
            { name: "PSALM 91", lyrics: "Upon you no evil shall fall\nNo plague approach where you dwell.\n[C1]For you has He commanded His angels\nTo keep you in all your ways.[/C1]" },
            { name: "PSALM 91", lyrics: "They shall bear you upon their hands\nLest you strike your foot against a stone.\n[C1]On the lion and the viper you will tread\nAnd trample the young lion\nand the dragon.[/C1]" },
            { name: "PSALM 91", lyrics: "Since he clings to Me in love,\nI will free him\nProtect him for he knows My name.\n[C1]When he calls I shall answer,\n“I am with you.\nI will save him in distress\nand give him glory.”[/C1]" },
            { name: "PSALM 91", lyrics: "With length of life I will content him,\nI shall let him see My saving power." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]GROUP[/C1]", lyrics: "[C1][F1](INTERCESSION)[/F1][/C1]" },
            { name: "[C1]GROUP[/C1]", lyrics: "[C1]Lord, save us while we are awake.\nProtect us while we sleep.\nAnd Christ with whom\nwe keep our watch\nWill guard our souls in peace.[/C1]" },
            { name: "CANTOR", lyrics: "Now, Lord, you will let\nyour servant go in peace\nAccording to your word\nFor my eyes have seen your saving deed\nWhich you have set before all men\nA light for revelation to the Gentiles\nAnd for glory to your people Israel." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "CANTOR", lyrics: "May the Almighty and merciful Lord\nGrant us a restful night and a peaceful death." },
            { name: "[C1]GROUP[/C1]", lyrics: "[C1]Amen[/C1]" }
        ]
    },
    {
        title: "Morning Prayer WK1 Monday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 5)[/F1]\nI lift up my heart to you, O Lord,\nand you will hear my morning prayer." },
            { name: "PSALM 5", lyrics: "To my words give ear, O Lord,\ngive heed to my groaning.\nAttend to the sound of my cries,\nmy King and my God.\n[C1]It is you whom I invoke, O Lord.\nIn the morning you hear me;\nin the morning I offer you my prayer,\nwatching and waiting.[/C1]" },
            { name: "PSALM 5", lyrics: "You are no God who loves evil;\nno sinner is your guest.\nThe boastful shall not stand their ground\nbefore your face.\n[C1]You hate all who do evil;\nyou destroy all who lie.\nThe deceitful and bloodthirsty man\nthe detests.[/C1]" },
            { name: "PSALM 5", lyrics: "But I through the greatness of your love\nhave access to your house.\nI bow down before your holy temple.\nFilled with awe.\n[C1]+ Lead me, Lord, in your justice,\nbecause of those who lie in wait;\nmake clear your way before me.[/C1]" },
            { name: "PSALM 5", lyrics: "No truth can be found in their mouths,\ntheir heart is all mischief,\ntheir throat a wide-open grave,\nall honey their speech.\n[C1]All those who protect shall be glad\nand ring out their joy.\nYou shelter them; in you they rejoice,\nthose who love Your name.[/C1]" },
            { name: "PSALM 5", lyrics: "It is you who bless the just man, Lord:\nyou surround Him with favor as with a shield." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 5)[/F1]\nI lift up my heart to you, O Lord,\nand you will hear my morning prayer.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 29)[/F1]\nAdore the Lord in his holy court" },
            { name: "PSALM 29", lyrics: "O give the Lord, you sons of God,\ngive the Lord glory and power;\ngive the Lord the glory of His name.\nAdore the Lord in his holy court.\n[C1]The Lord’s voice resounding on the waters,\nthe Lord on the immensity of waters;\nthe voice of the Lord, full of power,\nthe voice of the Lord, full of splendor.[/C1]" },
            { name: "PSALM 29", lyrics: "The Lord’s voice shattering the cedars,\nthe Lord shatters the cedars of Lebanon;\nhe make Lebanon leap like a calf\nand Sirion like a your wild-ox.\n[C1]+ The Lord’s voice flashes flames of fire.\nThe Lord’s voice shaking the wilderness,\nthe Lord shakes the wilderness of Kadesh;\nthe Lord’s voice rending the oak tree\nand stripping the forest bare.[/C1]" },
            { name: "PSALM 29", lyrics: "The God of Glory thunders.\nIn His temple they all cry: “Glory!”\nThe Lord sat enthroned over the flood;\nthe Lord sits as king for ever.\n[C1]The Lord will give strength to his people,\nthe Lord will bless his people with peace.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 29)[/F1]\nAdore the Lord in his holy court[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK1 Tuesday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 24)[/F1]\nThe man whose deeds are blameless\nand whose heart is pure will climb\nthe mountain of the Lord." },
            { name: "PSALM 24", lyrics: "The Lord’s is the earth and its fullness,\nthe world and all its peoples.\nIt is he who set it on the seas;\non the waters He made it firm.\n[C1]Who shall climb the mountain of the Lord?\nWho shall stand in His holy place?\n+ The man with clean hands and pure heart,\nwho desires not worthless things,\nwho has not sworn so as to deceive his neighbor.[/C1]" },
            { name: "PSALM 24", lyrics: "He shall receive blessings from the Lord\nand reward from the God who saves him.\nSuch are the men who seek Him,\nseek the face of the God of Jacob.\n[C1]+ O gates, lift high your heads;\ngrow higher, ancient doors.\nLet Him enter, the king of glory![/C1]" },
            { name: "PSALM 24", lyrics: "+ Who I the king of glory?\nThe Lord, the mighty, the valiant,\nthe Lord, the valiant in war.\n[C1]+ O gates, lift high your heads;\ngrow higher, ancient doors.\nLet Him enter, the king of glory![/C1]" },
            { name: "PSALM 24", lyrics: "+ Who is he, the king of glory?\nHe, the Lord of armies,\nhe is the king of glory." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 24)[/F1]\nThe man whose deeds are blameless\nand whose heart is pure will climb\nthe mountain of the Lord.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 33)[/F1]\nThe loyal heart must praise the Lord" },
            { name: "PSALM 33", lyrics: "Ring out your joy to the Lord, O you just;\nfor praise is fitting for loyal hearts.\n[C1]Give thanks to the Lord upon the lyre,\nwith a ten-stringed harp sing Him songs.\nO sing Him a song that is new,\nplay loudly, will all your skill.[/C1]" },
            { name: "PSALM 33", lyrics: "For the word of the Lord is faithful\nand all His works to be trusted.\nThe Lord loves justice and right\nand fills the earth with His love.\n[C1]By His word the heavens were made,\nby the breath of his mouth all the stars.\nHe collects the waves of the ocean;\nhe stores up the depths of the sea.[/C1]" },
            { name: "PSALM 33", lyrics: "Let all the earth fear the Lord,\nall who live in the world revere Him.\nHe spoke; and it came to be.\nhe commanded; it sprang into being.\n[C1]He frustrates the designs of the nations,\nhe defeats the plans of the peoples.\nHis own designs shall stand for ever,\nthe plans of his heart from age to age.[/C1]" },
            { name: "PSALM 33", lyrics: "They are happy, whose God is the Lord,\nthe people he has chosen as his own.\nFrom the heavens the Lord looks forth,\nhe sees all the children of men.\n[C1]From the place where he dwells He gazes\non all the dwellers of the earth,\nhe who shapes the hearts of them all\nand considers all their deeds.[/C1]" },
            { name: "PSALM 33", lyrics: "A king is not saved by his army,\nnor a warrior preserved by his strength.\nA vain hope for safety is the horse;\ndespite its power it cannot save.\n[C1]The Lord looks on those who revere him,\non those who hope in his love,\nto rescue their souls from death,\nto keep them alive in famine.[/C1]" },
            { name: "PSALM 33", lyrics: "Our soul is waiting for the Lord.\nThe Lord is our help and our shield.\nIn him do our hearts find joy.\nWe trust in his Holy Name.\n[C1]May your love be upon us, O Lord,\nas we place all our hope in you.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 33)[/F1]\nThe loyal heart must praise the Lord.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK1 Wednesday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 36)[/F1]\nOur Lord, in your light we see light itself." },
            { name: "PSALM 36", lyrics: "Sin speaks to the sinner\nin the depths of his heart.\nThere is no fear of God\nbefore his eyes\n[C1]He so flatters himself in hi mind\nthat he knows not his guilt.\nIn his mouth are mischief and deceit.\nAll wisdom is gone.[/C1]" },
            { name: "PSALM 36", lyrics: "He plots the defeat of goodness\nas he lies on his bed.\nHe has set his foot on evil ways,\nhe clings to what is evil.\n[C1]Your love, Lord, reaches to heaven;\nyour truth to the skies.\nYour justice is like God’s mountain,\nyour judgments like the deep.[/C1]" },
            { name: "PSALM 36", lyrics: "To both man and the beast you give protection.\nO Lord, how precious is your love\nmy God, the sons of men\nfind refuge in the shelter of your wings.\n[C1]They feast on the riches of your house;\nthey drink from the stream of your delight.\nIn you is the source of life\nand in your light we see light.[/C1]" },
            { name: "PSALM 36", lyrics: "Keep on loving those who know you,\ndoing justice for upright hearts.\nLet the foot of the proud not crush me\nnor the hand of the wicked cast me out.\n[C1]See how the evil-doers fall!\nFlung down, they shall never arise.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 36)[/F1]\nO Lord, in your light we see light itself.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 47)[/F1]\nExult in God’s presence with hymns of praise." },
            { name: "PSALM 47", lyrics: "All peoples, clap your hands,\ncry to God with shouts of joy!\nFor the Lord, the Most High, we must fear,\ngreat king over all the earth.\n[C1]He subdues peoples under us\nand nations under our feet.\nOur inheritance, our glory, is from Him,\ngive to Jacob out of love.[/C1]" },
            { name: "PSALM 47", lyrics: "God goes up with shouts of joy;\nthe Lord goes up with trumpet blast.\nSing praise for God, sing praise,\nsing praise to our King, sing praise.\n[C1]God is King of all the earth.\nSing praise with all your skill.\nGod is King over the nations;\nGod reigns on His holy throne.[/C1]" },
            { name: "PSALM 47", lyrics: "The princes of the peoples are assembled\nwith the people of Abraham’s God.\nThe rulers of the earth belong to God,\nto God who reigns over all." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 47)[/F1]\nExult in God’s presence with hymns of praise.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK1 Thursday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 57)[/F1]\nAwake, lyre and harp,\nwith praise let us awake the dawn" },
            { name: "PSALM 57", lyrics: "Have mercy on me, God, have mercy\nfor in you my soul has taken refuge.\nIn the shadow of your wings I take refuge\ntill the storms of destruction pass by.\n[C1]I call to God the Most High,\nto God who has always been my help.\nMay He send from heaven and save me\nand shame those who assail me.[/C1]" },
            { name: "PSALM 57", lyrics: "+ May God send His truth and His love.\nMy soul lies down among lions,\nwho would devour the sons of men.\nTheir teeth are spears and arrows,\ntheir tongue a sharpened sword.\n[C1]O God, arise above the heavens;\nmay your glory shine one earth![/C1]" },
            { name: "PSALM 57", lyrics: "They laid a snare for my steps,\nmy soul was bowed down.\nThey dug a pit in my path\nbut fell in it themselves.\n[C1]My heart is ready, O God,\nmy heart is ready.[/C1]" },
            { name: "PSALM 57", lyrics: "I will sing, I will sing your praise.\nAwake, my soul,\nawake, lyre and harp,\nI will awake the dawn.\n[C1]I will thank you, Lord, among the peoples,\namong the nations I will praise you\nfor your love reaches to the heavens\nand your truth to the skies.[/C1]" },
            { name: "PSALM 57", lyrics: "O God, arise above the heavens;\nmay Your glory shine on earth!" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 57)[/F1]\nAwake, lyre and harp,\nwith praise let us awake the dawn.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 48)[/F1]\nThe Lord is great and worthy\nto be praised in the city of our God." },
            { name: "PSALM 48", lyrics: "The Lord is great and worthy to be praised\nin the city of our God.\nHis holy mountain rises in beauty,\nthe joy of all the earth.\n[C1]Mount Zion, true pole of the earth,\nthe Great King’s city!\nGod, in the midst of its citadels,\nhas shown himself its stronghold.[/C1]" },
            { name: "PSALM 48", lyrics: "For the kings assembled together,\ntogether they advanced.\nThey saw; at once they were astounded;\ndismayed, they fled in fear.\n[C1]A trembling seized them there,\nlike the pangs of birth.\nBy the east wind you have destroyed\nthe ships of Tarshish.[/C1]" },
            { name: "PSALM 48", lyrics: "As we have heard, so we have seen\nin the city of God,\nin the city of the Lord of hosts\nwhich God upholds for ever.\n[C1]O God, we ponder Your love\nwithin Your temple.\nYour praise, O God, like your name\nreaches to the ends of the earth.[/C1]" },
            { name: "PSALM 48", lyrics: "With justice your right hand is filled.\nMount Zion rejoices;\nthe people of Judah rejoice\nat the sight of your judgements.\n[C1]Walk through Zion, walk all round it;\ncount the number of its towers.\nReview all its ramparts,\nexamine its castles,[/C1]" },
            { name: "PSALM 48", lyrics: "That you may tell the next generation\nthat such is our God,\nour God for ever and always.\nIt is He who leads us." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 48)[/F1]\nThe Lord is great and worthy\nto be praised in the city of our God.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK2 Sunday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 118)[/F1]\nBlessed is he who comes\nin the name of the Lord, alleluia." },
            { name: "PSALM 118", lyrics: "Give thanks to the Lord for he is good,\nfor his love endures for ever.\n[C1]Let the sons of Israel say:\n“His love endures for ever.”\nLet the sons of Aaron say:\n“His love endures for ever.”\nLet those who fear the Lord say:\n“His love endures for ever.”[/C1]" },
            { name: "PSALM 118", lyrics: "I called to the Lord in my distress;\nhe answered and freed me.\nThe Lord is at my side; I do not fear.\nWhat can man do against me?\nThe Lord is at my side as my helper;\nI shall look down on my foes.\n[C1]It is better to take refuge in the Lord\nthan to trust in men:\nit is better to take refuge in the Lord\nthan to trust in princes.[/C1]" },
            { name: "PSALM 118", lyrics: "The nations all encompassed me;\nin the Lord’s name I crushed them.\nThey encompassed me, compassed me about;\nin the Lord’s name I crushed them.\n+ They compassed me about like bees;\nthey blazed life a fire among thorns.\nIn the Lord’s name I crushed them." },
            { name: "PSALM 118", lyrics: "[C1]I was hard-pressed and was falling\nbut the Lord came to help me.\nThe Lord is my strength and my song;\nhe is my savior.\nThere are shouts of joy and victory\nin the tents of the just.[/C1]" },
            { name: "PSALM 118", lyrics: "The Lord’s right had has triumphed;\nhis right hand raised me.\n+ The Lord’s right hand has triumphed;\nI shall not die, I shall live\nand recount His deeds.\nI was punished, I was punished by the Lord,\nbut not doomed to die." },
            { name: "PSALM 118", lyrics: "[C1]Open to me the gate of holiness:\nI will enter and give thanks.\nThis is the Lord’s own gate.\nWhere the just may enter.\nI will thank you for you have answered\nand you are my savior.[/C1]" },
            { name: "PSALM 118", lyrics: "The stone which the builders rejected\nhas become the corner stone.\nThis is the work of the Lord,\na marvel in our eyes.\nThis day was made by the Lord;\nwe rejoice and are glad." },
            { name: "PSALM 118", lyrics: "[C1]O Lord, grant us salvation;\no Lord, grant us success.\nBlessed in the name of the Lord\nis he who comes.\nWe bless you from the house of the Lord;\nthe Lord is our light.[/C1]" },
            { name: "PSALM 118", lyrics: "Go forward in procession with branches\neven to the altar.\nYou are my God, I thank you.\nMy God, I praise you.\nGive thanks to the Lord for He is good;\nfor His love endures for ever." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 118)[/F1]\nBlessed is he who comes\nin the name of the Lord, alleluia.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 150)[/F1]\nPraise the Lord for his infinite greatness, alleluia." },
            { name: "PSALM 150", lyrics: "Praise God in his holy place,\npraise him in his mighty heavens.\nPraise him for his powerful deeds,\npraise his surpassing greatness.\n[C1]O praise him with sound of trumpet,\npraise him with lute and harp.\nPraise him with timbrel and dance,\npraise him with strings and pipes.[/C1]" },
            { name: "PSALM 150", lyrics: "O praise him with resounding cymbals,\npraise him with clashing of cymbals.\nLet everything that lives and that breathes\ngive praise to the Lord." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 150)[/F1]\nPraise the Lord for his infinite greatness, alleluia.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK2 Monday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 42)[/F1]\nWhen will I come to the end of my pilgrimage\nand enter the presence of God?" },
            { name: "PSALM 42", lyrics: "Like the deer that yearns\nfor running streams,\nso my soul is yearning\nfor you, my God\n[C1]My soul is thirsting for God,\nthe God of my life;\nwhen can I enter and see\nthe face of God?[/C1]" },
            { name: "PSALM 42", lyrics: "My tears have become my bread,\nby night, by day,\nas I hear it said all the day long:\n“Where is your God?”\n[C1]These things will I remember\nas I pour out my soul:\nhow I would lead the rejoicing crowd\ninto the house of God,\namid cries of gladness and thanksgiving,\nthe throng wild with joy.[/C1]" },
            { name: "PSALM 42", lyrics: "Why are you cast down, my soul,\nwhy groan within me?\nHope in God; I will praise Him still,\nmy savior and my God.\n[C1]My soul is cast down within me\nas I think of you\nfrom the country of Jordan and Mount Hermon,\nfrom the Hill of Mizar.[/C1]" },
            { name: "PSALM 42", lyrics: "Deep is calling on deep,\nin the roar of waters:\nyour torrents and all your waves\nswept over me.\n[C1]By day the Lord will send\nhis loving kindness;\nby night I will sing to him,\npraise the God of my life.[/C1]" },
            { name: "PSALM 42", lyrics: "I will say to God, my rock:\n“Why have you forgotten me?\nWhy do I go mourning,\noppressed by the foe?”\n[C1]With cries that pierce me to the heart,\nmy enemies revile me,\naaying to me all the day long:\n“Where is your God?”[/C1]" },
            { name: "PSALM 42", lyrics: "Why are you cast down, my soul,\nwhy groan within me?\nHope in God; I will praise him still,\nmy savior and my God." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 42)[/F1]\nWhen will I come to the end of my pilgrimage\nand enter the presence of God?[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 19A)[/F1]\nThe vaults of heaven\nring with your praise, O Lord." },
            { name: "PSALM 19A", lyrics: "The heavens proclaim the glory of God\nand the firmament shows forth the work of his hands.\nDay unto day takes up the story\nand night unto night makes known the message.\n[C1]+ No speech, no word, no voice is heard\nyet their span extends through all the earth,\ntheir words to the utmost bounds of the world.[/C1]" },
            { name: "PSALM 19A", lyrics: "+ There he has placed a tent for the sun,\nit comes forth like a bridegroom coming from his tent,\nrejoices like a champion to run its course.\n[C1]+ At the end of the sky is the rising of the sun;\nto the furthest end of the sky is its course.\nThere is nothing concealed from its burning heat.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 19A)[/F1]\nThe vaults of heaven\nring with your praise, O Lord.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK2 Tuesday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 43)[/F1]\nLord, send forth your light and your truth." },
            { name: "PSALM 43", lyrics: "Defend me, O God, and plead my cause\nagainst a godless nation.\nFrom a deceitful and cunning men\nrescue me, O God.\n[C1]Since you, O God, are my stronghold,\nwhy have you rejected me?\nWhy do I go mourning\noppressed by the foe?[/C1]" },
            { name: "PSALM 43", lyrics: "O send forth your light and your truth;\nlet these be my guide.\nLet them bring me to your holy mountain\nto the place where you dwell.\n[C1]And I will come to the altar of God,\nthe God of my joy.\nMy redeemer, I will thank you on the harp,\no God, my God.[/C1]" },
            { name: "PSALM 43", lyrics: "Why are you cast down, my soul,\nwhy groan within me?\nHope in God; I will praise him still,\nmy savior and my God." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 43)[/F1]\nLord, send forth your light and your truth.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 65)[/F1]\nTo you, O God, our praise is due in Zion." },
            { name: "PSALM 65", lyrics: "To you, our praise is due\nin Zion, O God.\nTo You we pay our vows,\nyou who hear our prayer.\n[C1]To you all flesh will come\nwith its burden of sin.\nToo heavy for us our offenses,\nbut you wipe them away.[/C1]" },
            { name: "PSALM 65", lyrics: "Blessed is he whom you choose and call\nto dwell in your courts.\nWe are filled with the blessings of your house,\nof your holy temple.\n[C1]You keep your pledge with wonders,\nO God our savior,\nthe hope of all the earth\nand of far distant isles.[/C1]" },
            { name: "PSALM 65", lyrics: "You uphold the mountains with your strength,\nyou are girded with power.\n+ You still the roaring of the seas,\nthe roaring of their waves\nand the tumult of the peoples.\n[C1]The ends of the earth stand in awe\nat the sight of your wonders.\nThe lands of sunrise and sunset\nyou fill with your joy.[/C1]" },
            { name: "PSALM 65", lyrics: "You care for the earth, give it water,\nyou fill it with riches.\nYour river in heaven brims over\nto provide its grain.\n[C1]And thus you provide for the earth;\nyou drench its furrows,\nyou level it, soften it with showers,\nyou bless its growth.[/C1]" },
            { name: "PSALM 65", lyrics: "+ You crown the year with your goodness.\nAbundance flows in your steps,\nIn the pastures of the wilderness it flows.\n[C1]The hills are girded with joy,\nthe meadows covered with flocks,\nthe valleys are decked with wheat.\nThey shout for joy, yes, they sing.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 65)[/F1]\nTo you, O God, our praise is due in Zion.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK2 Wednesday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 77)[/F1]\nO God, all your ways are holy;\nwhat god can compare with our God?" },
            { name: "PSALM 77", lyrics: "+ In the day of my distress I sought the Lord.\nMy hands were raised at night without ceasing;\nmy soul refused to be consoled.\nI remembered my God and I groaned.\nI pondered and my spirit fainted." },
            { name: "PSALM 77", lyrics: "[C1]You withheld sleep from my eyes.\nI was troubled, I could not speak.\nI thought of the days of long ago\nand remembered the years long past.\nAt night I mused within my heart.\nI pondered and my spirit questioned.[/C1]" },
            { name: "PSALM 77", lyrics: "“Will the Lord reject us forever?\nWill He show us His favor no more?\nHas His love vanished for ever?\nHas His promise come to an end?\nDoes God forget His mercy\nor in anger withhold His compassion?”" },
            { name: "PSALM 77", lyrics: "[C1]I said: “This is what causes my grief;\nthat the way of the Most High has changed.”\nI remember the deeds of the Lord,\nI remember your wonders of old,\nI muse on all your works\nand ponder your mighty deeds.[/C1]" },
            { name: "PSALM 77", lyrics: "Your ways, O God, are holy.\nWhat god is great as our God?\nYou are the God who works wonders.\nYou showed your power among the peoples.\nYour strong arm redeemed your people,\nThe sons of Jacob and Joseph." },
            { name: "PSALM 77", lyrics: "[C1]The waters saw you, O God,\nthe waters saw you and trembled;\nthe depths were moved with terror.\nThe clouds poured down rain,\nthe skies sent forth their voice;\nyour arrows flashed to and fro.[/C1]" },
            { name: "PSALM 77", lyrics: "Your thunder rolled round the sky,\nyour flashes lighted up the world.\nThe earth was moved and trembled\nwhen your way led through the sea,\nyour path through the mighty waters,\nand no one saw your footprints.\n[C1]You guided your people like a flock\nby the hand of Moses and Aaron.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 77)[/F1]\nO God, all your ways are holy;\nwhat god can compare with our God?[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 97)[/F1]\nThe Lord is king, let the earth rejoice." },
            { name: "PSALM 97", lyrics: "The Lord is king, let the earth rejoice,\nlet all the coastlands be glad.\nCloud and darkness are his raiment;\nhis throne, justice and right.\n[C1]A fire prepares His path;\nit burns up His foes on every side.\nHis lightnings light up the world,\nthe earth trembles at the sight.[/C1]" },
            { name: "PSALM 97", lyrics: "The mountains melt like wax\nbefore the Lord of all the earth.\nThe skies proclaim His justice;\nall peoples see his glory.\n[C1]+ Let those who serve idols be ashamed,\nthose who boast of their worthless gods.\nAll your spirits, worship him.[/C1]" },
            { name: "PSALM 97", lyrics: "+ Zion hears and is glad;\nthe people of Judah rejoice\nbecause of your judgements, O Lord.\n[C1]+ For you indeed are the Lord,\nmost high above all the earth,\nexalted far above all spirits.[/C1]" },
            { name: "PSALM 97", lyrics: "+ The Lord loves those who hate evil;\nhe guards the souls of his saints;\nhe sets them free from the wicked.\n[C1]Light shines forth for the just\nand joy for the upright in heart.\nRejoice, you just, in the Lord;\ngive glory to his holy name.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 97)[/F1]\nThe Lord is king, let the earth rejoice.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK2 Thursday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 80)[/F1]\nStir up your mighty power,\nLord; come to our aid." },
            { name: "PSALM 80", lyrics: "O shepherd of Israel, hear us,\nyou who lead Joseph’s flock,\nshine forth from your cherubim throne\nupon Ephraim, Benjamin, Manasseh.\nO Lord, rouse up your might,\no Lord, come to our help.\n[C1]God of hosts, bring us back;\nlet your face shine on us and we shall be saved.[/C1]" },
            { name: "PSALM 80", lyrics: "Lord God of hosts, how long\nwill you frown on your people’s plea?\nYou have fed them with tears for their bread,\nan abundance of tears for their drink.\nYou have made us the taunt of our neighbors,\nour enemies laugh us to scorn.\n[C1]God of hosts, bring us back;\nlet your face shine on us and we shall be saved.[/C1]" },
            { name: "PSALM 80", lyrics: "You brought a vine out of Egypt;\nto plant it you drove out the nations.\nBefore it you cleared the ground;\nit took root and spread through the land\n[C1]The mountains were covered with its shadow,\nthe cedars of God with its boughs.\nIt stretched out its branches to the sea,\nto the Great River it stretched out its shoots.[/C1]" },
            { name: "PSALM 80", lyrics: "Then why have you broken down its walls?\nIt is plucked by all who pass by.\nIt is ravaged by the boar of the forest,\ndevoured by the beasts of the field.\n[C1]God of hosts, turn again, we implore,\nlook down from heaven and see.\nVisit this vine and protect it,\nthe vine your right hand has planted.\nMen have burnt it with fire and destroyed it.\nMay they perish at the frown of your face.[/C1]" },
            { name: "PSALM 80", lyrics: "May your hand be on the man you have chosen,\nthe man you have given your strength.\nAnd we shall never forsake you again:\ngive us life that we may call upon your name.\n[C1]God of hosts, bring us back;\nLet your face shine on us and we shall be saved.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 80)[/F1]\nStir up your mighty power,\nLord: come to our aid.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 81)[/F1]\nRing out your joy to God our strength." },
            { name: "PSALM 81", lyrics: "Ring out your joy to God our strength,\nshout in triumph to the God of Jacob.\n[C1]Raise a song and sound the timbrel,\nthe sweet-sounding harp and the lute,\nblow the trumpet at the new moon,\nwhen the moon is full, on our feast.[/C1]" },
            { name: "PSALM 81", lyrics: "For this is Israel’s law,\na command of the God of Jacob.\nHe imposed it as a rule on Joseph,\nwhen he went out against the land of Egypt.\n[C1]A voice I did not know said to me:\n“I freed your shoulder from the burden;\nyour hands were freed from the load.\nYou called in distress and I saved you.[/C1]" },
            { name: "PSALM 81", lyrics: "I answered, concealed in the storm cloud,\nat the waters of Meribah I tested you.\nListen, my people, to my warning,\nO Israel, if only you would heed!\n[C1]Let there be no foreign god among you,\nno worship of an alien god.\n+ I am the Lord your God,\nwho brought you from the land of Egypt.\nOpen wide your mouth and I will fill it.[/C1]" },
            { name: "PSALM 81", lyrics: "But my people did not heed my voice\nand Israel would not obey,\nso I left them in their stubbornness of heart\nto follow their own designs.\n[C1]O that my people would heed me,\nthat Israel would walk in my ways!\nAt once I would subdue their foes,\nturn my hand against their enemies.[/C1]" },
            { name: "PSALM 81", lyrics: "The Lord’s enemies would cringe at their feet\nand their subjection would last for ever.\nBut Israel I would feed with finest wheat\nAnd fill them with honey from the rock." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 81)[/F1]\nRing out your joy to God our strength.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK2 Friday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 51)[/F1]\nA humble, contrite heart, O God,\nyou will not spurn." },
            { name: "PSALM 51", lyrics: "Have mercy on me, O God, in your kindness.\nIn your compassion blot out my offense.\nO wash me more and more from my guilt\nand cleanse me from my sin.\n[C1]My offenses truly I know them;\nmy sin is always before me.\nAgainst you, you alone, have I sinned;\nwhat is evil in your sight I have done.[/C1]" },
            { name: "PSALM 51", lyrics: "That you may be justified when you give sentence\nand be without reproach when you judge.\nO see, in guilt I was born,\na sinner was I conceived.\n[C1]Indeed you love truth in the heart;\nthen in the secret of my heart teach me wisdom.\nO purify me, then I shall be clean;\nO wash me, I shall be whiter than snow.[/C1]" },
            { name: "PSALM 51", lyrics: "Make me hear rejoicing and gladness,\nthat the bones you have crushed may revive.\nFrom my sins turn away your face\nand blot out all my guilt.\n[C1]A pure heart create for me, O God,\nput a steadfast spirit within me.\nDo not cast me away from your presence,\nnor deprive me of your holy spirit.[/C1]" },
            { name: "PSALM 51", lyrics: "Give me again the joy of your help;\nwith a spirit of fervor sustain me.\nThat I may teach transgressors your ways\nand sinners may return to you.\n[C1]O rescue me, God, my helper,\nand my tongue shall ring out your goodness.\nO Lord, open my lips\nand my mouth shall declare your praise.[/C1]" },
            { name: "PSALM 51", lyrics: "For in sacrifice you take no delight,\nburnt offering from me you would refuse,\nmy sacrifice, a contrite spirit.\nA humbled, contrite heart you will not spurn.\n[C1]In your goodness, show favor to Zion:\nrebuild the walls of Jerusalem.\nThe you will be pleased with lawful sacrifice,\nholocausts offered on your altar.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 51)[/F1]\nA humble, contrite heart, O God,\nyou will not spurn.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 147:12-20)[/F1]\nO praise the Lord, Jerusalem!" },
            { name: "PSALM 147:12-20", lyrics: "O praise the Lord Jerusalem\nZion, praise your God!\n[C1]He has strengthened the bars of your gates,\nhe has blessed the children within you.\nHe established peace on your borders,\nhe feeds you with finest wheat.[/C1]" },
            { name: "PSALM 147:12-20", lyrics: "He sends his word to the earth\nand swiftly runs his command.\nHe showers down snow white as wool,\nhe scatters hoar-frost like ashes.\n[C1]He hurls down hailstones like crumbs.\nThe waters are frozen at his touch;\nhe sends forth his word and it melts them:\nat the breath of his mouth the waters flow.[/C1]" },
            { name: "PSALM 147:12-20", lyrics: "He makes his word known to Jacob,\nto Israel his laws and decrees.\nHe has not dealt thus with other nations;\nhe has not taught them his decrees." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 147:12-20)[/F1]\nO praise the Lord, Jerusalem![/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK2 Saturday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 92)[/F1]\nAs morning breaks we sing of your mercy, Lord,\nand night will find us proclaiming your fidelity." },
            { name: "PSALM 92", lyrics: "It is good to give thanks to the Lord,\nto make music to your name, O Most High,\nto proclaim your love in the morning\nand your truth in the watches of the night,\non the ten-stringed lyre and the lute,\nwith the murmuring sound of the harp." },
            { name: "PSALM 92", lyrics: "[C1]Your deeds, O Lord, have made me glad;\nfor the work of your hands I shout with joy.\nO Lord, how great are your works!\nHow deep are your designs!\nThe foolish man cannot know this\nand the fool cannot understand.[/C1]" },
            { name: "PSALM 92", lyrics: "Though the wicked spring up like grass\nand all who do evil thrive:\nthey are doomed to be eternally destroyed.\nBut you, Lord, are eternally on high.\nSee how your enemies perish;\nall doers of evil are scattered." },
            { name: "PSALM 92", lyrics: "[C1]To me you give the wild-ox’s strength;\nyou anoint me with the purest oil.\nMy eyes looked in triumph on my foes;\nmy ears heard gladly of their fall.\nThe just will flourish like the palm-tree\nand grow like a Lebanon cedar.[/C1]" },
            { name: "PSALM 92", lyrics: "Planted in the house of the Lord\nthey will flourish in the courts of our God,\nstill bearing fruit when the are old,\nstill full of sap, still green,\nto proclaim that the Lord is just;\nin him, my rock, there is no wrong." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 92)[/F1]\nAs morning breaks we sing of your mercy, Lord,\nand night will find us proclaiming your fidelity.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 8)[/F1]\nHow wonderful is your name,\nO Lord, in all creation." },
            { name: "PSALM 8", lyrics: "How great is your name, O Lord our God,\nthrough all the earth!\n[C1]Your majesty is praised above the heavens;\non the lips of children and of babes\nyou have found praise to foil your enemy,\nto silence the foe and the rebel.[/C1]" },
            { name: "PSALM 8", lyrics: "When I see the heavens, the work of your hands,\nthe moon and the stars which you arranged,\nwhat is man that you should keep him in mind,\nmortal man that you care for him?\n[C1]Yet you have made him little less than a god;\nwith glory and honor you crowned him,\ngave him power over the works of your hand,\nput all things under his feet.[/C1]" },
            { name: "PSALM 8", lyrics: "All of them, sheep and cattle,\nyes, even the savage beasts,\nbirds of the air, and fish\nthat make their way through the waters.\n[C1]How great is your name, O Lord, our God,\nthrough all the earth![/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 8)[/F1]\nHow wonderful is your name,\nO Lord, in all creation.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK3 Sunday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 93)[/F1]\nGlorious is the Lord on high, alleluia." },
            { name: "PSALM 93", lyrics: "+ The Lord is king, with majesty enrobed;\nthe Lord has robed himself with might,\nhe has girded himself with power.\n[C1]+ The world you made firm, not to be moved;\nyour throne has stood firm from the old.\nFrom all eternity, O Lord, you are.[/C1]" },
            { name: "PSALM 93", lyrics: "+ The waters have lifted up, O Lord,\nthe waters have lifted up their voice,\nthe waters have lifted up their thunder.\n[C1]+ Greater than the roar of mighty waters,\nmore glorious than the surgings of the sea,\nthe Lord is glorious on high.[/C1]" },
            { name: "PSALM 93", lyrics: "+ Truly your decrees are to be trusted.\nHoliness is fitting to your house,\nO Lord, until the end of time." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 93)[/F1]\nGlorious is the Lord on high, a lleluia.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 148)[/F1]\nPraise the Lord from the heavens, alleluia." },
            { name: "PSALM 148", lyrics: "Praise the Lord from the heavens,\npraise him in the heights.\nPraise him, all his angels,\npraise him, all his host.\n[C1]Praise him, sun and moon,\npraise him, shining stars,\npraise him, highest heavens,\nand the waters above the heavens.[/C1]" },
            { name: "PSALM 148", lyrics: "Let them praise the name of the Lord.\nHe commanded: they were made.\nHe fixed them for ever,\ngave a law which shall not pass away.\n[C1]Praise the Lord from the earth,\nsea creatures and all oceans,\nfire and hail, snow and mist,\nstormy winds that obey his word;[/C1]" },
            { name: "PSALM 148", lyrics: "all mountains and hills,\nall fruit trees and cedars,\nbeasts, wild and tame,\nreptile and birds on the wing;\n[C1]all earth’s kings and peoples,\nearth’s princes and rulers;\nyoung men and maidens,\nold men together with children.[/C1]" },
            { name: "PSALM 148", lyrics: "Let them praise the name of the Lord\nfor he alone is exalted.\nThe splendor of his name\nreaches beyond heaven and earth.\n[C1]He exalts the strength of his people.\nHe is the praise of all his saints,\nof the sons of Israel,\nof the people to whom he comes close.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 148)[/F1]\nPraise the Lord from the heavens, alleluia.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK3 Monday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 84)[/F1]\nBlessed are the who dwell in your house, O Lord." },
            { name: "PSALM 84", lyrics: "How lovely is your dwelling place,\nLord, God of hosts.\n[C1]My soul is longing and yearning,\nis yearning for the courts of the Lord.\nMy heart and my soul ring out their joy\nto God, the living God.[/C1]" },
            { name: "PSALM 84", lyrics: "The sparrow herself finds a home\nand the swallow a nest for her brood;\nshe lays her young by your altars,\nLord of hosts, my king and my God.\n[C1]They are happy ,who dwell in your house,\nfor ever singing your praise.\nThey are happy, whose strength is in you,\nin whose hearts are the roads to Zion.[/C1]" },
            { name: "PSALM 84", lyrics: "+ As they go through the Bitter Valley\nthey make it a place of springs,\nthe autumn rain covers it with blessings.\nThey walk with ever growing strength,\nthey will see the God of gods in Zion.\n[C1]The Lord God of hosts, hear my prayer,\ngive ear, O God of Jacob.\nTurn your eyes, O God, our shield,\nlook on the face of your anointed.[/C1]" },
            { name: "PSALM 84", lyrics: "One day within your courts\nis better than a thousand elsewhere.\nThe threshold of the house of God\nI prefer to the dwellings of the wicked.\n[C1]For the Lord God is a rampart, a shield;\nhe will give us his favor and glory.\nThe Lord will not refuse any good\nto those who walk without blame.[/C1]" },
            { name: "PSALM 84", lyrics: "Lord, God of hosts,\nhappy the man who trusts in you!" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 84)[/F1]\nBlessed are they who dwell in your house, O Lord.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 96)[/F1]\nSing to the Lord and bless his name." },
            { name: "PSALM 96", lyrics: "+ O sing a new song to the Lord\nsing to the Lord, all the earth.\nO sing to the Lord, bless his name.\n[C1]+ Proclaim his help day by day,\ntell among the nations his glory,\nand his wonders among all the peoples.[/C1]" },
            { name: "PSALM 96", lyrics: "+ The Lord is great and worthy of praise,\nto be feared above all gods;\nthe gods of the heathens are naught.\n[C1]+ It was the Lord who made the heavens,\nhis are majesty and state and power\nand splendor in his holy place.[/C1]" },
            { name: "PSALM 96", lyrics: "+ Give the Lord, you families of peoples,\ngive the Lord glory and power,\ngive the Lord the glory of his name.\n[C1]+ Bring an offering and enter his courts,\nworship the Lord in his temple.\nO earth, tremble before him.[/C1]" },
            { name: "PSALM 96", lyrics: "+ Proclaim to the nation: “God is king,”\nthe world he made firm in its place;\nhe will judge the peoples in fairness.\n[C1]Let the heavens rejoice and earth be glad,\nlet the sea and all within it thunder praise,\nlet the land and all it bears rejoice,\nall the trees of the wood shout for joy[/C1]" },
            { name: "PSALM 96", lyrics: "at the presence of the Lord for he comes,\nhe comes to rule the earth.\nWith justice he will rule the world,\nhe will judge the peoples with his truth." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 96)[/F1]\nSing to the Lord and bless his name.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK3 Tuesday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 85)[/F1]\nLord, you have blessed your land;\nyou have forgiven the sins of your people." },
            { name: "PSALM 85", lyrics: "O Lord, you once favored your land\nand revived the fortunes of Jacob,\nyou forgave the guilt of your people\nand covered all their sins.\nYou averted all your rage,\nyou calmed the heat of your anger.\n[C1]Revive us now, God, our helper!\nPut an end to your grievance against us.\nWill you be angry with us forever,\nwill your anger never cease?[/C1]" },
            { name: "PSALM 85", lyrics: "Will you not restore again our life\nthat your people may rejoice in you?\nLet us see, O Lord, your mercy\nand give us your saving help.\n[C1]I will hear what the Lord God has to say,\na voice that speaks of peace,\npeace for his people and his friends\nand those who turn to him in their hearts.\nHis help is near for those who fear him\nand his glory will dwell in our land.[/C1]" },
            { name: "PSALM 85", lyrics: "Mercy and faithfulness have met;\njustice and peace have embraced.\nFaithfulness shall spring from the earth\nand justice shall look down from heaven.\n[C1]The Lord will make us prosper\nand our earth shall yield its fruit.\nJustice shall march before him\nand peace shall follow his steps.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 85)[/F1]\nLord, you have blessed your land;\nyou have forgiven the sins of your people.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 67)[/F1]\nLord, let the light of your face shine upon us." },
            { name: "PSALM 67", lyrics: "O God, be gracious and bless us\nand let your face shed its light upon us.\nSo will your ways be known upon earth\nand all nations learn your saving help.\n[C1]Let the people praise you, O God;\nlet all the peoples praise you.[/C1]" },
            { name: "PSALM 67", lyrics: "Let the nations be glad and exult\nfor you rule the world with justice.\nWith fairness you rule the peoples,\nyou guide the nations on earth.\n[C1]Let the people praise you, O God;\nlet all the peoples praise you.[/C1]" },
            { name: "PSALM 67", lyrics: "The earth has yielded its fruit\nfor God, our God, has blessed us.\nMay God still give us his blessing\ntill the ends of the earth revere him.\n[C1]Let the people praise you, O God;\nlet all the peoples praise you.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 67)[/F1]\nLord, let the light of your face shine upon us.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK3 Wednesday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 86)[/F1]\nGive joy to your servant, Lord;\nto you I lift up my heart." },
            { name: "PSALM 86", lyrics: "Turn your ear, O Lord, and give answer\nfor I am poor and needy.\nPreserve my life, for I am faithful:\nsave the servant who trusts in you.\n[C1]You are my God, have mercy on me, Lord,\nfor I cry to you all day long.\nGive joy to your servant, O Lord,\nfor to you I lift up my soul.[/C1]" },
            { name: "PSALM 86", lyrics: "O Lord, you are good and forgiving,\nfull of love to all who call.\nGive heed, O Lord, to my prayer\nand attend to the sound of my voice.\n[C1]In the day of distress I will call\nand surely you will reply.\nAmong the gods there is none like you, O Lord;\nnor work to compare with yours.[/C1]" },
            { name: "PSALM 86", lyrics: "All the nations shall come to adore you\nand glorify your name, O Lord:\nfor you are great and do marvelous deeds,\nyou who alone are God.\n[C1]+ Show me, Lord, your way\nso that I may walk in your truth.\nGuide my hear to fear your name.[/C1]" },
            { name: "PSALM 86", lyrics: "I will praise you, Lord my God, with all my hear\nand glorify your name for ever;\nfor your love to me has been great:\nyou have saved me from the depths of the grave.\n[C1]+ The proud have risen against me;\nruthless men seek my life:\nto you the pay ne heed.[/C1]" },
            { name: "PSALM 86", lyrics: "But you, God of mercy and compassion,\nslow to anger, O Lord,\nabounding in love and truth\nturn and take pity on me.\n[C1]O give your strength to your servant\nand save your handmaid’s son.\n+ Show me a sign of your favor\nthat my foes may see to their shame\nthat you console me and give me your help.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 86)[/F1]\nGive joy to your servant, Lord;\nto you I lift up my heart.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 98)[/F1]\nLet us celebrate with joy\nin the presence of our Lord and King." },
            { name: "PSALM 98", lyrics: "Sing a new song to the Lord\nfor he has worked wonders.\nHis right hand and his holy arm\nhave brought salvation.\n[C1]The Lord has made known his salvation;\nhas shown his justice to the nations.\nHe has remembered his truth and love\nfor the house of Israel.[/C1]" },
            { name: "PSALM 98", lyrics: "All the ends of the earth have seen\nthe salvation of our God.\nShout to the Lord, all the earth,\nring out your joy.\n[C1]Sing psalms to the Lord with the harp\nwith the sound of music.\nWith trumpets and the sound of the horn\nacclaim the King, the Lord.[/C1]" },
            { name: "PSALM 98", lyrics: "Let the sea and all within it thunder;\nthe world, and all its peoples.\nLet the rivers clap their hands\nand the hills ring out their joy.\n[C1]Rejoice at the presence of the Lord,\nfor he comes to rule the earth.\nHe will rule the world with justice\nand the peoples with fairness.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 98)[/F1]\nLet us celebrate with joy\nin the presence of our Lord and King.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK3 Thursday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 87)[/F1]\nGlorious things are said of you, city of God." },
            { name: "PSALM 87", lyrics: "On the holy mountain is his city\ncherished by the Lord.\nThe Lord prefers that gates of Zion\nto all Jacob’s dwellings.\nOf you are told glorious things,\nO city of God!\n[C1]“Babylon and Egypt I will count\namong those who know me;\nPhilistia, Tyre, Ethiopia,\nthese will be her children\nand Zion shall be called ‘Mother’\nfor all shall be her children.”[/C1]" },
            { name: "PSALM 87", lyrics: "It is he, the Lord Most High,\nwho gives each his place.\nIn his register of peoples he writes:\n“These are her children,”\nand while they dance they will sing:\n“In you all find their home.”" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 87)[/F1]\nGlorious things are said of you, O city of God.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 99)[/F1]\nGive praise to the Lord our God,\nbow down before his holy mountain." },
            { name: "PSALM 99", lyrics: "+ The Lord is king; the peoples tremble.\nThe is throned on the cherubim; the earth quakes.\nThe Lord is great in Zion.\n[C1]+ He is supreme over all the peoples.\nLet them praise his name, so terrible and great.\nHe is holy, full of power.[/C1]" },
            { name: "PSALM 99", lyrics: "+ You are king who loves what is right;\nyou have established equity, justice and right;\nyou have established them in Jacob.\n[C1]+ Exalt the Lord our God;\nbow down before Zion, his footstool.\nHe the Lord is holy.[/C1]" },
            { name: "PSALM 99", lyrics: "+ Among his priests were Aaron and Moses,\namong those who invoked his name was Samuel.\nThey invoked the Lord and he answered.\n[C1]+ To them he spoke on the pillar of cloud.\nThey did his will; they kept the law,\nwhich he, the Lord, had given.[/C1]" },
            { name: "PSALM 99", lyrics: "+ O Lord our God, you answered them.\nFor them you were a God who forgives;\nyet you punish all their offenses.\n[C1]+ Exalt the Lord our God;\nbow down before his holy mountain\nfor the Lord our God is holy.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 99)[/F1]\nGive praise to the Lord our God,\nbow down before his holy mountain.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK3 Friday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 51)[/F1]\nYou alone I have grieved by my sin;\nhave pity on me, O Lord." },
            { name: "PSALM 51", lyrics: "Have mercy on me, God, in your kindness.\nIn your compassion blot out my offense.\nO wash me more and more from my guilt\nand cleanse me from my sin.\n[C1]My offenses truly I know them;\nmy sin is always before me.\nAgainst you, you alone, have I sinned;\nwhat is evil in your sight I have done.[/C1]" },
            { name: "PSALM 51", lyrics: "That you may be justified when you give sentence\nand be without reproach when you judge.\nO see, in guilt I was born,\na sinner was I conceived.\n[C1]Indeed you love truth in the heart;\nthen in the secret of my heart teach me wisdom.\nO purify me, then I shall be clean;\nO wash me, I shall be whiter than snow.[/C1]" },
            { name: "PSALM 51", lyrics: "Make me hear rejoicing and gladness,\nthat the bones you have crushed may revive.\nFrom my sins turn away your face\nand blot out all my guilt.\n[C1]A pure heart create for me, O God,\nput a steadfast spirit within me.\nDo not cast me away from your presence,\nnor deprive me of your holy spirit.[/C1]" },
            { name: "PSALM 51", lyrics: "Give me again the joy of your help;\nwith a spirit of fervor sustain me,\nthat I may teach transgressors your ways\nand sinners may return to you.\n[C1]O rescue me, God, my helper,\nand my tongue shall ring out your goodness.\nO Lord, open my lips\nand my mouth shall declare your praise.[/C1]" },
            { name: "PSALM 51", lyrics: "For in sacrifice you take no delight,\nburnt offering from me you would refuse,\nmy sacrifice, a contrite spirit.\nA humbled, contrite heart you will not spurn.\n[C1]In your goodness, show favor to Zion:\nrebuild the walls of Jerusalem.\nThen you will be pleased with lawful sacrifice,\nholocausts offered on your altar.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 51)[/F1]\nYou alone I have grieved by my sin;\nhave pity on me, O Lord.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 100)[/F1]\nThe Lord is God;\nwe are his people,\nthe flock he shepherds." },
            { name: "PSALM 100", lyrics: "+ Cry out with joy to the Lord, all the earth.\nServe the Lord with gladness.\nCome before him, singing for joy.\n[C1]+ Know that he, the Lord, is God.\nHe made us, we belong to him,\nwe are his people, the sheep of his flock.[/C1]" },
            { name: "PSALM 100", lyrics: "+ Go within his gates, giving thanks.\nEnter his courts with songs of praise.\nGive thanks to him and bless his name.\n[C1]+ Indeed, how good is the Lord,\neternal his merciful love.\nHe is faithful from age to age.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 100)[/F1]\nThe Lord is God;\nwe are his people,\nthe flock he shepherds.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK3 Saturday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 119:145 – 152)[/F1]\nLord, you are near to us,\nand all your ways are true." },
            { name: "PSALM 119:145 – 152", lyrics: "I call with all my heart; Lord, hear me,\nI will keep your commands.\nI call upon you, save me\nand I will do your will.\n[C1]I rise before the dawn and cry for help,\nI hope in your word.\nMy eyes watch through the night\nto ponder your promise.[/C1]" },
            { name: "PSALM 119:145 – 152", lyrics: "In your love hear my voice, o Lord;\ngive me life by your decrees.\nThose who harm me unjustly drew near\nthey are far from your law.\n[C1]But, you O Lord, are close:\nyour commands are truth.\nLong have I known that your will’\nis established for ever.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 119:145 – 152)[/F1]\nLord, you are near to us,\nand all your ways are true.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 117)[/F1]\nThe Lord remains faithful to his promise for ever." },
            { name: "PSALM 117", lyrics: "O praise the Lord, all you nations,\nacclaim him all you peoples!\n[C1]Strong is his love for us;\nhe is faithful for ever.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 117)[/F1]\nThe Lord remains faithful to his promise for ever.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK4 Monday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 90)[/F1]\nEach morning, Lord,\nyou fill is with your kindness." },
            { name: "PSALM 90", lyrics: "O Lord, you have been our refuge\nfrom one generation to the next.\n+ Before the mountains were born\nor the earth or the world brought forth,\nyou are God, without beginning or end.\n[C1]You turn men back to dust\nand say: “Go back, sons of men.”\n+ To your eyes a thousand years\nare like yesterday, come and gone,\nno more than a watch in the night.[/C1]" },
            { name: "PSALM 90", lyrics: "You sweep men away like a dream,\nlike the grass which springs up in the morning.\nIn the morning it springs up and flowers:\nby evening it withers and fades.\n[C1]So we are destroyed in your anger,\nstruck with terror in your furry.\nOur guilt lies open before you;\nour secrets in the light of your face.[/C1]" },
            { name: "PSALM 90", lyrics: "All our days pass way in your anger.\nOur life is over like a sigh.\nOur span is seventy years,\nor eighty for those who are strong.\n[C1]And most of these are emptiness and pain.\nThey pass swiftly and we are gone.\nWho understands the power of your anger\nand fears the strength of your fury?[/C1]" },
            { name: "PSALM 90", lyrics: "Make us know the shortness of our life\nthat we may gain wisdom of heart.\nLord, relent! Is your anger for ever?\nShow pity to your servants.\n[C1]In the morning, fill us with your love;\nwe shall exult and rejoice all our days.\nGive us joy to balance our affliction\nfor the years when we knew misfortune.[/C1]" },
            { name: "PSALM 90", lyrics: "Show forth your work to your servants;\nlet your glory shine on their children.\n+ Let the favor of the Lord be upon us:\ngive success to the work of our hands.\nGive success to the work of our hands." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 90)[/F1]\nEach morning, Lord,\nyou fill us with your kindness.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 135:1-12)[/F1]\nYou who stand in his sanctuary,\npraise the name of the Lord." },
            { name: "PSALM 135:1-12", lyrics: "Praise the name of the Lord,\npraise him, servants of the Lord,\nwho stand in the house of the Lord\nin the courts of the house of our God.\n[C1]Praise the Lord for the Lord is good.\nSing a psalm to his name for the is loving.\nFor the Lord has chosen Jacob for himself\nand Israel for his own possession.[/C1]" },
            { name: "PSALM 135:1-12", lyrics: "For I know that the Lord is great,\nthat our Lord is high above all gods.\nThe Lord does whatever he wills,\nin heaven, on earth, in the seas.\n[C1]+ He summons clouds from the ends of the earth;\nmakes lightning produce rain;\nfrom his treasuries he sends forth the wind.[/C1]" },
            { name: "PSALM 135:1-12", lyrics: "The first-born of the Egyptians he smote,\nof man and beast alike.\n+ Signs and wonders he worked\nIn the midst of your land, O Egypt,\nagainst Pharaoh and all his servants\n[C1]Nations in their greatness he struck\nand kings in their splendor he slew.\n+ Sihon, king of Amorites.\nOg, the king of Bashan,\nand all the kingdoms of Canaan.\nHe let Israel inherit their land;\non his people their land he bestowed.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 135:1-12)[/F1]\nYou who stand in his sanctuary,\npraise the name of the Lord.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK4 Tuesday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 101)[/F1]\nI will sing to you, O Lord;\nI will learn from you\nthe way of perfection." },
            { name: "PSALM 101", lyrics: "My song is of mercy and justice;\nI sing to you, O Lord.\nI will walk in the way of perfection.\nO when, Lord, will you come?\n[C1]I will walk with blameless heart\nwithin my house;\nI will not set before my eyes\nwhatever is base.[/C1]" },
            { name: "PSALM 101", lyrics: "I will hate the ways of the crooked;\nthey shall not be my friends.\nThe false-hearted must keep far away;\nthe wicked I disown.\n[C1]The man who slanders his neighbor in secret\nI will bring to silence.\nThe man of proud looks and haughty heart\nI will never endure.[/C1]" },
            { name: "PSALM 101", lyrics: "I look to the faithful in the land\nthat they may dwell with me.\nHe who walks in the way of perfection\nshall be my friend.\n[C1]No man who practices deceit\nshall live within my house.\nNo man who utters lies shall stand\nbefore my eyes.[/C1]" },
            { name: "PSALM 101", lyrics: "Morning by morning I will silence\nall the wicked in the land,\nuprooting from the city of the Lord\nall who do evil." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 101)[/F1]\nI will sing to you, O Lord;\nI will learn from you\nthe way of perfection.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 144:1 – 10)[/F1]\nO God, I will sing to you a new song." },
            { name: "PSALM 144:1 – 10", lyrics: "+ Blessed be the Lord, my rock\nWho trains my arms for battle,\nWho prepares my hands for war.\n[C1]He is my love, my fortress;\nhe is my stronghold, my savior,\nmy shield, my place of refuge.\nHe brings people under my rule.[/C1]" },
            { name: "PSALM 144:1 – 10", lyrics: "Lord, what is man that you care for him,\nmortal man, that you keep him in mind;\nman, who is merely a breath,\nwhose life fades like a passing shadow?\n[C1]Lower your heavens and come down;\ntouch the mountains; wreathe them in smoke.\nFlash your lightnings, rout the foe,\nshoot your arrows and put them to flight.[/C1]" },
            { name: "PSALM 144:1 – 10", lyrics: "Reach down from heaven and save me;\ndraw me out from the mighty waters,\n+ from the hands of alien foes\nwhose mouth are filled with lies,\nwhose hands are raised in perjury.\n[C1]To you, O God, will I sing a new song;\nI will play on the ten-stringed harp\nto you who give kings their victory,\nwho set David your servant free.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 144:1 – 10)[/F1]\nO God, I will sing to you a new song.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK4 Wednesday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 108)[/F1]\nMy heart is ready, O God,\nmy heart is ready." },
            { name: "PSALM 108", lyrics: "My heart is ready, O God;\nI will sing, sing your praise.\n+ Awake, my soul;\nawake, lyre and harp,\nI will awake the dawn" },
            { name: "PSALM 108", lyrics: "[C1]I will thank you, Lord, among the peoples,\namong the nations I will praise you,\nfor your love reaches to the heavens\nand your truth to the skies.\nO God, arise above the heavens;\nmay your glory shine on earth![/C1]" },
            { name: "PSALM 108", lyrics: "O come and deliver your friends;\nhelp with your right hand and reply.\n+ From his holy place God has made this promise:\n“I will triumph and divide the land of Shechem;\nI will measure out the valley of Succoth." },
            { name: "PSALM 108", lyrics: "[C1]+ Gilead is mine and Manasseh.\nEphraim I take for my helmet,\nJudah for my commander’s staff.\n+ Moab I will use for my washbowl,\nOn Edom I will plant my shoe.\nOver the Philistines I will shout in triumph.”[/C1]" },
            { name: "PSALM 108", lyrics: "But who will lead me to conquer the fortress?\nWho will bring me face to face the Edom?\nWill you utterly reject us, O God,\nAnd no longer march with our enemies?\n[C1]Give us help against the foe:\nFor the help of man is vain.\nWith God we shall do bravely\nAnd he will trample down our foes.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 108)[/F1]\nMy heart is ready, O God,\nmy heart is ready.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 146)[/F1]\nI will praise my God\nall the days of my life." },
            { name: "PSALM 146", lyrics: "+ My soul, give praise to the Lord;\nI will praise the Lord all my days,\nmake music to my God while I live.\n[C1]Put no trust in princes,\nin mortal men in whom there is no help.\nTake the breath, they return to clay\nand their plans that the day come to nothing.[/C1]" },
            { name: "PSALM 146", lyrics: "He is happy who is helped by Jacob’s God,\nwhose hope is in the Lord his God.\nWho alone made heaven and earth,\nTte seas and all they contain.\n[C1]It is he who keeps the faith for ever,\nwho is just to those who are oppressed.\nIt is he who gives bread to the hungry,\nthe Lord, who sets prisoners free.[/C1]" },
            { name: "PSALM 146", lyrics: "The Lord who gives sight to the blind,\nwho raises up those who are bowed down,\nthe Lord, who protects the stranger\nand upholds the widow and orphan.\n[C1]It is the Lord who loves the just\nbut thwarts the path of the wicked.\nThe Lord will reign for ever,\nZion’s God, from age to age.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 146)[/F1]\nI will praise my God\nall days of my life.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK4 Thursday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 143:1-11)[/F1]\nAt daybreak, be merciful to me, O Lord." },
            { name: "PSALM 143:1-11", lyrics: "Lord, listen to my prayer:\nturn your ear to my appeal.\n+ You are faithful, you are just; give answer.\nDo not call your servant to judgment\nfor no one is just in your sight.\n[C1]The enemy pursues my soul;\nhe has crushed my life to the ground;\nhe has made me dwell in darkness\nlike the dead, long forgotten.\nTherefore my spirit fails;\nmy heart is numb within me.[/C1]" },
            { name: "PSALM 143:1-11", lyrics: "I remember the days that are past;\nI ponder all your works.\n+ I muse on what your hand has wrought\nand to you I stretch out my hands.\nLike a parched land my soul thirsts for you.\n[C1]Lord, make haste and answer;\nfor my spirit fails within me,\ndo not hide your face\nlest I become like those in grave.[/C1]" },
            { name: "PSALM 143:1-11", lyrics: "In the morning let me know your love.\nFor I put my trust in you.\nMake me know the way I should walk:\nto you I lift up my soul.\n[C1]Rescue me, Lord, from my enemies;\nI have fled to you for refuge.\nTeach me to do your will\nfor you, O God, are my God.\nLet your good spirit guide me\nin ways that are level and smooth.[/C1]" },
            { name: "PSALM 143:1-11", lyrics: "For your name’s sake, Lord, save my life;\nin your justice save my soul from distress." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 143:1-11)[/F1]\nAt daybreak, be merciful to me, O Lord.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 147;1-11)[/F1]\nLet us joyfully praise the Lord our God." },
            { name: "PSALM 147;1-11", lyrics: "+ Praise the Lord for he is good;\nsing to our God for he is loving:\nto him our praise is due.\n[C1]The Lord builds up Jerusalem\nand brings back Israel’s exiles,\nhe heals the broken-hearted,\nhe binds up all their wounds.\nHe fixes the number of the stars;\nhe calls each one by name.[/C1]" },
            { name: "PSALM 147;1-11", lyrics: "Our Lord is great and Almighty;\nhis wisdom can never be measured.\nThe Lord raises the lowly;\nhe humbles the wicked to the dust.\nO sing to the Lord, giving thanks;\nsing psalms to our God with the harp.\n[C1]He covers the heavens with clouds;\nhe prepares the rain for the earth,\nmaking mountains sprout with grass\nand with plants to serve man’s needs.\nHe provides the beasts with their food.\nAnd young ravens that call upon him.[/C1]" },
            { name: "PSALM 147;1-11", lyrics: "His delight is not in horses\nNor his pleasure in warriors’ strength.\nThe Lord delights in those who revere him,\nIn those who wait for his love." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 147;1-11)[/F1]\nLet us joyfully praise the Lord our God.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK4 Sunday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 118)[/F1]\nPraise the Lord,\nfor his loving kindness\nwill never fail, alleluia." },
            { name: "PSALM 118", lyrics: "Give thanks to the Lord for he is good,\nfor his love endures forever.\n[C1]Let the sons of Israel say:\n“His love endures for ever.”\nLet the sons of Aaron say:\n“His love endures for ever.”\nLet those who fear the Lord say:\n“His love endures for ever.”[/C1]" },
            { name: "PSALM 118", lyrics: "I called to the Lord in my distress;\nhe answered and freed me.\nThe Lord is at my side; I do not fear.\nWhat can man do against me?\nThe Lord is at my side as my helper:\nI shall look down on my foes.\n[C1]It is better to take refuge in the Lord\nthat to trust in men;\nit is better to take refuge on the Lord\nthan to trust in princes.[/C1]" },
            { name: "PSALM 118", lyrics: "The nations all encompassed me;\nin the Lord’s name I crushed them.\nThey compassed me, compassed me about;\nin the Lord’s name I crushed them.\n+ They compassed me about like bees;\nthey blazed like a fire among thorns.\nIn the Lord’s name I crushed them." },
            { name: "PSALM 118", lyrics: "[C1]I was hard-pressed and was falling,\nThe but the Lord came to help me.\nThe Lord is my strength and my song;\nhe is my savior.\nThere are shouts of joy and victory\nin the tents of the just.[/C1]" },
            { name: "PSALM 118", lyrics: "The Lord’s right hand has triumphed;\nHis right hand raised me.\n+ The Lord’s right hand has triumphed;\nI shall not die, I shall live and recount his deeds.\nI was punished, I was punished by the Lord,\nbut not doomed to die." },
            { name: "PSALM 118", lyrics: "[C1]Open to me the gates of holiness:\nI will enter and give thanks.\nThis is the Lord’s own gate\nwhere the just may enter.\nI will thank you for you have answered\nand you are my savior.[/C1]" },
            { name: "PSALM 118", lyrics: "The stone which the builders rejected\nhas become the corner stone.\nThis is the work of the Lord,\na marvel in our eyes.\nThis day was made by the Lord;\nWe rejoice and are glad." },
            { name: "PSALM 118", lyrics: "[C1]O Lord, grant us salvation;\nO Lord, grant success.\nBlessed in the name of the Lord\nis he who comes.\nWe bless you from the house of the Lord;\nthe Lord God is our light.[/C1]" },
            { name: "PSALM 118", lyrics: "Go forward in procession with branches\neven to the altar.\nYou are my God, I thank you.\nMy God, I praise you.\nGive thanks to the Lord for he is good;\nfor his love endures for ever." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 118)[/F1]\nPraise the Lord,\nfor his loving kindness\nwill never fail, alleluia.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 150)[/F1]\nPraise the Lord\nfor his infinite greatness, alleluia." },
            { name: "PSALM 150", lyrics: "Praise God in his holy place,\npraise him in his mighty heavens.\nPraise him for his powerful deeds,\npraise his surpassing greatness.\n[C1]O praise him with sound of trumpet,\npraise him with lute and harp.\nPraise him with timbrel and dance,\npraise him with strings and pipes.[/C1]" },
            { name: "PSALM 150", lyrics: "O praise him with resounding cymbals,\npraise him with clashing of cymbals.\nLet everything that lives and that breathes\ngive praise to the Lord." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 150)[/F1]\nPraise the Lord\nfor his infinite greatness, alleluia.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK4 Friday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 51)[/F1]\nCreate a clean heart in me, O God;\nrenew in me a steadfast spirit." },
            { name: "PSALM 51", lyrics: "Have mercy on me, God, in your kindness.\nIn you compassion blot out my offense.\nO wash me more and more from my guilt\nand cleanse me from my sin.\n[C1]My offenses truly I know them;\nmy sin is always before me.\nAgainst you, you alone, have I sinned;\nwhat is evil in your sight I have done.\n[/C1]" },
            { name: "PSALM 51", lyrics: "That you may be justified when you give sentence\nand be without reproach when you judge.\nO see, in guilt I was born,\na sinner was I conceived.\n[C1]Indeed you love truth in the heart;\nthen in the secret of my heart teach me wisdom.\nO purify me, then I shall be clean;\nO wash me, I shall be whiter than snow.[/C1]" },
            { name: "PSALM 51", lyrics: "Make me hear rejoicing and gladness,\nthat the bones you have crushed may revive.\nFrom my sins turn away your face\nand blot out all my guilt.\n[C1]A pure heart create for me, O God,\nput a steadfast spirit within me,\nDo not cast me away from your presence,\nnor deprive me of your holy spirit.[/C1]" },
            { name: "PSALM 51", lyrics: "Give me again the joy of your help;\nwith a spirit of fervor sustain me,\nthat I may teach transgressors your ways\nand sinners may return to you.\n[C1]O rescue me, God, my helper,\nand my tongue shall ring out your goodness.\nO Lord, open my lips\nand my mouth shall declare your praise.[/C1]" },
            { name: "PSALM 51", lyrics: "For in sacrifice you take no delight,\nburnt offering from me you would refuse,\nmy sacrifice, a contrite spirit.\nA humbled, contrite heart you will not spurn.\n[C1]In your goodness, show favor to Zion:\nrebuild the walls of Jerusalem.\nThen you will be pleased with lawful sacrifice,\nholocausts offered on your altar.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 51)[/F1]\nCreate a clean heart in me, O God;\nrenew in me a steadfast spirit.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 147:12-20)[/F1]\nZion, praise your God,\nwho sent his Word to renew the earth." },
            { name: "PSALM 147:12-20", lyrics: "O praise the Lord, Jerusalem!\nZion praise your God!\nHe has strengthened the bars of your gates,\nhe has blessed the children within you.\nHe established peace on your borders,\nhe feeds you with finest wheat.\n[C1]He sends out his word to the ear\nhand swiftly runs his command.\nHe showers down snow white as wool,\nhe scatters hoar-frost like ashes.[/C1]" },
            { name: "PSALM 147:12-20", lyrics: "He hurls down hailstones like crumbs.\nThe waters are frozen at his touch;\nhe sends forth his word and it melts them:\nat the breath of his mouth the waters flow.\n[C1]He makes his word known to Jacob,\nto Israel his laws and decrees.\nHe has not dealt thus with other nations;\nhe has not taught then his decrees.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 147:12-20)[/F1]\nZion, praise your God,\nwho sent his Word to renew the earth.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK4 Saturday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 92)[/F1]\nWe do well to sing to your name,\nMost High, and proclaim your mercy at daybreak" },
            { name: "PSALM 92", lyrics: "It is good to give thanks to the Lord,\nto make music to your name, O Most High,\nto proclaim your love in the morning\nand your truth in the watches of the night,\non the ten-stringed lyre and the lute,\nwith the murmuring sound of the harp." },
            { name: "PSALM 92", lyrics: "[C1]Your deeds, O Lord, have made me glad;\nfor the work of your hands I shout with joy.\nO Lord, how great are your works!\nHow deep are your designs!\nThe foolish man cannot know this\nand the fool cannot understand.[/C1]" },
            { name: "PSALM 92", lyrics: "+ Though the wicked spring up like grass\nand all who do evil thrive,\nthey are doomed to be eternally destroyed.\n+ But you, Lord, are eternally on high.\nSee how your enemies perish;\nall doers of evil are scattered." },
            { name: "PSALM 92", lyrics: "[C1]To me you give the wild ox’s strength;\nyou anoint me with the purest oil.\nMy eyes looked in triumph on my foes;\nmy ears heard gladly of their fail.\nThe just will flourish like the palm-tree\nand grow like a Lebanon cedar.[/C1]" },
            { name: "PSALM 92", lyrics: "Planted in the house of the Lord,\nthey will flourish in the courts of our God,\nstill bearing fruit when they are old,\nstill full of sap, still green,\nto proclaim that the lord is just.\nIn him, my rock, there’s no wrong." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 92)[/F1]\nWe do well to sing to your name,\nMost High, and proclaim your mercy at daybreak.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 8)[/F1]\nOn the lips of children and infants\nyou have found perfect praise." },
            { name: "PSALM 8", lyrics: "How great is your name, o Lord our God,\nthrough all the Earth!\n[C1]Your majesty is praised above the heavens;\nOn the lips of children and of babes\nYou have found praise to foil your enemies,\nTo silence the foe and the rebel.[/C1]" },
            { name: "PSALM 8", lyrics: "When I see the heavens, the work of your hands,\nthe moon and the stars which you arranged,\nwhat is man that you should keep him in mind,\nmortal man that you care for him?\n[C1]Yet you have made him little less than a god;\nwith glory and honor you crowned him,\ngave him power over the works of your hand,\nput all things under his feet.\n[/C1]" },
            { name: "PSALM 8", lyrics: "All of them, sheep and cattle,\nyes even the savage beasts,\nbirds of the air and fish\nthat make their way through the waters.\n[C1]How great is your name , O Lord our God,\nThrough all the earth![/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.\n[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 8)[/F1]\nOn the lips of children and\ninfants you have found perfect praise.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK1 Friday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 51)[/F1]\nLord, you will accept the\ntrue sacrifice offered on your altar." },
            { name: "PSALM 51", lyrics: "Have mercy on me, God, in your kindness.\nIn your compassion blot out my offense.\nO wash me more and more from my guilt\nand cleanse me from my sin.\n[C1]My offense truly I know them;\nmy sin is always before me.\nAgainst you, you alone, have I sinned;\nwhat is evil in your sight I have done.[/C1]" },
            { name: "PSALM 51", lyrics: "That you may be justified when you give sentence\nand be without reproach when you judge.\nO see, in guilt I was born,\na sinner was conceived.\n[C1]Indeed you love the truth in the heart;\nthen in the secret of my heart teach me wisdom.\nO purify me, then I shall be clean\no wash me, I shall be whiter than snow.[/C1]" },
            { name: "PSALM 51", lyrics: "Make me hear rejoicing and gladness,\nthat the bones you have crushed may revive.\nFrom my sins turn away your face\nand blot out all my guilt.\n[C1]A pure heart create for me, O God,\nput a steadfast spirit within me.\nDo not cast me away from your presence,\nnor deprive me of your Holy Spirit.[/C1]" },
            { name: "PSALM 51", lyrics: "Give me again the joy of your help;\nwith a spirit of fervor sustain me,\nthat I may teach transgressors your ways\nand sinners may return to you.\n[C1]O rescue me, God, my helper,\nand my tongue shall ring out goodness.\nO Lord, open my lips\nand my mouth shall declare your praise.[/C1]" },
            { name: "PSALM 51", lyrics: "For in sacrifice you take no delight,\nburnt offering from me you would refuse,\nmy sacrifice, a contrite spirit.\nA humbled, contrite heart you will not spurn.\n[C1]In your goodness, show favor to Zion:\nrebuild the walls of Jerusalem.\nThen you will pleased with lawful sacrifice,\nholocausts offered on your altar.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 51)[/F1]\nLord, you will accept the\ntrue sacrifice offered on your altar.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 100)[/F1]\nLet us go into God’s presence singing for joy." },
            { name: "PSALM 100", lyrics: "+ Cry out with joy to the Lord, all the earth.\nServe the Lord with gladness.\nCome before Him, singing for joy.\n[C1]+ Know the he, the Lord, is God.\nHe made us, we belong to him,\nWe are his people, the sheep of his flock.[/C1]" },
            { name: "PSALM 100", lyrics: "+ Go within his gates, giving thanks.\nEnter his courts with songs of praise.\nGive thanks to him and bless his name.\n[C1]+ Indeed, how good is the Lord,\nEternal His merciful love.\nHe is faithful from age to age.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 100)[/F1]\nLet us go into God’s presence singing for joy.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK1 Saturday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 119:145-152)[/F1]\nDawn finds me ready\nto welcome you, my God." },
            { name: "PSALM 119:145-152", lyrics: "I will call with all my heart; Lord, hear me,\nI will keep your commands.\nI will call upon you, save me\nand I will do your will.\n[C1]I rise before dawn and cry for help;\nI hope in your word.\nMy eyes watch through the night\nto ponder your promise.[/C1]" },
            { name: "PSALM 119:145-152", lyrics: "In Your love hear my voice, O Lord;\ngive me life by your decrees.\nThose who harm me unjustly drew near:\nthey are afar from your law.\n[C1]But, you O Lord, are close:\nyour commands are truth.\nLong have I known that your will\nis established forever.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 119:145-152)[/F1]\nDawn finds me ready\nto welcome you, my God.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 117)[/F1]\nBlessed is he who comes\nin the name of the Lord, alleluia." },
            { name: "PSALM 117", lyrics: "O praise the Lord, all you nations,\nacclaim Him, all you peoples!\n[C1]Strong is His love for us;\nhe is faithful for ever.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 117)[/F1]\nBlessed is he who comes\nin the name of the Lord, alleluia.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    },
    {
        title: "Morning Prayer WK1 Sunday",
        sections: [
            { name: "LEADER", lyrics: "[F1](PREPARATORY BLESSING)[/F1]\nLet my prayer, O Lord,\ncome before you as incense,\nthe lifting of my hands\nas a sacrifice.\n[F1](SIGN OF THE CROSS)[/F1]\n" },
            { name: "INVOCATION", lyrics: "O God, come to my assistance.\n[C1]O Lord, make haste to help me.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 63:2-9)[/F1]\nAs morning breaks I look to you,\nO God, to be my strength this day, alleluia" },
            { name: "PSALM 63:2-9", lyrics: "O God, you are my God, for you I long;\nfor you my soul is thirsting.\nMy body pines for you\nlike a dry, weary land without water.\nSo I gaze on you in the sanctuary\nto see your strength and your glory." },
            { name: "PSALM 63:2-9", lyrics: "[C1]For your love is better than life,\nmy lips will speak your praise.\nSo I will bless you all my life,\nin your name I will lift up my hands.\nMy soul shall be filled as with a banquet,\nmy mouth shall praise you with joy.[/C1]" },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 63:2-9)[/F1]\nAs morning breaks I look to you,\nO God, to be my strength this day, alleluia[/C1]" },
            { name: "ANTIPHON", lyrics: "[F1](PSALM 149)[/F1]\nLet the people of Zion\nrejoice in their king, alleluia." },
            { name: "PSALM 149", lyrics: "Sing a new song to the Lord,\nhis praise in the assembly of the faithful.\nLet Israel rejoice in its maker,\nlet Zion’s sons exult in their king.\nLet them praise His name with dancing\nand make music with timbrel and harp.\n[C1]For the Lord takes delight in his people.\nHe crowns the poor with salvation.\nLet the faithful rejoice in their glory,\nshout for joy and take their rest.\nLet the praise of God be in their lips\nand a two-edged sword in their hand[/C1]" },
            { name: "PSALM 149", lyrics: "To deal out vengeance to the nations\nand punishment to all the peoples;\nto bind their kings in chains\nand their nobles in fetters of iron;\nto carry out the sentence pre-ordained;\nthis honor is for all His faithful." },
            { name: "[C1]DOXOLOGY[/C1]", lyrics: "[C1]Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.[/C1]" },
            { name: "[C1]ANTIPHON[/C1]", lyrics: "[C1][F1](PSALM 149)[/F1]\nLet the people of Zion\nrejoice in their king, alleluia.[/C1]" },
            { name: "LEADER", lyrics: "[F1](PETITION)[/F1]\n[F1](THE LORD'S PRAYER)[/F1]\n[F1](SPONTANEOUS WORSHIP)[/F1]\n[F1](SCRIPTURE MEDITATION)[/F1]" }
        ]
    }
];
