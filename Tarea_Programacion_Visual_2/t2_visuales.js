s0.initImage("https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/440282399_980970303396715_3312461152690110892_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3IANGJW3UUoQ7kNvgFvIGGC&_nc_ht=scontent-qro1-2.xx&oh=00_AYDNFz6Ec4b0mfDWLuVOSx_B2R6RGZuWy-bB6XvLgDYrxg&oe=6649A325")
s1.initImage("https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/402581351_886905826136497_2500903541570575429_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BB4Pwdr28aoQ7kNvgE24lXh&_nc_ht=scontent-qro1-2.xx&oh=00_AYDfCQqW7b-LHUVXxYCuMU4nhoNqRKPKCuxkixKDS03OOA&oe=66499C6A")

src(s1)
	.modulateScale(voronoi(0.2,0.2,0.1))
	.blend(src(s0),[0,0.10,0.20,0.30,0.40,0.50,0.60,0.70,0.80,0.90])
  .out(o0)