// Switch these lines once there are useful utils
// const testUtils = require('./utils');
require('../utils');

const card = require('../../lib/cards/gallery');
const SimpleDom = require('simple-dom');
const serializer = new SimpleDom.HTMLSerializer(SimpleDom.voidMap);

describe('Gallery card', function () {
    it('renders a gallery', function () {
        let opts = {
            env: {
                dom: new SimpleDom.Document()
            },
            payload: {
                images: [
                    {
                        row: 0,
                        fileName: 'NatGeo01.jpg',
                        src: '/content/images/2018/08/NatGeo01-9.jpg',
                        width: 3200,
                        height: 1600
                    },
                    {
                        row: 0,
                        fileName: 'NatGeo02.jpg',
                        src: '/content/images/2018/08/NatGeo02-10.jpg',
                        width: 3200,
                        height: 1600
                    },
                    {
                        row: 0,
                        fileName: 'NatGeo03.jpg',
                        src: '/content/images/2018/08/NatGeo03-6.jpg',
                        width: 3200,
                        height: 1600
                    },
                    {
                        row: 1,
                        fileName: 'NatGeo04.jpg',
                        src: '/content/images/2018/08/NatGeo04-7.jpg',
                        alt: 'Alt test',
                        width: 3200,
                        height: 1600
                    },
                    {
                        row: 1,
                        fileName: 'NatGeo05.jpg',
                        src: '/content/images/2018/08/NatGeo05-4.jpg',
                        title: 'Title test',
                        width: 3200,
                        height: 1600
                    },
                    {
                        row: 1,
                        fileName: 'NatGeo06.jpg',
                        src: '/content/images/2018/08/NatGeo06-6.jpg',
                        width: 3200,
                        height: 1600
                    },
                    {
                        row: 2,
                        fileName: 'NatGeo07.jpg',
                        src: '/content/images/2018/08/NatGeo07-5.jpg',
                        width: 3200,
                        height: 1600
                    },
                    {
                        row: 2,
                        fileName: 'NatGeo09.jpg',
                        src: '/content/images/2018/08/NatGeo09-8.jpg',
                        width: 3200,
                        height: 1600
                    }
                ],
                caption: 'Test caption'
            }
        };

        serializer.serialize(card.render(opts)).should.eql('<figure class="kg-card kg-gallery-card kg-width-wide kg-card-hascaption"><div class="kg-gallery-container"><div class="kg-gallery-row"><div class="kg-gallery-image"><img src="/content/images/2018/08/NatGeo01-9.jpg" width="3200" height="1600" alt></div><div class="kg-gallery-image"><img src="/content/images/2018/08/NatGeo02-10.jpg" width="3200" height="1600" alt></div><div class="kg-gallery-image"><img src="/content/images/2018/08/NatGeo03-6.jpg" width="3200" height="1600" alt></div></div><div class="kg-gallery-row"><div class="kg-gallery-image"><img src="/content/images/2018/08/NatGeo04-7.jpg" width="3200" height="1600" alt="Alt test"></div><div class="kg-gallery-image"><img src="/content/images/2018/08/NatGeo05-4.jpg" width="3200" height="1600" alt title="Title test"></div><div class="kg-gallery-image"><img src="/content/images/2018/08/NatGeo06-6.jpg" width="3200" height="1600" alt></div></div><div class="kg-gallery-row"><div class="kg-gallery-image"><img src="/content/images/2018/08/NatGeo07-5.jpg" width="3200" height="1600" alt></div><div class="kg-gallery-image"><img src="/content/images/2018/08/NatGeo09-8.jpg" width="3200" height="1600" alt></div></div></div><figcaption>Test caption</figcaption></figure>');
    });

    it('renders nothing with no images', function () {
        let opts = {
            env: {
                dom: new SimpleDom.Document()
            },
            payload: {
                images: [],
                caption: 'Test caption'
            }
        };

        serializer.serialize(card.render(opts)).should.eql('');
    });

    it('renders nothing with no valid images', function () {
        let opts = {
            env: {
                dom: new SimpleDom.Document()
            },
            payload: {
                images: [{src: 'undefined'}],
                caption: 'Test caption'
            }
        };

        serializer.serialize(card.render(opts)).should.eql('');
    });

    it('renders images with alt text', function () {
        let opts = {
            env: {
                dom: new SimpleDom.Document()
            },
            payload: {
                images: [
                    {
                        row: 0,
                        fileName: 'NatGeo01.jpg',
                        src: '/content/images/2018/08/NatGeo01-9.jpg',
                        width: 3200,
                        height: 1600,
                        alt: 'alt test'
                    }
                ],
                caption: 'Test caption'
            }
        };

        serializer.serialize(card.render(opts)).should.eql('<figure class="kg-card kg-gallery-card kg-width-wide kg-card-hascaption"><div class="kg-gallery-container"><div class="kg-gallery-row"><div class="kg-gallery-image"><img src="/content/images/2018/08/NatGeo01-9.jpg" width="3200" height="1600" alt="alt test"></div></div></div><figcaption>Test caption</figcaption></figure>');
    });

    it('renders images with blank alt text', function () {
        let opts = {
            env: {
                dom: new SimpleDom.Document()
            },
            payload: {
                images: [
                    {
                        row: 0,
                        fileName: 'NatGeo01.jpg',
                        src: '/content/images/2018/08/NatGeo01-9.jpg',
                        width: 3200,
                        height: 1600
                    }
                ],
                caption: 'Test caption'
            }
        };

        serializer.serialize(card.render(opts)).should.eql('<figure class="kg-card kg-gallery-card kg-width-wide kg-card-hascaption"><div class="kg-gallery-container"><div class="kg-gallery-row"><div class="kg-gallery-image"><img src="/content/images/2018/08/NatGeo01-9.jpg" width="3200" height="1600" alt></div></div></div><figcaption>Test caption</figcaption></figure>');
    });

    it('skips invalid images', function () {
        let opts = {
            env: {
                dom: new SimpleDom.Document()
            },
            payload: {
                images: [
                    {
                        row: 0,
                        fileName: 'NatGeo01.jpg',
                        src: '/content/images/2018/08/NatGeo01-9.jpg',
                        width: 3200,
                        height: 1600
                    },
                    {
                        row: 0,
                        fileName: 'NatGeo02.jpg',
                        src: '/content/images/2018/08/NatGeo02-10.jpg'
                    },
                    {
                        row: 0,
                        fileName: 'NatGeo03.jpg',
                        src: '/content/images/2018/08/NatGeo03-6.jpg',
                        width: 3200,
                        height: 1600
                    }
                ],
                caption: 'Test caption'
            }
        };

        serializer.serialize(card.render(opts)).should.eql('<figure class="kg-card kg-gallery-card kg-width-wide kg-card-hascaption"><div class="kg-gallery-container"><div class="kg-gallery-row"><div class="kg-gallery-image"><img src="/content/images/2018/08/NatGeo01-9.jpg" width="3200" height="1600" alt></div><div class="kg-gallery-image"><img src="/content/images/2018/08/NatGeo03-6.jpg" width="3200" height="1600" alt></div></div></div><figcaption>Test caption</figcaption></figure>');
    });

    describe('srcset', function () {
        it('is included when image src is relative or Unsplash', function () {
            let opts = {
                env: {
                    dom: new SimpleDom.Document()
                },
                payload: {
                    images: [{
                        row: 0,
                        fileName: 'NatGeo01.jpg',
                        src: '/content/images/2018/08/NatGeo01-9.jpg',
                        width: 3200,
                        height: 1600
                    }, {
                        row: 0,
                        fileName: 'NatGeo02.jpg',
                        src: '/subdir/support/content/images/2018/08/NatGeo01-9.jpg',
                        width: 3200,
                        height: 1600
                    }, {
                        row: 0,
                        fileName: 'photo-1591672299888-e16a08b6c7ce',
                        src: 'https://images.unsplash.com/photo-1591672299888-e16a08b6c7ce?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ',
                        width: 2000,
                        height: 1600
                    }]
                },
                options: {
                    contentImageSizes: {
                        w600: {width: 600},
                        w1000: {width: 1000},
                        w1600: {width: 1600},
                        w2400: {width: 2400}
                    }
                }
            };

            serializer.serialize(card.render(opts)).should.eql('<figure class="kg-card kg-gallery-card kg-width-wide"><div class="kg-gallery-container"><div class="kg-gallery-row"><div class="kg-gallery-image"><img src="/content/images/2018/08/NatGeo01-9.jpg" width="3200" height="1600" alt srcset="/content/images/size/w600/2018/08/NatGeo01-9.jpg 600w, /content/images/size/w1000/2018/08/NatGeo01-9.jpg 1000w, /content/images/size/w1600/2018/08/NatGeo01-9.jpg 1600w, /content/images/size/w2400/2018/08/NatGeo01-9.jpg 2400w"></div><div class="kg-gallery-image"><img src="/subdir/support/content/images/2018/08/NatGeo01-9.jpg" width="3200" height="1600" alt srcset="/subdir/support/content/images/size/w600/2018/08/NatGeo01-9.jpg 600w, /subdir/support/content/images/size/w1000/2018/08/NatGeo01-9.jpg 1000w, /subdir/support/content/images/size/w1600/2018/08/NatGeo01-9.jpg 1600w, /subdir/support/content/images/size/w2400/2018/08/NatGeo01-9.jpg 2400w"></div><div class="kg-gallery-image"><img src="https://images.unsplash.com/photo-1591672299888-e16a08b6c7ce?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ" width="2000" height="1600" alt srcset="https://images.unsplash.com/photo-1591672299888-e16a08b6c7ce?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ 600w, https://images.unsplash.com/photo-1591672299888-e16a08b6c7ce?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ 1000w, https://images.unsplash.com/photo-1591672299888-e16a08b6c7ce?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ 1600w, https://images.unsplash.com/photo-1591672299888-e16a08b6c7ce?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ 2400w"></div></div></div></figure>');
        });

        it('is omitted when no contentImageSizes are passed as options', function () {
            let opts = {
                env: {
                    dom: new SimpleDom.Document()
                },
                payload: {
                    images: [{
                        row: 0,
                        fileName: 'NatGeo01.jpg',
                        src: '/content/images/2018/08/NatGeo01-9.jpg',
                        width: 3200,
                        height: 1600
                    }]
                },
                options: {}
            };

            serializer.serialize(card.render(opts)).should.eql('<figure class="kg-card kg-gallery-card kg-width-wide"><div class="kg-gallery-container"><div class="kg-gallery-row"><div class="kg-gallery-image"><img src="/content/images/2018/08/NatGeo01-9.jpg" width="3200" height="1600" alt></div></div></div></figure>');
        });
    });

    it('transforms urls absolute to relative', function () {
        let payload = {
            images: [
                {
                    row: 0,
                    fileName: 'NatGeo01.jpg',
                    src: 'http://127.0.0.1:2369/content/images/2018/08/NatGeo01-9.jpg',
                    width: 3200,
                    height: 1600,
                    caption: 'A link to <a href="http://127.0.0.1:2369/post">an internal post</a>'
                },
                {
                    row: 0,
                    fileName: 'NatGeo02.jpg',
                    src: 'http://127.0.0.1:2369/content/images/2018/08/NatGeo02-10.jpg',
                    caption: 'A link to <a href="http://127.0.0.1:2369/post">an internal post</a>'
                }
            ],
            caption: 'A link to <a href="http://127.0.0.1:2369/post">an internal post</a>'
        };

        const transformed = card.absoluteToRelative(payload, {siteUrl: 'http://127.0.0.1:2369/'});

        transformed.images[0].src
            .should.equal('/content/images/2018/08/NatGeo01-9.jpg');

        transformed.images[0].caption
            .should.equal('A link to <a href="/post">an internal post</a>');

        transformed.images[1].src
            .should.equal('/content/images/2018/08/NatGeo02-10.jpg');

        transformed.images[1].caption
            .should.equal('A link to <a href="/post">an internal post</a>');

        transformed.caption
            .should.equal('A link to <a href="/post">an internal post</a>');
    });

    it('transforms urls relative to absolute', function () {
        let payload = {
            images: [
                {
                    row: 0,
                    fileName: 'NatGeo01.jpg',
                    src: '/content/images/2018/08/NatGeo01-9.jpg',
                    width: 3200,
                    height: 1600
                },
                {
                    row: 0,
                    fileName: 'NatGeo02.jpg',
                    src: '/content/images/2018/08/NatGeo02-10.jpg'
                }
            ],
            caption: 'A link to <a href="/post">an internal post</a>'
        };

        const transformed = card.relativeToAbsolute(payload, {siteUrl: 'http://127.0.0.1:2369/', itemUrl: 'http://127.0.0.1:2369/post'});

        transformed.images[0].src
            .should.equal('http://127.0.0.1:2369/content/images/2018/08/NatGeo01-9.jpg');

        transformed.images[1].src
            .should.equal('http://127.0.0.1:2369/content/images/2018/08/NatGeo02-10.jpg');

        transformed.caption
            .should.equal('A link to <a href="http://127.0.0.1:2369/post">an internal post</a>');
    });
});
