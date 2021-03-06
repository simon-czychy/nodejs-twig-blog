"use strict";
var moment = require("moment");
module.exports = class ArticleModel {
  constructor(title, subtitle, content, tags, authorId) {
    this.title = title;
    this.subtitle = subtitle;
    this.content = content;
    this.tags = tags.split(",");
    this.href = moment().format("YYMMDD-hhmmss") + "-" + this.title.replace(/\s+/g, '-').toLowerCase();
    this.authorId = authorId;
    this.createDate = moment().format("DD.MM.YYYY hh:mm:ss");
    this.releaseDate = this.createDate;
    this.changeDate = this.createDate;
  }

  setId(id) {
    this.id = id;
  }

  setTitle(title) {
    this.title = title;
  }

  setSubTitle(subtitle) {
    this.subtitle = subtitle;
  }

  setContent(content) {
    this.content = content;
  }

  setTags(tags) {
    this.tags = tags;
  }

  setHref(href) {
    this.href = href;
  }

  setAuthorId(authorId) {
    this.authorId = authorId;
  }

  setReleaseDate(releaseDate) {
    this.releaseDate = releaseDate;
  }

  setChangeDate(changeDate) {
    this.changeDate = changeDate;
  }
}
