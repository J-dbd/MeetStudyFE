source 'https://rubygems.org'

# GitHub Pages에서 제공하는 Jekyll 및 관련 플러그인들을 관리하기 위한 gem
gem 'github-pages', group: :jekyll_plugins


# Performance-booster for watching directories on Windows
# gem 'wdm', '~> 0.1.1', platforms: [:mingw, :mswin, :x64_mingw]

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem 'tzinfo', '>= 1', '< 3'
  gem 'tzinfo-data'
end

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem 'http_parser.rb', '~> 0.6.0', platforms: [:jruby]

group :jekyll_plugins do
  gem 'jekyll-feed', '~> 0.12'
end

# webrick 추가
gem 'webrick', '~> 1.7'