import React from 'react';

const Technologies = () => {
    const technologies = [
        {
            id: 1,
            category: "Frontend",
            items: [
                { name: "HTML", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733120879/html.svg_wie0gi.png' },
                { name: "CSS", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733120694/css_qkf9yh.svg' },
                { name: "Tailwind CSS", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733121175/tailwindcss_p8o280.png' },
                { name: "JavaScript", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733120909/js_ylsphf.png' },
                { name: "TypeScript", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733121202/ts_inwyrl.png' },
                { name: "React", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733121108/react_gvbjdr.png' },
                { name: "Next.js", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733121061/nextjs_e4jejj.png' },
            ]
        },
        {
            id: 2,
            category: "Backend & Database Management",
            items: [
                { name: "Golang", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733120825/go_oblyj6.png' },
                { name: "Amqp", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733120647/amqp_ivpzdg.png' },
                { name: "Express.js", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733120770/Expressjs_cbrepo.svg' },
                { name: "gRPC", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733120854/grpc_kvbd0f.png' },
                { name: "MongoDB", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733120986/mongo_scpa9e.webp' },
                { name: "MySQL", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733121017/mysql_yw2jqy.png' },
                { name: "PostgreSQL", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733121084/postgres_zkj1po.jpg' },
                { name: "Redis", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733121136/redis_gtqcyv.png' },
            ]
        },
        {
            id: 3,
            category: "Blockchain, Cloud Technologies & DevOps",
            items: [
                { name: "Wagmi", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733121238/wagmi_bwqi6a.png' },
                { name: "Ethers.js", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733120743/ethers_khzkfa.png' },
                { name: "MetaMask", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733120959/metamask_ebqqip.jpg' },
                { name: "Git", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733120800/git_mfthja.png' },
                { name: "Github Action", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733120608/action_wqfb7b.png' },
                { name: "AWS", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733120672/aws_td1ldu.png' },
                { name: "Docker", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733120716/docker_obcvln.png' },
                { name: "Kubernetes", path: 'https://res.cloudinary.com/ds1ll9kkv/image/upload/v1733120934/k8s_jyadiv.png' }
            ]
        },
    ];

    return (
        <div data-name="technologies"
            className="w-full bg-gray-900 text-gray-500"
            id="technologies">
            <div className="bg-white text-black py-12 md:py-24">
                <div className="max-w-screen-lg mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Technologies</h2>
                    <p className="text-gray-600 mb-12">Here are the cutting-edge technologies I have worked with:</p>

                    {technologies.map(category => (
                        <div key={category.id} className="mb-10">
                            <h3 className="text-xl md:text-2xl font-semibold mb-5">{category.category} Technologies</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {category.items.map(item => (
                                    <div key={item.name} className="transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                                        <img alt={item.name} src={item.path} className="max-w-full h-auto rounded-lg shadow-md hover:shadow-lg" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Technologies;
