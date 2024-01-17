import React from 'react'
import "./TechStack.css";
function TechStack() {
    return (
        <div className='techstack'>
            <h4>
                Tech Stack
            </h4>
            <div className="technologies">
                <div className="lang1 stack">
                    <div className="lang"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" alt="" /></div>
                    <div className="lang"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA8FBMVEX///8gYq88nNcAAAD7+/vf3twAWqzl5OP29vXk4+Lo5+b5+fj09PMfYK49ntje3duHh4ePj48ufcHv7u0AU6kAVqo4brN5eXkpKSkAUaghlNQPXK0vmNa1tbXd3uDi6PKXrtPt6uU1jczK1ei9y+KAncrn5N7x7ukmbrewwd0reb7H0+bZ4e7r7/ZzlMaittdtbW1GdrhlisGPqNCzvc/Nzc2bm5sZGRkraLIxhcZeg7mfyOhusN5WgL17msiAueKx0uxcqdyUw+ZJSUnBwcFjY2MxMTGxsbHAx9LH3/HS19+mt9G61+6Yq8jT4/HM0NWZGpFvAAALl0lEQVR4nO2dfV/aXBKGowtBxGArxK6GB6UVfAWL2Ba1KvXp7uJrv/+32QQImeTMJCHJnNCn5/7ZfzwGcjUnmTtzZhJNU1JSUlJSUlJSUlJSWh59eIfopztaQ4e/uMM/sdEP+YCQ+hem9+5oGR3+nzv8Hh3OB4RUEsK/3GFFuBRShIpQEeavP4jw8wdPc4Sab9ffTUc/zyP+Vzj6tzucDwip+Q6uo8M/fYTC8Gc4vMm9r8k0378yPu5DFA2ZD/ELsn3+iiLUvoQjflh6xEhCP6J4kvkQfyLb561owt8dMQahtgkZ/iMMv1tuxDiECyH+hWyfq+Z7hkeLmUrhiF+XGXG+Y//29O2rO1qa/fq/3yDD/A7467fZMBxdWk8D9c90bYpQESrC3KQIMf1e+dJ37xF5OW9sGOS8sY3Fu0glJSUlJSUlJSWlP0LnO/qyaOechfDANJZF5gEL4SdzZVlkfmIh3KvnDTZXfY+FcG2JCNdYCLUlIuQB1Awjb7KZDIOJsL80hH0mwoulIbxgImxbeaPNZLWZCPczIUwc5gHhPhPhsZ4B4NFWQg09RP2YifAgA0LjqppQR96HMJk2TTvLwLYZW9XVRKqCY2ieMRFmYduSE4IPYTJtmlbYyZFwFVxpdgpMhFnYtsSEDUDIZdo0LT1gNoQrbIQZ2LbEhB+972YzbZnYtsSEV4CQy7RlYtuSElYBIZtps21b+pCfmHALWJp9NsIMbFtiwhMJpk3TTtObmsSE0LSdshFmYNsSEw4BIZdp07Ru+pCfmBB8Rr3LRpiBbUtMCC7jfKZN0wjCRe5jtxIBrq5CQj5AbZga0IogbDScf45WG77fA7MxZCS8RU2NudnxqSXo0NNGRRD5dYARmrZbRsIeamr0cXHTVtFT2VNpqnVXtQ1Ha55czoIn9+t2UUKrx0g4wAkveQi7HqHPtA0YCc9RU2O98hC+AUJo2ngWD6fCbZt112EhfPTOQ0mmjbJtxjUP4QgQyjFtlG0ztnkIbwhCPtNG2jadh/AeEIJcIqNpI22b2SxyEH73gkVVSqbNEX5zYY5ZCH/gpk3nBNSGqKmZBsTMCcEkBabN2GYlxG2b9dphICzglobVtFG2zWpzEHZzMG2UbZsGxKwJ33IwbZRtmwbErAmhpZFl2sglRIuDcEQQci0eTkVUfpnF+PeHa5GEs++6wW0pU8WXKyLbZmzH1fDqYa+yFqlKYW0EEjrSTBudbYuZwjBXBiVNvMkPqqDt3e/CJAbMJbKaNo3MRcWQYdVvLzc3a4Uo2deYHz4+fy6RMw/lyEq4/GToVvtXcbO5WYv6hsLIn4MK2FLDYibcTkRomf3XZrHpKIIwMD1FW8ps2jTtevEFNkM3e+PylC+CUJieMwFbal0zE94tSmiYw/1mqTnXBvnR9vTcxfACpu2OmRC3bSSeVb++XC+Vm9GExPQUCXlNG2XbCD5dbz+1SmWfcEJqes4uNFfSTNsilV9Gvf9su7SSXxhh4Ua8evoJ5Zm22AX7dnDvjQ9r66IEwtDpOSOUZ9rs/YlD6FxdSjWMb309UIMePj1dQmjauCq+XEUvkjpXl4ONGiVIGDk9EUJu0xZp2+yry+BsjeSDhDGmp0u44s1SbtMWYdusev94gz5+jty1tFjT0yUEpo030+aIrvwy9HrvqTK5/QvRhDDu9HQFTBtfxZcrqvLLMofntUi+jY3CItNzdghhLpGv4ssVYdv0i1OtEOPWdq3wUt2NJYAo07RRBfvGdatYjJeo6foOKUxl+G4SqVziPjshkW3rBxZnSMIaTNPA+3p/kkbbw3OJrIuHU+G2zRgmIsQSUbPvgbnEK4mmjc62ZU34gucS2U0bWbBvbmZMOMJziWxl+p6IPkvzVzFbwgd8AZirtxKKIBxnTEgtAPMDEn2WwSXE1IRwAdj7GrbeSijctunPGRPCjLdU00bZNv01Y0Lo6wAhv2mjCvatQSdbQmBpYC6Rr0zfE27bpnVR2RHmZ9rIyq+LbAn3cEIJpo20bbfZEr7hpo2ttxIqrPIrO0JiiZt58XAq3LYZRge7eypFEQr3FsgSt1zTFlL55VOx2GzOjqDD5S5318Qq6MlnCoRE1R5vxZcrIp9oIqpDTX910oCahYMbLUhI2VIZgOn6LNF+i8ZIIMRNG2NvJVSqPkuc8KUQJARVezCXKMO0peyzxAkfBUI4LNm0peyzRAl33wRCkKWRbdpS9lnihHtBQqIukbG3EipVnyVO2A1GC8KWSjFtKfssccKNICFRl8hapu+J6rO0dN2Od/DBccglCScUIn6epo1cQrReLwMar4iI+LVUCxK+EKaNffFwIsK26c9TZ9rplCc/pVILiZwoYVUgJOoS5Zg2apHUKfb2W+8WUhWOEv4QCAnTxr88OhXeZ+nkMQKESFV4TEIil8jZWwlFFOz3BELEG6CE3wVCvJmEuUzfE16w75Sz+wk7SEoHI2zcC4Twj7wPYS7T94TbNmeBLUD4LHoDlPBBIAS5RGjauCu+XBFLiEOB8DIm4Y0QD/FcInvFlyvCtplBwtJY9AYo4ShImK9pI22bKfQjPMUkfAkSwlyifNNG2jbzV5CwGZPwMUhI5RLlmDa6z3IcJGyJf4gSvgUJCVsqybTRtu1SIBSNKUa4KxASuURZpo3qs9RfBcJt4fZCIGzsrt53g/lSIpfIX/HlCu+ztI1pgLA0HvRN3VcJ5yNsNHa/j/Y0TcgI+0ybty13mb4nwra1g4TlUqtVvhz06x6lR9jYrT48EjlvYgFYlmkj+yx7AqGj9Var5FFOCacHzwHD1y3wXKI000b2Wd6ihJNFi9bhjNLamh+8kJUZwpbKMm0hfZYU4WT1wqFsb598H3UrlYi1p5xNG7mEaIQTOgs0tcNDmy5qdY3KJcoybSF9llGEMdcPCVsqoeLLVQzbloqQyiXKMm2kbcuMMG/TplG5KGjbUhESuURZeShHWK7XyyemJsQfTMPeWwmF91nqrxkR4rlEiaaN6rO0BhkR4rlE9t5KKLxg3xi2x51OJxWh/eHdF1i1J7VM3xPRZ2lYpt57bnY65WSE9ie/3QR6aXIxbWF9loal1/uvv1o25YKEtpV5vG8E29TzMW1RfZb2oRzeXZZandiETiPNyD54YisNNG0yKr5cRfZZ2ofSvH5u2jdOMQi1yuPDKtEolI9pi9tnqde3B+NWaz2E0Mbrjr5jBw8xbTIqvlzFfRitPV+N3mXZoUQI7cP39lAN7fLKy7Qt8ngM59Jz+/p02AoQVirdF+HCEkoo07Qt+ngMe77aobJ16BLaeEJUIAg9WyrVtCWo/HJC5cVz87BWW6tsvNxTFxaBEJg2ORVfrhJVfk1C5RMeFShCkEuUU/HlauHHY7i7qZ/Ex1v15RKlmrYUL0Za8GnXoJlESpm+p0Uej5GGENhSiXkoR4lfjLQgYSMn05bifZaLEVbzMm0pXowUn7BaXb06AVtKKdP3lPh9lvEIbbqPJ0PL1wgoo7cSio3QeQHZx6sj/6vkJoRyARO/zzKCsFptTOiQDWX0VkIlLdgPIZxMzRWL+L+TbNqSF+wThM7U3Dqy0KM321CuaUtesI8R0lMTSFKZvqekti1IOI0JMW7GJJs25zXkyaYpJMRiArndjlzTpmnd89sdM8FjImeEs5gQduKBbSxz5/Zcag5jpk+D7R19QcoJ4eTEW4l37Cx9Z3sg17D51D24s+r4ShSxx1ehMSHwx3rdujvI4+D5tXd8UY8/YY/iT836xblcLxqms/2+fVrGhIyWfeL19+WtacdU4bQ9XPi0FOWceCvtU2k1eguqe9zTFzotg3i6qfeO8z/xwnWWNI5MYsLSTU1Ci8aR3GNCEtlxxIg3Ye2YYCxDTEgiO46Y4RN22WJCEk3jCF6Q6sSE32xq4kLiyJLHhCSCccSJCRdLHxOSaBJH9N8pJiTRp3/GiaekpKSkpKSkpKSk9Mfp/wlLF4DkRsZ0AAAAAElFTkSuQmCC" alt="" /></div>
                    <div className="lang"><img src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="" /></div>
                    <div className="lang"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIv9VemwFYtx8jbgL0ap84wXK6uR8ss9RTJg&usqp=CAU" alt="" /></div>
                </div>
                <div className="lang2 stack">
                    <div className="lang"><img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="" /></div>
                    <div className="lang"><img src="https://static-00.iconduck.com/assets.00/nodejs-icon-1024x1024-yntsrxq0.png" alt="" /></div>
                    <div className="lang"><img src="https://youteam.io/blog/wp-content/uploads/2022/04/expressjs_logo.png" alt="" /></div>
                    <div className="lang"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAw1BMVEX/////yij/oAD1fxf/zCj/nQD/mwD/oQD/mgD1gBj+wCb///z/ySL/yBn1fRX/xgD/wyL/w3X/5aH/0lH/45r/8cz//PT/79n/8+P/1Fr/pBf/+er/9+n/4rr/ph3/1qn/yH7/qzD/zY3/34r2hiH8nyX/12T3jSX/2nT/0ET6mif/9+H/zjn/uFn/zYj/0Zj/vGn/rz7/1qH/6cz/3rP/rCb/5sL/7bv/9df/t1z/6bH/3oX/sUb4kyf/12//0Z//6Ku3TtQ6AAAHhElEQVR4nO2da1+bShDGA5GAB5B6KbExxlobL9VetK32co7t9/9UZ4EQYHcWCbA7G37zvLS84O8z+zA7C3Y0IpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJAWaT7HvQLGmnvcW+x7U6qNje2fYN6FS8cy2bcfHvg2Fmk4Y4eQz9m0o1GlCaLsx9n2o06eUcMgmfnESQns2WBP9+4xwuCbGrp3JHWqcHnsrwskD9q0o0mlOOFgTP09ywqGuxH0nJ7QXw4zT+4JwoCvRLmk2xJU490qEgzTxsUxou9i3o0BnE3vgJpaidKAr8b5KOEATXbuq70Mz8djhCAc3sfk64QjtBWDi/OHb1rY73wRCwMRTx/Pcrwh314fe8lXK4pS/Zppc47hzjPvrro8i4YQ3Mbtmso9yg13lnwuAtn1eXYnT1S9hcox0k5005x8WKcq3yjV5T+BspYlTIWgEE+N1HXvbuBLFKE1Ryia+W1/ifEG7z/b6BBLai+IKv/RjZwtX4hcxSjkTy3uPLVyJ/j0IWDaxErbbZ2IsASzi9LFSxi+Z+Pfw7sKszv3YkxA6eZxyHUHtM9G/jIIgutZy5011CgdNgnKaXsA/TepM9N+EFlN0q+nmG+mzlNA5Ty8QksiTmugfpoBWeKDt9htoH47SFCUxcS5UsdTEHNAKjSrT71LALE7fAR7DJq5KlCk41MtQL2mRZib6QNcKbzEKQIZoUJpKozStx/PRA/QbgJ6J6xI1LWoe6wjZMxHsB4CVWHaQLcQnBBSJzuqqlG0x4B8LW4wqoBUeocCAqolSJvdqCf6cN7FSosk6vMShgXRfS7jcu4L2x3xjwwNawQ4Wj6hFHeDs/d5eAxO5Ek2jxpgwPa4DZBaOZSaWnokAoBX9QISqSJwGVy0cjyUmFs9EoUTNCtO6KHU/MEBm4gz8V2cVpyCgFV7gchUCpsFVC5lqTYRKNImaN8hga/2UE2YWjqUr0TsZyRxkhHfYZCuB02DOQtlKTOJUBsgQT7DZMoHT4JVWFspNdOZyQCs0JEyn8q50sTvOJY3TSymgFf7CZssET4MTuf/tFYSwie6rQApohb+x2TJB21vBQlmcvpLzmdOZSqbBVQthE91aQBamZpwYS6N0Ma5KNLEekJWpEWHqN7MQMPEFB5mi19h0iaQjjMUe5yEXpy8DGjJRlE2D3SuBsGJiA0BDwvSPhHA5FlQ2sQmgIZ2pJEpngoUVExsBMkRsukSSaTBgYSlOGwJakQlhClsorsKKiQ0BjQjTW3gZLiHA3MSmDpoRpo8g4XrXBJnYHNCI4xl4hCGzMInTDQCN2ASD02CZhamJGwAyE7H5RqN/AUL3gwxwPN61djYiRD+eiaG+W27hePefjQANmCgeA/vaGgs3BTTgeAZ6oW222xugFTxjEwJRyu+augBawQ02ITANXsgsbAHIhN23idNgqYXtALHDFJgGyyxsB4gepuILbTILWwKiH8+I02CJhW0B0cNUmAZLLGwNyMIU9yRYmAbDLXd7QFamuDNTfoQBzS66AWKfdfMjDHB20QkQ+3jGa2BhN0DkMOWjFFqFHQGRJ4rcNBgaP3UFRJ4octNgwMLugFaEGabVKAU2vj0A4k4Uq12puPHtAxA1TKvv/ooW9gKIejwzLRepOLvoBxD1he/KC22ChT0BMuERlt/fFizsDxBxE1yeBvO7pv4AMcO0NA3md009AiIez5SnwZyFfQIiHs+U3g3mLOwVELEzLfXdVQv7BUR8caiI0qqFPQMifj1TTIMXCh1MCLEmiutpcGXX1D8g2vGMvx5hLNUCooVpnC/D8uxCBSDa8cw6SpdqHWQKcWam+TS4ZKEiQKwwzT9vXioHxDqeWX1iX+yalAFihanLWagOEOuFb69qoUJAy0L5FDGL0vXGVykgzkQxmwbnFqoFxDmeSafBuYWKAXHCNO1KVxaqBsQ5njkvdk3KAVE2wen/ZpFtfNUDoryFOV1bqAGQIerv25Jp8EKTgxZKmD5MMgv1AFrhX+2E+066a9IEiHE889FJZhe6ABE603iRtNzaABEmivPEQn2ACJ8ifvWWWgH1H8882O+1Auo/nvnkjbUC6g/Tn1d6AfWfdZ9rBrSCSDPhnfwvIShReKM7aU5+RzV/DKF3vvAAYSb841AXYxBdIn2S8GRpKdXwDu9NBf8iVM4YBrhfPt1eqi3VIHpG/zzv9Y5CG0PLgC+dR6OjQBEjdoEWOrlWUaqsQLE/6irp9U3UN2Ck/RH/gv72m6qhCR/ic4qvw95KNQivDSrQQj/e9FSqxhVooV99pGoYYfSgTcWanI6lalaCQurY5OjfJLXQU/utI84maXP5R1ErRvMLtNDJc4vlaHCCQtq4yQkD8x7x9fIPNmlygsjMR3y94sb9eIC5i+8k1uQ0Ydy+Ai3p18vb4+0s0ELxS0PHaFsLtNBtXamauElqIWmTs+0FWig+Am3cskd8vU7EfnwgBVqINTllxuEUaCH/wIqybjUIwuhwQAVaKH66uImYdp4PDPlb60p0e7sVO0ASiUQikUgkEolEIpFIJBKJRCKRSCQSiTRI/Q8l5qasFnto0AAAAABJRU5ErkJggg==" alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default TechStack