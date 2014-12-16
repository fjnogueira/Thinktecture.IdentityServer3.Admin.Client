using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Thinktecture.IdentityServer.v3.Admin.Client.Startup))]
namespace Thinktecture.IdentityServer.v3.Admin.Client
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}
