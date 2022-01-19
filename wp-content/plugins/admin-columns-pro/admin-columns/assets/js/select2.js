/*! Select2 4.0.12 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function( n ) {"function" == typeof define && define.amd ? define( ["jquery"], n ) : "object" == typeof module && module.exports ? module.exports = function( e, t ) {return void 0 === t && (t = "undefined" != typeof window ? require( "jquery" ) : require( "jquery" )( e )), n( t ), t} : n( jQuery )}( function( d ) {
	var e = function() {
		if ( d && d.fn && d.fn.select2 && d.fn.select2.amd ) var e = d.fn.select2.amd;
		var t, n, i, h, o, s, f, g, m, v, y, _, r, a, w, l;

		function b( e, t ) {return r.call( e, t )}

		function c( e, t ) {
			var n, i, r, o, s, a, l, c, u, d, p, h = t && t.split( "/" ), f = y.map, g = f && f[ "*" ] || {};
			if ( e ) {
				for ( s = (e = e.split( "/" )).length - 1, y.nodeIdCompat && w.test( e[ s ] ) && (e[ s ] = e[ s ].replace( w, "" )), "." === e[ 0 ].charAt( 0 ) && h && (e = h.slice( 0, h.length - 1 ).concat( e )), u = 0; u < e.length; u++ ) if ( "." === (p = e[ u ]) ) e.splice( u, 1 ), u -= 1; else if ( ".." === p ) {
					if ( 0 === u || 1 === u && ".." === e[ 2 ] || ".." === e[ u - 1 ] ) continue;
					0 < u && (e.splice( u - 1, 2 ), u -= 2)
				}
				e = e.join( "/" )
			}
			if ( (h || g) && f ) {
				for ( u = (n = e.split( "/" )).length; 0 < u; u -= 1 ) {
					if ( i = n.slice( 0, u ).join( "/" ), h ) for ( d = h.length; 0 < d; d -= 1 ) if ( r = (r = f[ h.slice( 0, d ).join( "/" ) ]) && r[ i ] ) {
						o = r, a = u;
						break
					}
					if ( o ) break;
					!l && g && g[ i ] && (l = g[ i ], c = u)
				}
				!o && l && (o = l, a = c), o && (n.splice( 0, a, o ), e = n.join( "/" ))
			}
			return e
		}

		function A( t, n ) {
			return function() {
				var e = a.call( arguments, 0 );
				return "string" != typeof e[ 0 ] && 1 === e.length && e.push( null ), s.apply( h, e.concat( [t, n] ) )
			}
		}

		function x( t ) {return function( e ) {m[ t ] = e}}

		function S( e ) {
			if ( b( v, e ) ) {
				var t = v[ e ];
				delete v[ e ], _[ e ] = !0, o.apply( h, t )
			}
			if ( !b( m, e ) && !b( _, e ) ) throw new Error( "No " + e );
			return m[ e ]
		}

		function u( e ) {
			var t, n = e ? e.indexOf( "!" ) : -1;
			return -1 < n && (t = e.substring( 0, n ), e = e.substring( n + 1, e.length )), [t, e]
		}

		function D( e ) {return e ? u( e ) : []}

		return e && e.requirejs || (e ? n = e : e = {}, m = {}, v = {}, y = {}, _ = {}, r = Object.prototype.hasOwnProperty, a = [].slice, w = /\.js$/, f = function( e, t ) {
			var n, i = u( e ), r = i[ 0 ], o = t[ 1 ];
			return e = i[ 1 ], r && (n = S( r = c( r, o ) )), r ? e = n && n.normalize ? n.normalize( e, function( t ) {return function( e ) {return c( e, t )}}( o ) ) : c( e, o ) : (r = (i = u( e = c( e, o ) ))[ 0 ], e = i[ 1 ], r && (n = S( r ))), { f : r ? r + "!" + e : e, n : e, pr : r, p : n }
		}, g = {
			require : function( e ) {return A( e )}, exports : function( e ) {
				var t = m[ e ];
				return void 0 !== t ? t : m[ e ] = {}
			}, module : function( e ) {return { id : e, uri : "", exports : m[ e ], config : function( e ) {return function() {return y && y.config && y.config[ e ] || {}}}( e ) }}
		}, o = function( e, t, n, i ) {
			var r, o, s, a, l, c, u, d = [], p = typeof n;
			if ( c = D( i = i || e ), "undefined" == p || "function" == p ) {
				for ( t = !t.length && n.length ? ["require", "exports", "module"] : t, l = 0; l < t.length; l += 1 ) if ( "require" === (o = (a = f( t[ l ], c )).f) ) d[ l ] = g.require( e ); else if ( "exports" === o ) d[ l ] = g.exports( e ), u = !0; else if ( "module" === o ) r = d[ l ] = g.module( e ); else if ( b( m, o ) || b( v, o ) || b( _, o ) ) d[ l ] = S( o ); else {
					if ( !a.p ) throw new Error( e + " missing " + o );
					a.p.load( a.n, A( i, !0 ), x( o ), {} ), d[ l ] = m[ o ]
				}
				s = n ? n.apply( m[ e ], d ) : void 0, e && (r && r.exports !== h && r.exports !== m[ e ] ? m[ e ] = r.exports : s === h && u || (m[ e ] = s))
			} else e && (m[ e ] = n)
		}, t = n = s = function( e, t, n, i, r ) {
			if ( "string" == typeof e ) return g[ e ] ? g[ e ]( t ) : S( f( e, D( t ) ).f );
			if ( !e.splice ) {
				if ( (y = e).deps && s( y.deps, y.callback ), !t ) return;
				t.splice ? (e = t, t = n, n = null) : e = h
			}
			return t = t || function() {}, "function" == typeof n && (n = i, i = r), i ? o( h, e, t, n ) : setTimeout( function() {o( h, e, t, n )}, 4 ), s
		}, s.config = function( e ) {return s( e )}, t._defined = m, (i = function( e, t, n ) {
			if ( "string" != typeof e ) throw new Error( "See almond README: incorrect module build, no module name" );
			t.splice || (n = t, t = []), b( m, e ) || b( v, e ) || (v[ e ] = [e, t, n])
		}).amd = { jQuery : !0 }, e.requirejs = t, e.require = n, e.define = i), e.define( "almond", function() {} ), e.define( "jquery", [], function() {
			var e = d || $;
			return null == e && console && console.error && console.error( "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page." ), e
		} ), e.define( "select2/utils", ["jquery"], function( o ) {
			var r = {};

			function u( e ) {
				var t = e.prototype, n = [];
				for ( var i in t ) {
					"function" == typeof t[ i ] && "constructor" !== i && n.push( i )
				}
				return n
			}

			r.Extend = function( e, t ) {
				var n = {}.hasOwnProperty;

				function i() {this.constructor = e}

				for ( var r in t ) n.call( t, r ) && (e[ r ] = t[ r ]);
				return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
			}, r.Decorate = function( i, r ) {
				var e = u( r ), t = u( i );

				function o() {
					var e = Array.prototype.unshift, t = r.prototype.constructor.length, n = i.prototype.constructor;
					0 < t && (e.call( arguments, i.prototype.constructor ), n = r.prototype.constructor), n.apply( this, arguments )
				}

				r.displayName = i.displayName, o.prototype = new function() {this.constructor = o};
				for ( var n = 0; n < t.length; n++ ) {
					var s = t[ n ];
					o.prototype[ s ] = i.prototype[ s ]
				}

				function a( e ) {
					var t = function() {};
					e in o.prototype && (t = o.prototype[ e ]);
					var n = r.prototype[ e ];
					return function() {return Array.prototype.unshift.call( arguments, t ), n.apply( this, arguments )}
				}

				for ( var l = 0; l < e.length; l++ ) {
					var c = e[ l ];
					o.prototype[ c ] = a( c )
				}
				return o
			};

			function e() {this.listeners = {}}

			e.prototype.on = function( e, t ) {this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[ e ].push( t ) : this.listeners[ e ] = [t]}, e.prototype.trigger = function( e ) {
				var t = Array.prototype.slice, n = t.call( arguments, 1 );
				this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push( {} ), (n[ 0 ]._type = e) in this.listeners && this.invoke( this.listeners[ e ], t.call( arguments, 1 ) ), "*" in this.listeners && this.invoke( this.listeners[ "*" ], arguments )
			}, e.prototype.invoke = function( e, t ) {for ( var n = 0, i = e.length; n < i; n++ ) e[ n ].apply( this, t )}, r.Observable = e, r.generateChars = function( e ) {
				for ( var t = "", n = 0; n < e; n++ ) {
					t += Math.floor( 36 * Math.random() ).toString( 36 )
				}
				return t
			}, r.bind = function( e, t ) {return function() {e.apply( t, arguments )}}, r._convertData = function( e ) {
				for ( var t in e ) {
					var n = t.split( "-" ), i = e;
					if ( 1 !== n.length ) {
						for ( var r = 0; r < n.length; r++ ) {
							var o = n[ r ];
							(o = o.substring( 0, 1 ).toLowerCase() + o.substring( 1 )) in i || (i[ o ] = {}), r == n.length - 1 && (i[ o ] = e[ t ]), i = i[ o ]
						}
						delete e[ t ]
					}
				}
				return e
			}, r.hasScroll = function( e, t ) {
				var n = o( t ), i = t.style.overflowX, r = t.style.overflowY;
				return (i !== r || "hidden" !== r && "visible" !== r) && ("scroll" === i || "scroll" === r || (n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth))
			}, r.escapeMarkup = function( e ) {
				var t = { "\\" : "&#92;", "&" : "&amp;", "<" : "&lt;", ">" : "&gt;", '"' : "&quot;", "'" : "&#39;", "/" : "&#47;" };
				return "string" != typeof e ? e : String( e ).replace( /[&<>"'\/\\]/g, function( e ) {return t[ e ]} )
			}, r.appendMany = function( e, t ) {
				if ( "1.7" === o.fn.jquery.substr( 0, 3 ) ) {
					var n = o();
					o.map( t, function( e ) {n = n.add( e )} ), t = n
				}
				e.append( t )
			}, r.__cache = {};
			var n = 0;
			return r.GetUniqueElementId = function( e ) {
				var t = e.getAttribute( "data-select2-id" );
				return null == t && (e.id ? (t = e.id, e.setAttribute( "data-select2-id", t )) : (e.setAttribute( "data-select2-id", ++n ), t = n.toString())), t
			}, r.StoreData = function( e, t, n ) {
				var i = r.GetUniqueElementId( e );
				r.__cache[ i ] || (r.__cache[ i ] = {}), r.__cache[ i ][ t ] = n
			}, r.GetData = function( e, t ) {
				var n = r.GetUniqueElementId( e );
				return t ? r.__cache[ n ] && null != r.__cache[ n ][ t ] ? r.__cache[ n ][ t ] : o( e ).data( t ) : r.__cache[ n ]
			}, r.RemoveData = function( e ) {
				var t = r.GetUniqueElementId( e );
				null != r.__cache[ t ] && delete r.__cache[ t ], e.removeAttribute( "data-select2-id" )
			}, r
		} ), e.define( "select2/results", ["jquery", "./utils"], function( h, f ) {
			function i( e, t, n ) {this.$element = e, this.data = n, this.options = t, i.__super__.constructor.call( this )}

			return f.Extend( i, f.Observable ), i.prototype.render = function() {
				var e = h( '<ul class="select2-results__options" role="listbox"></ul>' );
				return this.options.get( "multiple" ) && e.attr( "aria-multiselectable", "true" ), this.$results = e
			}, i.prototype.clear = function() {this.$results.empty()}, i.prototype.displayMessage = function( e ) {
				var t = this.options.get( "escapeMarkup" );
				this.clear(), this.hideLoading();
				var n = h( '<li role="alert" aria-live="assertive" class="select2-results__option"></li>' ), i = this.options.get( "translations" ).get( e.message );
				n.append( t( i( e.args ) ) ), n[ 0 ].className += " select2-results__message", this.$results.append( n )
			}, i.prototype.hideMessages = function() {this.$results.find( ".select2-results__message" ).remove()}, i.prototype.append = function( e ) {
				this.hideLoading();
				var t = [];
				if ( null != e.results && 0 !== e.results.length ) {
					e.results = this.sort( e.results );
					for ( var n = 0; n < e.results.length; n++ ) {
						var i = e.results[ n ], r = this.option( i );
						t.push( r )
					}
					this.$results.append( t )
				} else 0 === this.$results.children().length && this.trigger( "results:message", { message : "noResults" } )
			}, i.prototype.position = function( e, t ) {t.find( ".select2-results" ).append( e )}, i.prototype.sort = function( e ) {return this.options.get( "sorter" )( e )}, i.prototype.highlightFirstItem = function() {
				var e = this.$results.find( ".select2-results__option[aria-selected]" ), t = e.filter( "[aria-selected=true]" );
				0 < t.length ? t.first().trigger( "mouseenter" ) : e.first().trigger( "mouseenter" ), this.ensureHighlightVisible()
			}, i.prototype.setClasses = function() {
				var t = this;
				this.data.current( function( e ) {
					var i = h.map( e, function( e ) {return e.id.toString()} );
					t.$results.find( ".select2-results__option[aria-selected]" ).each( function() {
						var e = h( this ), t = f.GetData( this, "data" ), n = "" + t.id;
						null != t.element && t.element.selected || null == t.element && -1 < h.inArray( n, i ) ? e.attr( "aria-selected", "true" ) : e.attr( "aria-selected", "false" )
					} )
				} )
			}, i.prototype.showLoading = function( e ) {
				this.hideLoading();
				var t = { disabled : !0, loading : !0, text : this.options.get( "translations" ).get( "searching" )( e ) }, n = this.option( t );
				n.className += " loading-results", this.$results.prepend( n )
			}, i.prototype.hideLoading = function() {this.$results.find( ".loading-results" ).remove()}, i.prototype.option = function( e ) {
				var t = document.createElement( "li" );
				t.className = "select2-results__option";
				var n = { role : "option", "aria-selected" : "false" }, i = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
				for ( var r in (null != e.element && i.call( e.element, ":disabled" ) || null == e.element && e.disabled) && (delete n[ "aria-selected" ], n[ "aria-disabled" ] = "true"), null == e.id && delete n[ "aria-selected" ], null != e._resultId && (t.id = e._resultId), e.title && (t.title = e.title), e.children && (n.role = "group", n[ "aria-label" ] = e.text, delete n[ "aria-selected" ]), n ) {
					var o = n[ r ];
					t.setAttribute( r, o )
				}
				if ( e.children ) {
					var s = h( t ), a = document.createElement( "strong" );
					a.className = "select2-results__group";
					h( a );
					this.template( e, a );
					for ( var l = [], c = 0; c < e.children.length; c++ ) {
						var u = e.children[ c ], d = this.option( u );
						l.push( d )
					}
					var p = h( "<ul></ul>", { class : "select2-results__options select2-results__options--nested" } );
					p.append( l ), s.append( a ), s.append( p )
				} else this.template( e, t );
				return f.StoreData( t, "data", e ), t
			}, i.prototype.bind = function( t, e ) {
				var l = this, n = t.id + "-results";
				this.$results.attr( "id", n ), t.on( "results:all", function( e ) {l.clear(), l.append( e.data ), t.isOpen() && (l.setClasses(), l.highlightFirstItem())} ), t.on( "results:append", function( e ) {l.append( e.data ), t.isOpen() && l.setClasses()} ), t.on( "query", function( e ) {l.hideMessages(), l.showLoading( e )} ), t.on( "select", function() {t.isOpen() && (l.setClasses(), l.options.get( "scrollAfterSelect" ) && l.highlightFirstItem())} ), t.on( "unselect", function() {t.isOpen() && (l.setClasses(), l.options.get( "scrollAfterSelect" ) && l.highlightFirstItem())} ), t.on( "open", function() {l.$results.attr( "aria-expanded", "true" ), l.$results.attr( "aria-hidden", "false" ), l.setClasses(), l.ensureHighlightVisible()} ), t.on( "close", function() {l.$results.attr( "aria-expanded", "false" ), l.$results.attr( "aria-hidden", "true" ), l.$results.removeAttr( "aria-activedescendant" )} ), t.on( "results:toggle", function() {
					var e = l.getHighlightedResults();
					0 !== e.length && e.trigger( "mouseup" )
				} ), t.on( "results:select", function() {
					var e = l.getHighlightedResults();
					if ( 0 !== e.length ) {
						var t = f.GetData( e[ 0 ], "data" );
						"true" == e.attr( "aria-selected" ) ? l.trigger( "close", {} ) : l.trigger( "select", { data : t } )
					}
				} ), t.on( "results:previous", function() {
					var e = l.getHighlightedResults(), t = l.$results.find( "[aria-selected]" ), n = t.index( e );
					if ( !(n <= 0) ) {
						var i = n - 1;
						0 === e.length && (i = 0);
						var r = t.eq( i );
						r.trigger( "mouseenter" );
						var o = l.$results.offset().top, s = r.offset().top, a = l.$results.scrollTop() + (s - o);
						0 === i ? l.$results.scrollTop( 0 ) : s - o < 0 && l.$results.scrollTop( a )
					}
				} ), t.on( "results:next", function() {
					var e = l.getHighlightedResults(), t = l.$results.find( "[aria-selected]" ), n = t.index( e ) + 1;
					if ( !(n >= t.length) ) {
						var i = t.eq( n );
						i.trigger( "mouseenter" );
						var r = l.$results.offset().top + l.$results.outerHeight( !1 ), o = i.offset().top + i.outerHeight( !1 ), s = l.$results.scrollTop() + o - r;
						0 === n ? l.$results.scrollTop( 0 ) : r < o && l.$results.scrollTop( s )
					}
				} ), t.on( "results:focus", function( e ) {e.element.addClass( "select2-results__option--highlighted" )} ), t.on( "results:message", function( e ) {l.displayMessage( e )} ), h.fn.mousewheel && this.$results.on( "mousewheel", function( e ) {
					var t = l.$results.scrollTop(), n = l.$results.get( 0 ).scrollHeight - t + e.deltaY, i = 0 < e.deltaY && t - e.deltaY <= 0, r = e.deltaY < 0 && n <= l.$results.height();
					i ? (l.$results.scrollTop( 0 ), e.preventDefault(), e.stopPropagation()) : r && (l.$results.scrollTop( l.$results.get( 0 ).scrollHeight - l.$results.height() ), e.preventDefault(), e.stopPropagation())
				} ), this.$results.on( "mouseup", ".select2-results__option[aria-selected]", function( e ) {
					var t = h( this ), n = f.GetData( this, "data" );
					"true" !== t.attr( "aria-selected" ) ? l.trigger( "select", { originalEvent : e, data : n } ) : l.options.get( "multiple" ) ? l.trigger( "unselect", { originalEvent : e, data : n } ) : l.trigger( "close", {} )
				} ), this.$results.on( "mouseenter", ".select2-results__option[aria-selected]", function( e ) {
					var t = f.GetData( this, "data" );
					l.getHighlightedResults().removeClass( "select2-results__option--highlighted" ), l.trigger( "results:focus", { data : t, element : h( this ) } )
				} )
			}, i.prototype.getHighlightedResults = function() {return this.$results.find( ".select2-results__option--highlighted" )}, i.prototype.destroy = function() {this.$results.remove()}, i.prototype.ensureHighlightVisible = function() {
				var e = this.getHighlightedResults();
				if ( 0 !== e.length ) {
					var t = this.$results.find( "[aria-selected]" ).index( e ), n = this.$results.offset().top, i = e.offset().top, r = this.$results.scrollTop() + (i - n), o = i - n;
					r -= 2 * e.outerHeight( !1 ), t <= 2 ? this.$results.scrollTop( 0 ) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop( r )
				}
			}, i.prototype.template = function( e, t ) {
				var n = this.options.get( "templateResult" ), i = this.options.get( "escapeMarkup" ), r = n( e, t );
				null == r ? t.style.display = "none" : "string" == typeof r ? t.innerHTML = i( r ) : h( t ).append( r )
			}, i
		} ), e.define( "select2/keys", [], function() {return { BACKSPACE : 8, TAB : 9, ENTER : 13, SHIFT : 16, CTRL : 17, ALT : 18, ESC : 27, SPACE : 32, PAGE_UP : 33, PAGE_DOWN : 34, END : 35, HOME : 36, LEFT : 37, UP : 38, RIGHT : 39, DOWN : 40, DELETE : 46 }} ), e.define( "select2/selection/base", ["jquery", "../utils", "../keys"], function( n, i, r ) {
			function o( e, t ) {this.$element = e, this.options = t, o.__super__.constructor.call( this )}

			return i.Extend( o, i.Observable ), o.prototype.render = function() {
				var e = n( '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>' );
				return this._tabindex = 0, null != i.GetData( this.$element[ 0 ], "old-tabindex" ) ? this._tabindex = i.GetData( this.$element[ 0 ], "old-tabindex" ) : null != this.$element.attr( "tabindex" ) && (this._tabindex = this.$element.attr( "tabindex" )), e.attr( "title", this.$element.attr( "title" ) ), e.attr( "tabindex", this._tabindex ), e.attr( "aria-disabled", "false" ), this.$selection = e
			}, o.prototype.bind = function( e, t ) {
				var n = this, i = e.id + "-results";
				this.container = e, this.$selection.on( "focus", function( e ) {n.trigger( "focus", e )} ), this.$selection.on( "blur", function( e ) {n._handleBlur( e )} ), this.$selection.on( "keydown", function( e ) {n.trigger( "keypress", e ), e.which === r.SPACE && e.preventDefault()} ), e.on( "results:focus", function( e ) {n.$selection.attr( "aria-activedescendant", e.data._resultId )} ), e.on( "selection:update", function( e ) {n.update( e.data )} ), e.on( "open", function() {n.$selection.attr( "aria-expanded", "true" ), n.$selection.attr( "aria-owns", i ), n._attachCloseHandler( e )} ), e.on( "close", function() {n.$selection.attr( "aria-expanded", "false" ), n.$selection.removeAttr( "aria-activedescendant" ), n.$selection.removeAttr( "aria-owns" ), n.$selection.trigger( "focus" ), n._detachCloseHandler( e )} ), e.on( "enable", function() {n.$selection.attr( "tabindex", n._tabindex ), n.$selection.attr( "aria-disabled", "false" )} ), e.on( "disable", function() {n.$selection.attr( "tabindex", "-1" ), n.$selection.attr( "aria-disabled", "true" )} )
			}, o.prototype._handleBlur = function( e ) {
				var t = this;
				window.setTimeout( function() {document.activeElement == t.$selection[ 0 ] || n.contains( t.$selection[ 0 ], document.activeElement ) || t.trigger( "blur", e )}, 1 )
			}, o.prototype._attachCloseHandler = function( e ) {
				n( document.body ).on( "mousedown.select2." + e.id, function( e ) {
					var t = n( e.target ).closest( ".select2" );
					n( ".select2.select2-container--open" ).each( function() {this != t[ 0 ] && i.GetData( this, "element" ).select2( "close" )} )
				} )
			}, o.prototype._detachCloseHandler = function( e ) {n( document.body ).off( "mousedown.select2." + e.id )}, o.prototype.position = function( e, t ) {t.find( ".selection" ).append( e )}, o.prototype.destroy = function() {this._detachCloseHandler( this.container )}, o.prototype.update = function( e ) {throw new Error( "The `update` method must be defined in child classes." )}, o
		} ), e.define( "select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function( e, t, n, i ) {
			function r() {r.__super__.constructor.apply( this, arguments )}

			return n.Extend( r, t ), r.prototype.render = function() {
				var e = r.__super__.render.call( this );
				return e.addClass( "select2-selection--single" ), e.html( '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>' ), e
			}, r.prototype.bind = function( t, e ) {
				var n = this;
				r.__super__.bind.apply( this, arguments );
				var i = t.id + "-container";
				this.$selection.find( ".select2-selection__rendered" ).attr( "id", i ).attr( "role", "textbox" ).attr( "aria-readonly", "true" ), this.$selection.attr( "aria-labelledby", i ), this.$selection.on( "mousedown", function( e ) {1 === e.which && n.trigger( "toggle", { originalEvent : e } )} ), this.$selection.on( "focus", function( e ) {} ), this.$selection.on( "blur", function( e ) {} ), t.on( "focus", function( e ) {t.isOpen() || n.$selection.trigger( "focus" )} )
			}, r.prototype.clear = function() {
				var e = this.$selection.find( ".select2-selection__rendered" );
				e.empty(), e.removeAttr( "title" )
			}, r.prototype.display = function( e, t ) {
				var n = this.options.get( "templateSelection" );
				return this.options.get( "escapeMarkup" )( n( e, t ) )
			}, r.prototype.selectionContainer = function() {return e( "<span></span>" )}, r.prototype.update = function( e ) {
				if ( 0 !== e.length ) {
					var t = e[ 0 ], n = this.$selection.find( ".select2-selection__rendered" ), i = this.display( t, n );
					n.empty().append( i );
					var r = t.title || t.text;
					r ? n.attr( "title", r ) : n.removeAttr( "title" )
				} else this.clear()
			}, r
		} ), e.define( "select2/selection/multiple", ["jquery", "./base", "../utils"], function( r, e, l ) {
			function n( e, t ) {n.__super__.constructor.apply( this, arguments )}

			return l.Extend( n, e ), n.prototype.render = function() {
				var e = n.__super__.render.call( this );
				return e.addClass( "select2-selection--multiple" ), e.html( '<ul class="select2-selection__rendered"></ul>' ), e
			}, n.prototype.bind = function( e, t ) {
				var i = this;
				n.__super__.bind.apply( this, arguments ), this.$selection.on( "click", function( e ) {i.trigger( "toggle", { originalEvent : e } )} ), this.$selection.on( "click", ".select2-selection__choice__remove", function( e ) {
					if ( !i.options.get( "disabled" ) ) {
						var t = r( this ).parent(), n = l.GetData( t[ 0 ], "data" );
						i.trigger( "unselect", { originalEvent : e, data : n } )
					}
				} )
			}, n.prototype.clear = function() {
				var e = this.$selection.find( ".select2-selection__rendered" );
				e.empty(), e.removeAttr( "title" )
			}, n.prototype.display = function( e, t ) {
				var n = this.options.get( "templateSelection" );
				return this.options.get( "escapeMarkup" )( n( e, t ) )
			}, n.prototype.selectionContainer = function() {return r( '<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>' )}, n.prototype.update = function( e ) {
				if ( this.clear(), 0 !== e.length ) {
					for ( var t = [], n = 0; n < e.length; n++ ) {
						var i = e[ n ], r = this.selectionContainer(), o = this.display( i, r );
						r.append( o );
						var s = i.title || i.text;
						s && r.attr( "title", s ), l.StoreData( r[ 0 ], "data", i ), t.push( r )
					}
					var a = this.$selection.find( ".select2-selection__rendered" );
					l.appendMany( a, t )
				}
			}, n
		} ), e.define( "select2/selection/placeholder", ["../utils"], function( e ) {
			function t( e, t, n ) {this.placeholder = this.normalizePlaceholder( n.get( "placeholder" ) ), e.call( this, t, n )}

			return t.prototype.normalizePlaceholder = function( e, t ) {return "string" == typeof t && (t = { id : "", text : t }), t}, t.prototype.createPlaceholder = function( e, t ) {
				var n = this.selectionContainer();
				return n.html( this.display( t ) ), n.addClass( "select2-selection__placeholder" ).removeClass( "select2-selection__choice" ), n
			}, t.prototype.update = function( e, t ) {
				var n = 1 == t.length && t[ 0 ].id != this.placeholder.id;
				if ( 1 < t.length || n ) return e.call( this, t );
				this.clear();
				var i = this.createPlaceholder( this.placeholder );
				this.$selection.find( ".select2-selection__rendered" ).append( i )
			}, t
		} ), e.define( "select2/selection/allowClear", ["jquery", "../keys", "../utils"], function( r, i, a ) {
			function e() {}

			return e.prototype.bind = function( e, t, n ) {
				var i = this;
				e.call( this, t, n ), null == this.placeholder && this.options.get( "debug" ) && window.console && console.error && console.error( "Select2: The `allowClear` option should be used in combination with the `placeholder` option." ), this.$selection.on( "mousedown", ".select2-selection__clear", function( e ) {i._handleClear( e )} ), t.on( "keypress", function( e ) {i._handleKeyboardClear( e, t )} )
			}, e.prototype._handleClear = function( e, t ) {
				if ( !this.options.get( "disabled" ) ) {
					var n = this.$selection.find( ".select2-selection__clear" );
					if ( 0 !== n.length ) {
						t.stopPropagation();
						var i = a.GetData( n[ 0 ], "data" ), r = this.$element.val();
						this.$element.val( this.placeholder.id );
						var o = { data : i };
						if ( this.trigger( "clear", o ), o.prevented ) this.$element.val( r ); else {
							for ( var s = 0; s < i.length; s++ ) if ( o = { data : i[ s ] }, this.trigger( "unselect", o ), o.prevented ) return void this.$element.val( r );
							this.$element.trigger( "change" ), this.trigger( "toggle", {} )
						}
					}
				}
			}, e.prototype._handleKeyboardClear = function( e, t, n ) {n.isOpen() || t.which != i.DELETE && t.which != i.BACKSPACE || this._handleClear( t )}, e.prototype.update = function( e, t ) {
				if ( e.call( this, t ), !(0 < this.$selection.find( ".select2-selection__placeholder" ).length || 0 === t.length) ) {
					var n = this.options.get( "translations" ).get( "removeAllItems" ), i = r( '<span class="select2-selection__clear" title="' + n() + '">&times;</span>' );
					a.StoreData( i[ 0 ], "data", t ), this.$selection.find( ".select2-selection__rendered" ).prepend( i )
				}
			}, e
		} ), e.define( "select2/selection/search", ["jquery", "../utils", "../keys"], function( i, a, l ) {
			function e( e, t, n ) {e.call( this, t, n )}

			return e.prototype.render = function( e ) {
				var t = i( '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>' );
				this.$searchContainer = t, this.$search = t.find( "input" );
				var n = e.call( this );
				return this._transferTabIndex(), n
			}, e.prototype.bind = function( e, t, n ) {
				var i = this, r = t.id + "-results";
				e.call( this, t, n ), t.on( "open", function() {i.$search.attr( "aria-controls", r ), i.$search.trigger( "focus" )} ), t.on( "close", function() {i.$search.val( "" ), i.$search.removeAttr( "aria-controls" ), i.$search.removeAttr( "aria-activedescendant" ), i.$search.trigger( "focus" )} ), t.on( "enable", function() {i.$search.prop( "disabled", !1 ), i._transferTabIndex()} ), t.on( "disable", function() {i.$search.prop( "disabled", !0 )} ), t.on( "focus", function( e ) {i.$search.trigger( "focus" )} ), t.on( "results:focus", function( e ) {e.data._resultId ? i.$search.attr( "aria-activedescendant", e.data._resultId ) : i.$search.removeAttr( "aria-activedescendant" )} ), this.$selection.on( "focusin", ".select2-search--inline", function( e ) {i.trigger( "focus", e )} ), this.$selection.on( "focusout", ".select2-search--inline", function( e ) {i._handleBlur( e )} ), this.$selection.on( "keydown", ".select2-search--inline", function( e ) {
					if ( e.stopPropagation(), i.trigger( "keypress", e ), i._keyUpPrevented = e.isDefaultPrevented(), e.which === l.BACKSPACE && "" === i.$search.val() ) {
						var t = i.$searchContainer.prev( ".select2-selection__choice" );
						if ( 0 < t.length ) {
							var n = a.GetData( t[ 0 ], "data" );
							i.searchRemoveChoice( n ), e.preventDefault()
						}
					}
				} ), this.$selection.on( "click", ".select2-search--inline", function( e ) {i.$search.val() && e.stopPropagation()} );
				var o = document.documentMode, s = o && o <= 11;
				this.$selection.on( "input.searchcheck", ".select2-search--inline", function( e ) {s ? i.$selection.off( "input.search input.searchcheck" ) : i.$selection.off( "keyup.search" )} ), this.$selection.on( "keyup.search input.search", ".select2-search--inline", function( e ) {
					if ( s && "input" === e.type ) i.$selection.off( "input.search input.searchcheck" ); else {
						var t = e.which;
						t != l.SHIFT && t != l.CTRL && t != l.ALT && t != l.TAB && i.handleSearch( e )
					}
				} )
			}, e.prototype._transferTabIndex = function( e ) {this.$search.attr( "tabindex", this.$selection.attr( "tabindex" ) ), this.$selection.attr( "tabindex", "-1" )}, e.prototype.createPlaceholder = function( e, t ) {this.$search.attr( "placeholder", t.text )}, e.prototype.update = function( e, t ) {
				var n = this.$search[ 0 ] == document.activeElement;
				this.$search.attr( "placeholder", "" ), e.call( this, t ), this.$selection.find( ".select2-selection__rendered" ).append( this.$searchContainer ), this.resizeSearch(), n && this.$search.trigger( "focus" )
			}, e.prototype.handleSearch = function() {
				if ( this.resizeSearch(), !this._keyUpPrevented ) {
					var e = this.$search.val();
					this.trigger( "query", { term : e } )
				}
				this._keyUpPrevented = !1
			}, e.prototype.searchRemoveChoice = function( e, t ) {this.trigger( "unselect", { data : t } ), this.$search.val( t.text ), this.handleSearch()}, e.prototype.resizeSearch = function() {
				this.$search.css( "width", "25px" );
				var e = "";
				"" !== this.$search.attr( "placeholder" ) ? e = this.$selection.find( ".select2-selection__rendered" ).width() : e = .75 * (this.$search.val().length + 1) + "em";
				this.$search.css( "width", e )
			}, e
		} ), e.define( "select2/selection/eventRelay", ["jquery"], function( s ) {
			function e() {}

			return e.prototype.bind = function( e, t, n ) {
				var i = this, r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"], o = ["opening", "closing", "selecting", "unselecting", "clearing"];
				e.call( this, t, n ), t.on( "*", function( e, t ) {
					if ( -1 !== s.inArray( e, r ) ) {
						t = t || {};
						var n = s.Event( "select2:" + e, { params : t } );
						i.$element.trigger( n ), -1 !== s.inArray( e, o ) && (t.prevented = n.isDefaultPrevented())
					}
				} )
			}, e
		} ), e.define( "select2/translation", ["jquery", "require"], function( t, n ) {
			function i( e ) {this.dict = e || {}}

			return i.prototype.all = function() {return this.dict}, i.prototype.get = function( e ) {return this.dict[ e ]}, i.prototype.extend = function( e ) {this.dict = t.extend( {}, e.all(), this.dict )}, i._cache = {}, i.loadPath = function( e ) {
				if ( !(e in i._cache) ) {
					var t = n( e );
					i._cache[ e ] = t
				}
				return new i( i._cache[ e ] )
			}, i
		} ), e.define( "select2/diacritics", [], function() {
			return {
				"Ⓐ" : "A",
				"Ａ" : "A",
				"À" : "A",
				"Á" : "A",
				"Â" : "A",
				"Ầ" : "A",
				"Ấ" : "A",
				"Ẫ" : "A",
				"Ẩ" : "A",
				"Ã" : "A",
				"Ā" : "A",
				"Ă" : "A",
				"Ằ" : "A",
				"Ắ" : "A",
				"Ẵ" : "A",
				"Ẳ" : "A",
				"Ȧ" : "A",
				"Ǡ" : "A",
				"Ä" : "A",
				"Ǟ" : "A",
				"Ả" : "A",
				"Å" : "A",
				"Ǻ" : "A",
				"Ǎ" : "A",
				"Ȁ" : "A",
				"Ȃ" : "A",
				"Ạ" : "A",
				"Ậ" : "A",
				"Ặ" : "A",
				"Ḁ" : "A",
				"Ą" : "A",
				"Ⱥ" : "A",
				"Ɐ" : "A",
				"Ꜳ" : "AA",
				"Æ" : "AE",
				"Ǽ" : "AE",
				"Ǣ" : "AE",
				"Ꜵ" : "AO",
				"Ꜷ" : "AU",
				"Ꜹ" : "AV",
				"Ꜻ" : "AV",
				"Ꜽ" : "AY",
				"Ⓑ" : "B",
				"Ｂ" : "B",
				"Ḃ" : "B",
				"Ḅ" : "B",
				"Ḇ" : "B",
				"Ƀ" : "B",
				"Ƃ" : "B",
				"Ɓ" : "B",
				"Ⓒ" : "C",
				"Ｃ" : "C",
				"Ć" : "C",
				"Ĉ" : "C",
				"Ċ" : "C",
				"Č" : "C",
				"Ç" : "C",
				"Ḉ" : "C",
				"Ƈ" : "C",
				"Ȼ" : "C",
				"Ꜿ" : "C",
				"Ⓓ" : "D",
				"Ｄ" : "D",
				"Ḋ" : "D",
				"Ď" : "D",
				"Ḍ" : "D",
				"Ḑ" : "D",
				"Ḓ" : "D",
				"Ḏ" : "D",
				"Đ" : "D",
				"Ƌ" : "D",
				"Ɗ" : "D",
				"Ɖ" : "D",
				"Ꝺ" : "D",
				"Ǳ" : "DZ",
				"Ǆ" : "DZ",
				"ǲ" : "Dz",
				"ǅ" : "Dz",
				"Ⓔ" : "E",
				"Ｅ" : "E",
				"È" : "E",
				"É" : "E",
				"Ê" : "E",
				"Ề" : "E",
				"Ế" : "E",
				"Ễ" : "E",
				"Ể" : "E",
				"Ẽ" : "E",
				"Ē" : "E",
				"Ḕ" : "E",
				"Ḗ" : "E",
				"Ĕ" : "E",
				"Ė" : "E",
				"Ë" : "E",
				"Ẻ" : "E",
				"Ě" : "E",
				"Ȅ" : "E",
				"Ȇ" : "E",
				"Ẹ" : "E",
				"Ệ" : "E",
				"Ȩ" : "E",
				"Ḝ" : "E",
				"Ę" : "E",
				"Ḙ" : "E",
				"Ḛ" : "E",
				"Ɛ" : "E",
				"Ǝ" : "E",
				"Ⓕ" : "F",
				"Ｆ" : "F",
				"Ḟ" : "F",
				"Ƒ" : "F",
				"Ꝼ" : "F",
				"Ⓖ" : "G",
				"Ｇ" : "G",
				"Ǵ" : "G",
				"Ĝ" : "G",
				"Ḡ" : "G",
				"Ğ" : "G",
				"Ġ" : "G",
				"Ǧ" : "G",
				"Ģ" : "G",
				"Ǥ" : "G",
				"Ɠ" : "G",
				"Ꞡ" : "G",
				"Ᵹ" : "G",
				"Ꝿ" : "G",
				"Ⓗ" : "H",
				"Ｈ" : "H",
				"Ĥ" : "H",
				"Ḣ" : "H",
				"Ḧ" : "H",
				"Ȟ" : "H",
				"Ḥ" : "H",
				"Ḩ" : "H",
				"Ḫ" : "H",
				"Ħ" : "H",
				"Ⱨ" : "H",
				"Ⱶ" : "H",
				"Ɥ" : "H",
				"Ⓘ" : "I",
				"Ｉ" : "I",
				"Ì" : "I",
				"Í" : "I",
				"Î" : "I",
				"Ĩ" : "I",
				"Ī" : "I",
				"Ĭ" : "I",
				"İ" : "I",
				"Ï" : "I",
				"Ḯ" : "I",
				"Ỉ" : "I",
				"Ǐ" : "I",
				"Ȉ" : "I",
				"Ȋ" : "I",
				"Ị" : "I",
				"Į" : "I",
				"Ḭ" : "I",
				"Ɨ" : "I",
				"Ⓙ" : "J",
				"Ｊ" : "J",
				"Ĵ" : "J",
				"Ɉ" : "J",
				"Ⓚ" : "K",
				"Ｋ" : "K",
				"Ḱ" : "K",
				"Ǩ" : "K",
				"Ḳ" : "K",
				"Ķ" : "K",
				"Ḵ" : "K",
				"Ƙ" : "K",
				"Ⱪ" : "K",
				"Ꝁ" : "K",
				"Ꝃ" : "K",
				"Ꝅ" : "K",
				"Ꞣ" : "K",
				"Ⓛ" : "L",
				"Ｌ" : "L",
				"Ŀ" : "L",
				"Ĺ" : "L",
				"Ľ" : "L",
				"Ḷ" : "L",
				"Ḹ" : "L",
				"Ļ" : "L",
				"Ḽ" : "L",
				"Ḻ" : "L",
				"Ł" : "L",
				"Ƚ" : "L",
				"Ɫ" : "L",
				"Ⱡ" : "L",
				"Ꝉ" : "L",
				"Ꝇ" : "L",
				"Ꞁ" : "L",
				"Ǉ" : "LJ",
				"ǈ" : "Lj",
				"Ⓜ" : "M",
				"Ｍ" : "M",
				"Ḿ" : "M",
				"Ṁ" : "M",
				"Ṃ" : "M",
				"Ɱ" : "M",
				"Ɯ" : "M",
				"Ⓝ" : "N",
				"Ｎ" : "N",
				"Ǹ" : "N",
				"Ń" : "N",
				"Ñ" : "N",
				"Ṅ" : "N",
				"Ň" : "N",
				"Ṇ" : "N",
				"Ņ" : "N",
				"Ṋ" : "N",
				"Ṉ" : "N",
				"Ƞ" : "N",
				"Ɲ" : "N",
				"Ꞑ" : "N",
				"Ꞥ" : "N",
				"Ǌ" : "NJ",
				"ǋ" : "Nj",
				"Ⓞ" : "O",
				"Ｏ" : "O",
				"Ò" : "O",
				"Ó" : "O",
				"Ô" : "O",
				"Ồ" : "O",
				"Ố" : "O",
				"Ỗ" : "O",
				"Ổ" : "O",
				"Õ" : "O",
				"Ṍ" : "O",
				"Ȭ" : "O",
				"Ṏ" : "O",
				"Ō" : "O",
				"Ṑ" : "O",
				"Ṓ" : "O",
				"Ŏ" : "O",
				"Ȯ" : "O",
				"Ȱ" : "O",
				"Ö" : "O",
				"Ȫ" : "O",
				"Ỏ" : "O",
				"Ő" : "O",
				"Ǒ" : "O",
				"Ȍ" : "O",
				"Ȏ" : "O",
				"Ơ" : "O",
				"Ờ" : "O",
				"Ớ" : "O",
				"Ỡ" : "O",
				"Ở" : "O",
				"Ợ" : "O",
				"Ọ" : "O",
				"Ộ" : "O",
				"Ǫ" : "O",
				"Ǭ" : "O",
				"Ø" : "O",
				"Ǿ" : "O",
				"Ɔ" : "O",
				"Ɵ" : "O",
				"Ꝋ" : "O",
				"Ꝍ" : "O",
				"Œ" : "OE",
				"Ƣ" : "OI",
				"Ꝏ" : "OO",
				"Ȣ" : "OU",
				"Ⓟ" : "P",
				"Ｐ" : "P",
				"Ṕ" : "P",
				"Ṗ" : "P",
				"Ƥ" : "P",
				"Ᵽ" : "P",
				"Ꝑ" : "P",
				"Ꝓ" : "P",
				"Ꝕ" : "P",
				"Ⓠ" : "Q",
				"Ｑ" : "Q",
				"Ꝗ" : "Q",
				"Ꝙ" : "Q",
				"Ɋ" : "Q",
				"Ⓡ" : "R",
				"Ｒ" : "R",
				"Ŕ" : "R",
				"Ṙ" : "R",
				"Ř" : "R",
				"Ȑ" : "R",
				"Ȓ" : "R",
				"Ṛ" : "R",
				"Ṝ" : "R",
				"Ŗ" : "R",
				"Ṟ" : "R",
				"Ɍ" : "R",
				"Ɽ" : "R",
				"Ꝛ" : "R",
				"Ꞧ" : "R",
				"Ꞃ" : "R",
				"Ⓢ" : "S",
				"Ｓ" : "S",
				"ẞ" : "S",
				"Ś" : "S",
				"Ṥ" : "S",
				"Ŝ" : "S",
				"Ṡ" : "S",
				"Š" : "S",
				"Ṧ" : "S",
				"Ṣ" : "S",
				"Ṩ" : "S",
				"Ș" : "S",
				"Ş" : "S",
				"Ȿ" : "S",
				"Ꞩ" : "S",
				"Ꞅ" : "S",
				"Ⓣ" : "T",
				"Ｔ" : "T",
				"Ṫ" : "T",
				"Ť" : "T",
				"Ṭ" : "T",
				"Ț" : "T",
				"Ţ" : "T",
				"Ṱ" : "T",
				"Ṯ" : "T",
				"Ŧ" : "T",
				"Ƭ" : "T",
				"Ʈ" : "T",
				"Ⱦ" : "T",
				"Ꞇ" : "T",
				"Ꜩ" : "TZ",
				"Ⓤ" : "U",
				"Ｕ" : "U",
				"Ù" : "U",
				"Ú" : "U",
				"Û" : "U",
				"Ũ" : "U",
				"Ṹ" : "U",
				"Ū" : "U",
				"Ṻ" : "U",
				"Ŭ" : "U",
				"Ü" : "U",
				"Ǜ" : "U",
				"Ǘ" : "U",
				"Ǖ" : "U",
				"Ǚ" : "U",
				"Ủ" : "U",
				"Ů" : "U",
				"Ű" : "U",
				"Ǔ" : "U",
				"Ȕ" : "U",
				"Ȗ" : "U",
				"Ư" : "U",
				"Ừ" : "U",
				"Ứ" : "U",
				"Ữ" : "U",
				"Ử" : "U",
				"Ự" : "U",
				"Ụ" : "U",
				"Ṳ" : "U",
				"Ų" : "U",
				"Ṷ" : "U",
				"Ṵ" : "U",
				"Ʉ" : "U",
				"Ⓥ" : "V",
				"Ｖ" : "V",
				"Ṽ" : "V",
				"Ṿ" : "V",
				"Ʋ" : "V",
				"Ꝟ" : "V",
				"Ʌ" : "V",
				"Ꝡ" : "VY",
				"Ⓦ" : "W",
				"Ｗ" : "W",
				"Ẁ" : "W",
				"Ẃ" : "W",
				"Ŵ" : "W",
				"Ẇ" : "W",
				"Ẅ" : "W",
				"Ẉ" : "W",
				"Ⱳ" : "W",
				"Ⓧ" : "X",
				"Ｘ" : "X",
				"Ẋ" : "X",
				"Ẍ" : "X",
				"Ⓨ" : "Y",
				"Ｙ" : "Y",
				"Ỳ" : "Y",
				"Ý" : "Y",
				"Ŷ" : "Y",
				"Ỹ" : "Y",
				"Ȳ" : "Y",
				"Ẏ" : "Y",
				"Ÿ" : "Y",
				"Ỷ" : "Y",
				"Ỵ" : "Y",
				"Ƴ" : "Y",
				"Ɏ" : "Y",
				"Ỿ" : "Y",
				"Ⓩ" : "Z",
				"Ｚ" : "Z",
				"Ź" : "Z",
				"Ẑ" : "Z",
				"Ż" : "Z",
				"Ž" : "Z",
				"Ẓ" : "Z",
				"Ẕ" : "Z",
				"Ƶ" : "Z",
				"Ȥ" : "Z",
				"Ɀ" : "Z",
				"Ⱬ" : "Z",
				"Ꝣ" : "Z",
				"ⓐ" : "a",
				"ａ" : "a",
				"ẚ" : "a",
				"à" : "a",
				"á" : "a",
				"â" : "a",
				"ầ" : "a",
				"ấ" : "a",
				"ẫ" : "a",
				"ẩ" : "a",
				"ã" : "a",
				"ā" : "a",
				"ă" : "a",
				"ằ" : "a",
				"ắ" : "a",
				"ẵ" : "a",
				"ẳ" : "a",
				"ȧ" : "a",
				"ǡ" : "a",
				"ä" : "a",
				"ǟ" : "a",
				"ả" : "a",
				"å" : "a",
				"ǻ" : "a",
				"ǎ" : "a",
				"ȁ" : "a",
				"ȃ" : "a",
				"ạ" : "a",
				"ậ" : "a",
				"ặ" : "a",
				"ḁ" : "a",
				"ą" : "a",
				"ⱥ" : "a",
				"ɐ" : "a",
				"ꜳ" : "aa",
				"æ" : "ae",
				"ǽ" : "ae",
				"ǣ" : "ae",
				"ꜵ" : "ao",
				"ꜷ" : "au",
				"ꜹ" : "av",
				"ꜻ" : "av",
				"ꜽ" : "ay",
				"ⓑ" : "b",
				"ｂ" : "b",
				"ḃ" : "b",
				"ḅ" : "b",
				"ḇ" : "b",
				"ƀ" : "b",
				"ƃ" : "b",
				"ɓ" : "b",
				"ⓒ" : "c",
				"ｃ" : "c",
				"ć" : "c",
				"ĉ" : "c",
				"ċ" : "c",
				"č" : "c",
				"ç" : "c",
				"ḉ" : "c",
				"ƈ" : "c",
				"ȼ" : "c",
				"ꜿ" : "c",
				"ↄ" : "c",
				"ⓓ" : "d",
				"ｄ" : "d",
				"ḋ" : "d",
				"ď" : "d",
				"ḍ" : "d",
				"ḑ" : "d",
				"ḓ" : "d",
				"ḏ" : "d",
				"đ" : "d",
				"ƌ" : "d",
				"ɖ" : "d",
				"ɗ" : "d",
				"ꝺ" : "d",
				"ǳ" : "dz",
				"ǆ" : "dz",
				"ⓔ" : "e",
				"ｅ" : "e",
				"è" : "e",
				"é" : "e",
				"ê" : "e",
				"ề" : "e",
				"ế" : "e",
				"ễ" : "e",
				"ể" : "e",
				"ẽ" : "e",
				"ē" : "e",
				"ḕ" : "e",
				"ḗ" : "e",
				"ĕ" : "e",
				"ė" : "e",
				"ë" : "e",
				"ẻ" : "e",
				"ě" : "e",
				"ȅ" : "e",
				"ȇ" : "e",
				"ẹ" : "e",
				"ệ" : "e",
				"ȩ" : "e",
				"ḝ" : "e",
				"ę" : "e",
				"ḙ" : "e",
				"ḛ" : "e",
				"ɇ" : "e",
				"ɛ" : "e",
				"ǝ" : "e",
				"ⓕ" : "f",
				"ｆ" : "f",
				"ḟ" : "f",
				"ƒ" : "f",
				"ꝼ" : "f",
				"ⓖ" : "g",
				"ｇ" : "g",
				"ǵ" : "g",
				"ĝ" : "g",
				"ḡ" : "g",
				"ğ" : "g",
				"ġ" : "g",
				"ǧ" : "g",
				"ģ" : "g",
				"ǥ" : "g",
				"ɠ" : "g",
				"ꞡ" : "g",
				"ᵹ" : "g",
				"ꝿ" : "g",
				"ⓗ" : "h",
				"ｈ" : "h",
				"ĥ" : "h",
				"ḣ" : "h",
				"ḧ" : "h",
				"ȟ" : "h",
				"ḥ" : "h",
				"ḩ" : "h",
				"ḫ" : "h",
				"ẖ" : "h",
				"ħ" : "h",
				"ⱨ" : "h",
				"ⱶ" : "h",
				"ɥ" : "h",
				"ƕ" : "hv",
				"ⓘ" : "i",
				"ｉ" : "i",
				"ì" : "i",
				"í" : "i",
				"î" : "i",
				"ĩ" : "i",
				"ī" : "i",
				"ĭ" : "i",
				"ï" : "i",
				"ḯ" : "i",
				"ỉ" : "i",
				"ǐ" : "i",
				"ȉ" : "i",
				"ȋ" : "i",
				"ị" : "i",
				"į" : "i",
				"ḭ" : "i",
				"ɨ" : "i",
				"ı" : "i",
				"ⓙ" : "j",
				"ｊ" : "j",
				"ĵ" : "j",
				"ǰ" : "j",
				"ɉ" : "j",
				"ⓚ" : "k",
				"ｋ" : "k",
				"ḱ" : "k",
				"ǩ" : "k",
				"ḳ" : "k",
				"ķ" : "k",
				"ḵ" : "k",
				"ƙ" : "k",
				"ⱪ" : "k",
				"ꝁ" : "k",
				"ꝃ" : "k",
				"ꝅ" : "k",
				"ꞣ" : "k",
				"ⓛ" : "l",
				"ｌ" : "l",
				"ŀ" : "l",
				"ĺ" : "l",
				"ľ" : "l",
				"ḷ" : "l",
				"ḹ" : "l",
				"ļ" : "l",
				"ḽ" : "l",
				"ḻ" : "l",
				"ſ" : "l",
				"ł" : "l",
				"ƚ" : "l",
				"ɫ" : "l",
				"ⱡ" : "l",
				"ꝉ" : "l",
				"ꞁ" : "l",
				"ꝇ" : "l",
				"ǉ" : "lj",
				"ⓜ" : "m",
				"ｍ" : "m",
				"ḿ" : "m",
				"ṁ" : "m",
				"ṃ" : "m",
				"ɱ" : "m",
				"ɯ" : "m",
				"ⓝ" : "n",
				"ｎ" : "n",
				"ǹ" : "n",
				"ń" : "n",
				"ñ" : "n",
				"ṅ" : "n",
				"ň" : "n",
				"ṇ" : "n",
				"ņ" : "n",
				"ṋ" : "n",
				"ṉ" : "n",
				"ƞ" : "n",
				"ɲ" : "n",
				"ŉ" : "n",
				"ꞑ" : "n",
				"ꞥ" : "n",
				"ǌ" : "nj",
				"ⓞ" : "o",
				"ｏ" : "o",
				"ò" : "o",
				"ó" : "o",
				"ô" : "o",
				"ồ" : "o",
				"ố" : "o",
				"ỗ" : "o",
				"ổ" : "o",
				"õ" : "o",
				"ṍ" : "o",
				"ȭ" : "o",
				"ṏ" : "o",
				"ō" : "o",
				"ṑ" : "o",
				"ṓ" : "o",
				"ŏ" : "o",
				"ȯ" : "o",
				"ȱ" : "o",
				"ö" : "o",
				"ȫ" : "o",
				"ỏ" : "o",
				"ő" : "o",
				"ǒ" : "o",
				"ȍ" : "o",
				"ȏ" : "o",
				"ơ" : "o",
				"ờ" : "o",
				"ớ" : "o",
				"ỡ" : "o",
				"ở" : "o",
				"ợ" : "o",
				"ọ" : "o",
				"ộ" : "o",
				"ǫ" : "o",
				"ǭ" : "o",
				"ø" : "o",
				"ǿ" : "o",
				"ɔ" : "o",
				"ꝋ" : "o",
				"ꝍ" : "o",
				"ɵ" : "o",
				"œ" : "oe",
				"ƣ" : "oi",
				"ȣ" : "ou",
				"ꝏ" : "oo",
				"ⓟ" : "p",
				"ｐ" : "p",
				"ṕ" : "p",
				"ṗ" : "p",
				"ƥ" : "p",
				"ᵽ" : "p",
				"ꝑ" : "p",
				"ꝓ" : "p",
				"ꝕ" : "p",
				"ⓠ" : "q",
				"ｑ" : "q",
				"ɋ" : "q",
				"ꝗ" : "q",
				"ꝙ" : "q",
				"ⓡ" : "r",
				"ｒ" : "r",
				"ŕ" : "r",
				"ṙ" : "r",
				"ř" : "r",
				"ȑ" : "r",
				"ȓ" : "r",
				"ṛ" : "r",
				"ṝ" : "r",
				"ŗ" : "r",
				"ṟ" : "r",
				"ɍ" : "r",
				"ɽ" : "r",
				"ꝛ" : "r",
				"ꞧ" : "r",
				"ꞃ" : "r",
				"ⓢ" : "s",
				"ｓ" : "s",
				"ß" : "s",
				"ś" : "s",
				"ṥ" : "s",
				"ŝ" : "s",
				"ṡ" : "s",
				"š" : "s",
				"ṧ" : "s",
				"ṣ" : "s",
				"ṩ" : "s",
				"ș" : "s",
				"ş" : "s",
				"ȿ" : "s",
				"ꞩ" : "s",
				"ꞅ" : "s",
				"ẛ" : "s",
				"ⓣ" : "t",
				"ｔ" : "t",
				"ṫ" : "t",
				"ẗ" : "t",
				"ť" : "t",
				"ṭ" : "t",
				"ț" : "t",
				"ţ" : "t",
				"ṱ" : "t",
				"ṯ" : "t",
				"ŧ" : "t",
				"ƭ" : "t",
				"ʈ" : "t",
				"ⱦ" : "t",
				"ꞇ" : "t",
				"ꜩ" : "tz",
				"ⓤ" : "u",
				"ｕ" : "u",
				"ù" : "u",
				"ú" : "u",
				"û" : "u",
				"ũ" : "u",
				"ṹ" : "u",
				"ū" : "u",
				"ṻ" : "u",
				"ŭ" : "u",
				"ü" : "u",
				"ǜ" : "u",
				"ǘ" : "u",
				"ǖ" : "u",
				"ǚ" : "u",
				"ủ" : "u",
				"ů" : "u",
				"ű" : "u",
				"ǔ" : "u",
				"ȕ" : "u",
				"ȗ" : "u",
				"ư" : "u",
				"ừ" : "u",
				"ứ" : "u",
				"ữ" : "u",
				"ử" : "u",
				"ự" : "u",
				"ụ" : "u",
				"ṳ" : "u",
				"ų" : "u",
				"ṷ" : "u",
				"ṵ" : "u",
				"ʉ" : "u",
				"ⓥ" : "v",
				"ｖ" : "v",
				"ṽ" : "v",
				"ṿ" : "v",
				"ʋ" : "v",
				"ꝟ" : "v",
				"ʌ" : "v",
				"ꝡ" : "vy",
				"ⓦ" : "w",
				"ｗ" : "w",
				"ẁ" : "w",
				"ẃ" : "w",
				"ŵ" : "w",
				"ẇ" : "w",
				"ẅ" : "w",
				"ẘ" : "w",
				"ẉ" : "w",
				"ⱳ" : "w",
				"ⓧ" : "x",
				"ｘ" : "x",
				"ẋ" : "x",
				"ẍ" : "x",
				"ⓨ" : "y",
				"ｙ" : "y",
				"ỳ" : "y",
				"ý" : "y",
				"ŷ" : "y",
				"ỹ" : "y",
				"ȳ" : "y",
				"ẏ" : "y",
				"ÿ" : "y",
				"ỷ" : "y",
				"ẙ" : "y",
				"ỵ" : "y",
				"ƴ" : "y",
				"ɏ" : "y",
				"ỿ" : "y",
				"ⓩ" : "z",
				"ｚ" : "z",
				"ź" : "z",
				"ẑ" : "z",
				"ż" : "z",
				"ž" : "z",
				"ẓ" : "z",
				"ẕ" : "z",
				"ƶ" : "z",
				"ȥ" : "z",
				"ɀ" : "z",
				"ⱬ" : "z",
				"ꝣ" : "z",
				"Ά" : "Α",
				"Έ" : "Ε",
				"Ή" : "Η",
				"Ί" : "Ι",
				"Ϊ" : "Ι",
				"Ό" : "Ο",
				"Ύ" : "Υ",
				"Ϋ" : "Υ",
				"Ώ" : "Ω",
				"ά" : "α",
				"έ" : "ε",
				"ή" : "η",
				"ί" : "ι",
				"ϊ" : "ι",
				"ΐ" : "ι",
				"ό" : "ο",
				"ύ" : "υ",
				"ϋ" : "υ",
				"ΰ" : "υ",
				"ώ" : "ω",
				"ς" : "σ",
				"’" : "'"
			}
		} ), e.define( "select2/data/base", ["../utils"], function( i ) {
			function n( e, t ) {n.__super__.constructor.call( this )}

			return i.Extend( n, i.Observable ), n.prototype.current = function( e ) {throw new Error( "The `current` method must be defined in child classes." )}, n.prototype.query = function( e, t ) {throw new Error( "The `query` method must be defined in child classes." )}, n.prototype.bind = function( e, t ) {}, n.prototype.destroy = function() {}, n.prototype.generateResultId = function( e, t ) {
				var n = e.id + "-result-";
				return n += i.generateChars( 4 ), null != t.id ? n += "-" + t.id.toString() : n += "-" + i.generateChars( 4 ), n
			}, n
		} ), e.define( "select2/data/select", ["./base", "../utils", "jquery"], function( e, a, l ) {
			function n( e, t ) {this.$element = e, this.options = t, n.__super__.constructor.call( this )}

			return a.Extend( n, e ), n.prototype.current = function( e ) {
				var n = [], i = this;
				this.$element.find( ":selected" ).each( function() {
					var e = l( this ), t = i.item( e );
					n.push( t )
				} ), e( n )
			}, n.prototype.select = function( r ) {
				var o = this;
				if ( r.selected = !0, l( r.element ).is( "option" ) ) return r.element.selected = !0, void this.$element.trigger( "change" );
				if ( this.$element.prop( "multiple" ) ) this.current( function( e ) {
					var t = [];
					(r = [r]).push.apply( r, e );
					for ( var n = 0; n < r.length; n++ ) {
						var i = r[ n ].id;
						-1 === l.inArray( i, t ) && t.push( i )
					}
					o.$element.val( t ), o.$element.trigger( "change" )
				} ); else {
					var e = r.id;
					this.$element.val( e ), this.$element.trigger( "change" )
				}
			}, n.prototype.unselect = function( r ) {
				var o = this;
				if ( this.$element.prop( "multiple" ) ) {
					if ( r.selected = !1, l( r.element ).is( "option" ) ) return r.element.selected = !1, void this.$element.trigger( "change" );
					this.current( function( e ) {
						for ( var t = [], n = 0; n < e.length; n++ ) {
							var i = e[ n ].id;
							i !== r.id && -1 === l.inArray( i, t ) && t.push( i )
						}
						o.$element.val( t ), o.$element.trigger( "change" )
					} )
				}
			}, n.prototype.bind = function( e, t ) {
				var n = this;
				(this.container = e).on( "select", function( e ) {n.select( e.data )} ), e.on( "unselect", function( e ) {n.unselect( e.data )} )
			}, n.prototype.destroy = function() {this.$element.find( "*" ).each( function() {a.RemoveData( this )} )}, n.prototype.query = function( i, e ) {
				var r = [], o = this;
				this.$element.children().each( function() {
					var e = l( this );
					if ( e.is( "option" ) || e.is( "optgroup" ) ) {
						var t = o.item( e ), n = o.matches( i, t );
						null !== n && r.push( n )
					}
				} ), e( { results : r } )
			}, n.prototype.addOptions = function( e ) {a.appendMany( this.$element, e )}, n.prototype.option = function( e ) {
				var t;
				e.children ? (t = document.createElement( "optgroup" )).label = e.text : void 0 !== (t = document.createElement( "option" )).textContent ? t.textContent = e.text : t.innerText = e.text, void 0 !== e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
				var n = l( t ), i = this._normalizeItem( e );
				return i.element = t, a.StoreData( t, "data", i ), n
			}, n.prototype.item = function( e ) {
				var t = {};
				if ( null != (t = a.GetData( e[ 0 ], "data" )) ) return t;
				if ( e.is( "option" ) ) t = { id : e.val(), text : e.text(), disabled : e.prop( "disabled" ), selected : e.prop( "selected" ), title : e.prop( "title" ) }; else if ( e.is( "optgroup" ) ) {
					t = { text : e.prop( "label" ), children : [], title : e.prop( "title" ) };
					for ( var n = e.children( "option" ), i = [], r = 0; r < n.length; r++ ) {
						var o = l( n[ r ] ), s = this.item( o );
						i.push( s )
					}
					t.children = i
				}
				return (t = this._normalizeItem( t )).element = e[ 0 ], a.StoreData( e[ 0 ], "data", t ), t
			}, n.prototype._normalizeItem = function( e ) {
				e !== Object( e ) && (e = { id : e, text : e });
				return null != (e = l.extend( {}, { text : "" }, e )).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId( this.container, e )), l.extend( {}, { selected : !1, disabled : !1 }, e )
			}, n.prototype.matches = function( e, t ) {return this.options.get( "matcher" )( e, t )}, n
		} ), e.define( "select2/data/array", ["./select", "../utils", "jquery"], function( e, f, g ) {
			function i( e, t ) {this._dataToConvert = t.get( "data" ) || [], i.__super__.constructor.call( this, e, t )}

			return f.Extend( i, e ), i.prototype.bind = function( e, t ) {i.__super__.bind.call( this, e, t ), this.addOptions( this.convertToOptions( this._dataToConvert ) )}, i.prototype.select = function( n ) {
				var e = this.$element.find( "option" ).filter( function( e, t ) {return t.value == n.id.toString()} );
				0 === e.length && (e = this.option( n ), this.addOptions( e )), i.__super__.select.call( this, n )
			}, i.prototype.convertToOptions = function( e ) {
				var t = this, n = this.$element.find( "option" ), i = n.map( function() {return t.item( g( this ) ).id} ).get(), r = [];

				function o( e ) {return function() {return g( this ).val() == e.id}}

				for ( var s = 0; s < e.length; s++ ) {
					var a = this._normalizeItem( e[ s ] );
					if ( 0 <= g.inArray( a.id, i ) ) {
						var l = n.filter( o( a ) ), c = this.item( l ), u = g.extend( !0, {}, a, c ), d = this.option( u );
						l.replaceWith( d )
					} else {
						var p = this.option( a );
						if ( a.children ) {
							var h = this.convertToOptions( a.children );
							f.appendMany( p, h )
						}
						r.push( p )
					}
				}
				return r
			}, i
		} ), e.define( "select2/data/ajax", ["./array", "../utils", "jquery"], function( e, t, o ) {
			function n( e, t ) {this.ajaxOptions = this._applyDefaults( t.get( "ajax" ) ), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call( this, e, t )}

			return t.Extend( n, e ), n.prototype._applyDefaults = function( e ) {
				var t = {
					data : function( e ) {return o.extend( {}, e, { q : e.term } )}, transport : function( e, t, n ) {
						var i = o.ajax( e );
						return i.then( t ), i.fail( n ), i
					}
				};
				return o.extend( {}, t, e, !0 )
			}, n.prototype.processResults = function( e ) {return e}, n.prototype.query = function( n, i ) {
				var r = this;
				null != this._request && (o.isFunction( this._request.abort ) && this._request.abort(), this._request = null);
				var t = o.extend( { type : "GET" }, this.ajaxOptions );

				function e() {
					var e = t.transport( t, function( e ) {
						var t = r.processResults( e, n );
						r.options.get( "debug" ) && window.console && console.error && (t && t.results && o.isArray( t.results ) || console.error( "Select2: The AJAX results did not return an array in the `results` key of the response." )), i( t )
					}, function() {"status" in e && (0 === e.status || "0" === e.status) || r.trigger( "results:message", { message : "errorLoading" } )} );
					r._request = e
				}

				"function" == typeof t.url && (t.url = t.url.call( this.$element, n )), "function" == typeof t.data && (t.data = t.data.call( this.$element, n )), this.ajaxOptions.delay && null != n.term ? (this._queryTimeout && window.clearTimeout( this._queryTimeout ), this._queryTimeout = window.setTimeout( e, this.ajaxOptions.delay )) : e()
			}, n
		} ), e.define( "select2/data/tags", ["jquery"], function( u ) {
			function e( e, t, n ) {
				var i = n.get( "tags" ), r = n.get( "createTag" );
				void 0 !== r && (this.createTag = r);
				var o = n.get( "insertTag" );
				if ( void 0 !== o && (this.insertTag = o), e.call( this, t, n ), u.isArray( i ) ) for ( var s = 0; s < i.length; s++ ) {
					var a = i[ s ], l = this._normalizeItem( a ), c = this.option( l );
					this.$element.append( c )
				}
			}

			return e.prototype.query = function( e, c, u ) {
				var d = this;
				this._removeOldTags(), null != c.term && null == c.page ? e.call( this, c, function e( t, n ) {
					for ( var i = t.results, r = 0; r < i.length; r++ ) {
						var o = i[ r ], s = null != o.children && !e( { results : o.children }, !0 );
						if ( (o.text || "").toUpperCase() === (c.term || "").toUpperCase() || s ) return !n && (t.data = i, void u( t ))
					}
					if ( n ) return !0;
					var a = d.createTag( c );
					if ( null != a ) {
						var l = d.option( a );
						l.attr( "data-select2-tag", !0 ), d.addOptions( [l] ), d.insertTag( i, a )
					}
					t.results = i, u( t )
				} ) : e.call( this, c, u )
			}, e.prototype.createTag = function( e, t ) {
				var n = u.trim( t.term );
				return "" === n ? null : { id : n, text : n }
			}, e.prototype.insertTag = function( e, t, n ) {t.unshift( n )}, e.prototype._removeOldTags = function( e ) {this.$element.find( "option[data-select2-tag]" ).each( function() {this.selected || u( this ).remove()} )}, e
		} ), e.define( "select2/data/tokenizer", ["jquery"], function( d ) {
			function e( e, t, n ) {
				var i = n.get( "tokenizer" );
				void 0 !== i && (this.tokenizer = i), e.call( this, t, n )
			}

			return e.prototype.bind = function( e, t, n ) {e.call( this, t, n ), this.$search = t.dropdown.$search || t.selection.$search || n.find( ".select2-search__field" )}, e.prototype.query = function( e, t, n ) {
				var i = this;
				t.term = t.term || "";
				var r = this.tokenizer( t, this.options, function( e ) {
					var t = i._normalizeItem( e );
					if ( !i.$element.find( "option" ).filter( function() {return d( this ).val() === t.id} ).length ) {
						var n = i.option( t );
						n.attr( "data-select2-tag", !0 ), i._removeOldTags(), i.addOptions( [n] )
					}
					!function( e ) {i.trigger( "select", { data : e } )}( t )
				} );
				r.term !== t.term && (this.$search.length && (this.$search.val( r.term ), this.$search.trigger( "focus" )), t.term = r.term), e.call( this, t, n )
			}, e.prototype.tokenizer = function( e, t, n, i ) {
				for ( var r = n.get( "tokenSeparators" ) || [], o = t.term, s = 0, a = this.createTag || function( e ) {return { id : e.term, text : e.term }}; s < o.length; ) {
					var l = o[ s ];
					if ( -1 !== d.inArray( l, r ) ) {
						var c = o.substr( 0, s ), u = a( d.extend( {}, t, { term : c } ) );
						null != u ? (i( u ), o = o.substr( s + 1 ) || "", s = 0) : s++
					} else s++
				}
				return { term : o }
			}, e
		} ), e.define( "select2/data/minimumInputLength", [], function() {
			function e( e, t, n ) {this.minimumInputLength = n.get( "minimumInputLength" ), e.call( this, t, n )}

			return e.prototype.query = function( e, t, n ) {t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger( "results:message", { message : "inputTooShort", args : { minimum : this.minimumInputLength, input : t.term, params : t } } ) : e.call( this, t, n )}, e
		} ), e.define( "select2/data/maximumInputLength", [], function() {
			function e( e, t, n ) {this.maximumInputLength = n.get( "maximumInputLength" ), e.call( this, t, n )}

			return e.prototype.query = function( e, t, n ) {t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger( "results:message", { message : "inputTooLong", args : { maximum : this.maximumInputLength, input : t.term, params : t } } ) : e.call( this, t, n )}, e
		} ), e.define( "select2/data/maximumSelectionLength", [], function() {
			function e( e, t, n ) {this.maximumSelectionLength = n.get( "maximumSelectionLength" ), e.call( this, t, n )}

			return e.prototype.bind = function( e, t, n ) {
				var i = this;
				e.call( this, t, n ), t.on( "select", function() {i._checkIfMaximumSelected()} )
			}, e.prototype.query = function( e, t, n ) {
				var i = this;
				this._checkIfMaximumSelected( function() {e.call( i, t, n )} )
			}, e.prototype._checkIfMaximumSelected = function( e, n ) {
				var i = this;
				this.current( function( e ) {
					var t = null != e ? e.length : 0;
					0 < i.maximumSelectionLength && t >= i.maximumSelectionLength ? i.trigger( "results:message", { message : "maximumSelected", args : { maximum : i.maximumSelectionLength } } ) : n && n()
				} )
			}, e
		} ), e.define( "select2/dropdown", ["jquery", "./utils"], function( t, e ) {
			function n( e, t ) {this.$element = e, this.options = t, n.__super__.constructor.call( this )}

			return e.Extend( n, e.Observable ), n.prototype.render = function() {
				var e = t( '<span class="select2-dropdown"><span class="select2-results"></span></span>' );
				return e.attr( "dir", this.options.get( "dir" ) ), this.$dropdown = e
			}, n.prototype.bind = function() {}, n.prototype.position = function( e, t ) {}, n.prototype.destroy = function() {this.$dropdown.remove()}, n
		} ), e.define( "select2/dropdown/search", ["jquery", "../utils"], function( o, e ) {
			function t() {}

			return t.prototype.render = function( e ) {
				var t = e.call( this ), n = o( '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>' );
				return this.$searchContainer = n, this.$search = n.find( "input" ), t.prepend( n ), t
			}, t.prototype.bind = function( e, t, n ) {
				var i = this, r = t.id + "-results";
				e.call( this, t, n ), this.$search.on( "keydown", function( e ) {i.trigger( "keypress", e ), i._keyUpPrevented = e.isDefaultPrevented()} ), this.$search.on( "input", function( e ) {o( this ).off( "keyup" )} ), this.$search.on( "keyup input", function( e ) {i.handleSearch( e )} ), t.on( "open", function() {i.$search.attr( "tabindex", 0 ), i.$search.attr( "aria-controls", r ), i.$search.trigger( "focus" ), window.setTimeout( function() {i.$search.trigger( "focus" )}, 0 )} ), t.on( "close", function() {i.$search.attr( "tabindex", -1 ), i.$search.removeAttr( "aria-controls" ), i.$search.removeAttr( "aria-activedescendant" ), i.$search.val( "" ), i.$search.trigger( "blur" )} ), t.on( "focus", function() {t.isOpen() || i.$search.trigger( "focus" )} ), t.on( "results:all", function( e ) {null != e.query.term && "" !== e.query.term || (i.showSearch( e ) ? i.$searchContainer.removeClass( "select2-search--hide" ) : i.$searchContainer.addClass( "select2-search--hide" ))} ), t.on( "results:focus", function( e ) {e.data._resultId ? i.$search.attr( "aria-activedescendant", e.data._resultId ) : i.$search.removeAttr( "aria-activedescendant" )} )
			}, t.prototype.handleSearch = function( e ) {
				if ( !this._keyUpPrevented ) {
					var t = this.$search.val();
					this.trigger( "query", { term : t } )
				}
				this._keyUpPrevented = !1
			}, t.prototype.showSearch = function( e, t ) {return !0}, t
		} ), e.define( "select2/dropdown/hidePlaceholder", [], function() {
			function e( e, t, n, i ) {this.placeholder = this.normalizePlaceholder( n.get( "placeholder" ) ), e.call( this, t, n, i )}

			return e.prototype.append = function( e, t ) {t.results = this.removePlaceholder( t.results ), e.call( this, t )}, e.prototype.normalizePlaceholder = function( e, t ) {return "string" == typeof t && (t = { id : "", text : t }), t}, e.prototype.removePlaceholder = function( e, t ) {
				for ( var n = t.slice( 0 ), i = t.length - 1; 0 <= i; i-- ) {
					var r = t[ i ];
					this.placeholder.id === r.id && n.splice( i, 1 )
				}
				return n
			}, e
		} ), e.define( "select2/dropdown/infiniteScroll", ["jquery"], function( n ) {
			function e( e, t, n, i ) {this.lastParams = {}, e.call( this, t, n, i ), this.$loadingMore = this.createLoadingMore(), this.loading = !1}

			return e.prototype.append = function( e, t ) {this.$loadingMore.remove(), this.loading = !1, e.call( this, t ), this.showLoadingMore( t ) && (this.$results.append( this.$loadingMore ), this.loadMoreIfNeeded())}, e.prototype.bind = function( e, t, n ) {
				var i = this;
				e.call( this, t, n ), t.on( "query", function( e ) {i.lastParams = e, i.loading = !0} ), t.on( "query:append", function( e ) {i.lastParams = e, i.loading = !0} ), this.$results.on( "scroll", this.loadMoreIfNeeded.bind( this ) )
			}, e.prototype.loadMoreIfNeeded = function() {
				var e = n.contains( document.documentElement, this.$loadingMore[ 0 ] );
				if ( !this.loading && e ) {
					var t = this.$results.offset().top + this.$results.outerHeight( !1 );
					this.$loadingMore.offset().top + this.$loadingMore.outerHeight( !1 ) <= t + 50 && this.loadMore()
				}
			}, e.prototype.loadMore = function() {
				this.loading = !0;
				var e = n.extend( {}, { page : 1 }, this.lastParams );
				e.page++, this.trigger( "query:append", e )
			}, e.prototype.showLoadingMore = function( e, t ) {return t.pagination && t.pagination.more}, e.prototype.createLoadingMore = function() {
				var e = n( '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>' ), t = this.options.get( "translations" ).get( "loadingMore" );
				return e.html( t( this.lastParams ) ), e
			}, e
		} ), e.define( "select2/dropdown/attachBody", ["jquery", "../utils"], function( f, a ) {
			function e( e, t, n ) {this.$dropdownParent = f( n.get( "dropdownParent" ) || document.body ), e.call( this, t, n )}

			return e.prototype.bind = function( e, t, n ) {
				var i = this;
				e.call( this, t, n ), t.on( "open", function() {i._showDropdown(), i._attachPositioningHandler( t ), i._bindContainerResultHandlers( t )} ), t.on( "close", function() {i._hideDropdown(), i._detachPositioningHandler( t )} ), this.$dropdownContainer.on( "mousedown", function( e ) {e.stopPropagation()} )
			}, e.prototype.destroy = function( e ) {e.call( this ), this.$dropdownContainer.remove()}, e.prototype.position = function( e, t, n ) {t.attr( "class", n.attr( "class" ) ), t.removeClass( "select2" ), t.addClass( "select2-container--open" ), t.css( { position : "absolute", top : -999999 } ), this.$container = n}, e.prototype.render = function( e ) {
				var t = f( "<span></span>" ), n = e.call( this );
				return t.append( n ), this.$dropdownContainer = t
			}, e.prototype._hideDropdown = function( e ) {this.$dropdownContainer.detach()}, e.prototype._bindContainerResultHandlers = function( e, t ) {
				if ( !this._containerResultsHandlersBound ) {
					var n = this;
					t.on( "results:all", function() {n._positionDropdown(), n._resizeDropdown()} ), t.on( "results:append", function() {n._positionDropdown(), n._resizeDropdown()} ), t.on( "results:message", function() {n._positionDropdown(), n._resizeDropdown()} ), t.on( "select", function() {n._positionDropdown(), n._resizeDropdown()} ), t.on( "unselect", function() {n._positionDropdown(), n._resizeDropdown()} ), this._containerResultsHandlersBound = !0
				}
			}, e.prototype._attachPositioningHandler = function( e, t ) {
				var n = this, i = "scroll.select2." + t.id, r = "resize.select2." + t.id, o = "orientationchange.select2." + t.id, s = this.$container.parents().filter( a.hasScroll );
				s.each( function() {a.StoreData( this, "select2-scroll-position", { x : f( this ).scrollLeft(), y : f( this ).scrollTop() } )} ), s.on( i, function( e ) {
					var t = a.GetData( this, "select2-scroll-position" );
					f( this ).scrollTop( t.y )
				} ), f( window ).on( i + " " + r + " " + o, function( e ) {n._positionDropdown(), n._resizeDropdown()} )
			}, e.prototype._detachPositioningHandler = function( e, t ) {
				var n = "scroll.select2." + t.id, i = "resize.select2." + t.id, r = "orientationchange.select2." + t.id;
				this.$container.parents().filter( a.hasScroll ).off( n ), f( window ).off( n + " " + i + " " + r )
			}, e.prototype._positionDropdown = function() {
				var e = f( window ), t = this.$dropdown.hasClass( "select2-dropdown--above" ), n = this.$dropdown.hasClass( "select2-dropdown--below" ), i = null, r = this.$container.offset();
				r.bottom = r.top + this.$container.outerHeight( !1 );
				var o = { height : this.$container.outerHeight( !1 ) };
				o.top = r.top, o.bottom = r.top + o.height;
				var s = this.$dropdown.outerHeight( !1 ), a = e.scrollTop(), l = e.scrollTop() + e.height(), c = a < r.top - s, u = l > r.bottom + s, d = { left : r.left, top : o.bottom }, p = this.$dropdownParent;
				"static" === p.css( "position" ) && (p = p.offsetParent());
				var h = { top : 0, left : 0 };
				(f.contains( document.body, p[ 0 ] ) || p[ 0 ].isConnected) && (h = p.offset()), d.top -= h.top, d.left -= h.left, t || n || (i = "below"), u || !c || t ? !c && u && t && (i = "below") : i = "above", ("above" == i || t && "below" !== i) && (d.top = o.top - h.top - s), null != i && (this.$dropdown.removeClass( "select2-dropdown--below select2-dropdown--above" ).addClass( "select2-dropdown--" + i ), this.$container.removeClass( "select2-container--below select2-container--above" ).addClass( "select2-container--" + i )), this.$dropdownContainer.css( d )
			}, e.prototype._resizeDropdown = function() {
				var e = { width : this.$container.outerWidth( !1 ) + "px" };
				this.options.get( "dropdownAutoWidth" ) && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css( e )
			}, e.prototype._showDropdown = function( e ) {this.$dropdownContainer.appendTo( this.$dropdownParent ), this._positionDropdown(), this._resizeDropdown()}, e
		} ), e.define( "select2/dropdown/minimumResultsForSearch", [], function() {
			function e( e, t, n, i ) {this.minimumResultsForSearch = n.get( "minimumResultsForSearch" ), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call( this, t, n, i )}

			return e.prototype.showSearch = function( e, t ) {
				return !(function e( t ) {
					for ( var n = 0, i = 0; i < t.length; i++ ) {
						var r = t[ i ];
						r.children ? n += e( r.children ) : n++
					}
					return n
				}( t.data.results ) < this.minimumResultsForSearch) && e.call( this, t )
			}, e
		} ), e.define( "select2/dropdown/selectOnClose", ["../utils"], function( o ) {
			function e() {}

			return e.prototype.bind = function( e, t, n ) {
				var i = this;
				e.call( this, t, n ), t.on( "close", function( e ) {i._handleSelectOnClose( e )} )
			}, e.prototype._handleSelectOnClose = function( e, t ) {
				if ( t && null != t.originalSelect2Event ) {
					var n = t.originalSelect2Event;
					if ( "select" === n._type || "unselect" === n._type ) return
				}
				var i = this.getHighlightedResults();
				if ( !(i.length < 1) ) {
					var r = o.GetData( i[ 0 ], "data" );
					null != r.element && r.element.selected || null == r.element && r.selected || this.trigger( "select", { data : r } )
				}
			}, e
		} ), e.define( "select2/dropdown/closeOnSelect", [], function() {
			function e() {}

			return e.prototype.bind = function( e, t, n ) {
				var i = this;
				e.call( this, t, n ), t.on( "select", function( e ) {i._selectTriggered( e )} ), t.on( "unselect", function( e ) {i._selectTriggered( e )} )
			}, e.prototype._selectTriggered = function( e, t ) {
				var n = t.originalEvent;
				n && (n.ctrlKey || n.metaKey) || this.trigger( "close", { originalEvent : n, originalSelect2Event : t } )
			}, e
		} ), e.define( "select2/i18n/en", [], function() {
			return {
				errorLoading : function() {return "The results could not be loaded."}, inputTooLong : function( e ) {
					var t = e.input.length - e.maximum, n = "Please delete " + t + " character";
					return 1 != t && (n += "s"), n
				}, inputTooShort : function( e ) {return "Please enter " + (e.minimum - e.input.length) + " or more characters"}, loadingMore : function() {return "Loading more results…"}, maximumSelected : function( e ) {
					var t = "You can only select " + e.maximum + " item";
					return 1 != e.maximum && (t += "s"), t
				}, noResults : function() {return "No results found"}, searching : function() {return "Searching…"}, removeAllItems : function() {return "Remove all items"}
			}
		} ), e.define( "select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function( c, u, d, p, h, f, g, m, v, y, s, t, _, w, $, b, A, x, S, D, C, E, O, T, q, j, L, I, e ) {
			function n() {this.reset()}

			return n.prototype.apply = function( e ) {
				if ( null == (e = c.extend( !0, {}, this.defaults, e )).dataAdapter ) {
					if ( null != e.ajax ? e.dataAdapter = $ : null != e.data ? e.dataAdapter = w : e.dataAdapter = _, 0 < e.minimumInputLength && (e.dataAdapter = y.Decorate( e.dataAdapter, x )), 0 < e.maximumInputLength && (e.dataAdapter = y.Decorate( e.dataAdapter, S )), 0 < e.maximumSelectionLength && (e.dataAdapter = y.Decorate( e.dataAdapter, D )), e.tags && (e.dataAdapter = y.Decorate( e.dataAdapter, b )), null == e.tokenSeparators && null == e.tokenizer || (e.dataAdapter = y.Decorate( e.dataAdapter, A )), null != e.query ) {
						var t = u( e.amdBase + "compat/query" );
						e.dataAdapter = y.Decorate( e.dataAdapter, t )
					}
					if ( null != e.initSelection ) {
						var n = u( e.amdBase + "compat/initSelection" );
						e.dataAdapter = y.Decorate( e.dataAdapter, n )
					}
				}
				if ( null == e.resultsAdapter && (e.resultsAdapter = d, null != e.ajax && (e.resultsAdapter = y.Decorate( e.resultsAdapter, T )), null != e.placeholder && (e.resultsAdapter = y.Decorate( e.resultsAdapter, O )), e.selectOnClose && (e.resultsAdapter = y.Decorate( e.resultsAdapter, L ))), null == e.dropdownAdapter ) {
					if ( e.multiple ) e.dropdownAdapter = C; else {
						var i = y.Decorate( C, E );
						e.dropdownAdapter = i
					}
					if ( 0 !== e.minimumResultsForSearch && (e.dropdownAdapter = y.Decorate( e.dropdownAdapter, j )), e.closeOnSelect && (e.dropdownAdapter = y.Decorate( e.dropdownAdapter, I )), null != e.dropdownCssClass || null != e.dropdownCss || null != e.adaptDropdownCssClass ) {
						var r = u( e.amdBase + "compat/dropdownCss" );
						e.dropdownAdapter = y.Decorate( e.dropdownAdapter, r )
					}
					e.dropdownAdapter = y.Decorate( e.dropdownAdapter, q )
				}
				if ( null == e.selectionAdapter ) {
					if ( e.multiple ? e.selectionAdapter = h : e.selectionAdapter = p, null != e.placeholder && (e.selectionAdapter = y.Decorate( e.selectionAdapter, f )), e.allowClear && (e.selectionAdapter = y.Decorate( e.selectionAdapter, g )), e.multiple && (e.selectionAdapter = y.Decorate( e.selectionAdapter, m )), null != e.containerCssClass || null != e.containerCss || null != e.adaptContainerCssClass ) {
						var o = u( e.amdBase + "compat/containerCss" );
						e.selectionAdapter = y.Decorate( e.selectionAdapter, o )
					}
					e.selectionAdapter = y.Decorate( e.selectionAdapter, v )
				}
				e.language = this._resolveLanguage( e.language ), e.language.push( "en" );
				for ( var s = [], a = 0; a < e.language.length; a++ ) {
					var l = e.language[ a ];
					-1 === s.indexOf( l ) && s.push( l )
				}
				return e.language = s, e.translations = this._processTranslations( e.language, e.debug ), e
			}, n.prototype.reset = function() {
				function a( e ) {return e.replace( /[^\u0000-\u007E]/g, function( e ) {return t[ e ] || e} )}

				this.defaults = {
					amdBase : "./", amdLanguageBase : "./i18n/", closeOnSelect : !0, debug : !1, dropdownAutoWidth : !1, escapeMarkup : y.escapeMarkup, language : {}, matcher : function e( t, n ) {
						if ( "" === c.trim( t.term ) ) return n;
						if ( n.children && 0 < n.children.length ) {
							for ( var i = c.extend( !0, {}, n ), r = n.children.length - 1; 0 <= r; r-- ) null == e( t, n.children[ r ] ) && i.children.splice( r, 1 );
							return 0 < i.children.length ? i : e( t, i )
						}
						var o = a( n.text ).toUpperCase(), s = a( t.term ).toUpperCase();
						return -1 < o.indexOf( s ) ? n : null
					}, minimumInputLength : 0, maximumInputLength : 0, maximumSelectionLength : 0, minimumResultsForSearch : 0, selectOnClose : !1, scrollAfterSelect : !1, sorter : function( e ) {return e}, templateResult : function( e ) {return e.text}, templateSelection : function( e ) {return e.text}, theme : "default", width : "resolve"
				}
			}, n.prototype.applyFromElement = function( e, t ) {
				var n = e.language, i = this.defaults.language, r = t.prop( "lang" ), o = t.closest( "[lang]" ).prop( "lang" ), s = Array.prototype.concat.call( this._resolveLanguage( r ), this._resolveLanguage( n ), this._resolveLanguage( i ), this._resolveLanguage( o ) );
				return e.language = s, e
			}, n.prototype._resolveLanguage = function( e ) {
				if ( !e ) return [];
				if ( c.isEmptyObject( e ) ) return [];
				if ( c.isPlainObject( e ) ) return [e];
				var t;
				t = c.isArray( e ) ? e : [e];
				for ( var n = [], i = 0; i < t.length; i++ ) if ( n.push( t[ i ] ), "string" == typeof t[ i ] && 0 < t[ i ].indexOf( "-" ) ) {
					var r = t[ i ].split( "-" )[ 0 ];
					n.push( r )
				}
				return n
			}, n.prototype._processTranslations = function( e, t ) {
				for ( var n = new s, i = 0; i < e.length; i++ ) {
					var r = new s, o = e[ i ];
					if ( "string" == typeof o ) try {
						r = s.loadPath( o )
					} catch ( e ) {
						try {
							o = this.defaults.amdLanguageBase + o, r = s.loadPath( o )
						} catch ( e ) {
							t && window.console && console.warn && console.warn( 'Select2: The language file for "' + o + '" could not be automatically loaded. A fallback will be used instead.' )
						}
					} else r = c.isPlainObject( o ) ? new s( o ) : o;
					n.extend( r )
				}
				return n
			}, n.prototype.set = function( e, t ) {
				var n = {};
				n[ c.camelCase( e ) ] = t;
				var i = y._convertData( n );
				c.extend( !0, this.defaults, i )
			}, new n
		} ), e.define( "select2/options", ["require", "jquery", "./defaults", "./utils"], function( i, d, r, p ) {
			function e( e, t ) {
				if ( this.options = e, null != t && this.fromElement( t ), null != t && (this.options = r.applyFromElement( this.options, t )), this.options = r.apply( this.options ), t && t.is( "input" ) ) {
					var n = i( this.get( "amdBase" ) + "compat/inputData" );
					this.options.dataAdapter = p.Decorate( this.options.dataAdapter, n )
				}
			}

			return e.prototype.fromElement = function( e ) {
				var t = ["select2"];
				null == this.options.multiple && (this.options.multiple = e.prop( "multiple" )), null == this.options.disabled && (this.options.disabled = e.prop( "disabled" )), null == this.options.dir && (e.prop( "dir" ) ? this.options.dir = e.prop( "dir" ) : e.closest( "[dir]" ).prop( "dir" ) ? this.options.dir = e.closest( "[dir]" ).prop( "dir" ) : this.options.dir = "ltr"), e.prop( "disabled", this.options.disabled ), e.prop( "multiple", this.options.multiple ), p.GetData( e[ 0 ], "select2Tags" ) && (this.options.debug && window.console && console.warn && console.warn( 'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.' ), p.StoreData( e[ 0 ], "data", p.GetData( e[ 0 ], "select2Tags" ) ), p.StoreData( e[ 0 ], "tags", !0 )), p.GetData( e[ 0 ], "ajaxUrl" ) && (this.options.debug && window.console && console.warn && console.warn( "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2." ), e.attr( "ajax--url", p.GetData( e[ 0 ], "ajaxUrl" ) ), p.StoreData( e[ 0 ], "ajax-Url", p.GetData( e[ 0 ], "ajaxUrl" ) ));
				var n = {};

				function i( e, t ) {return t.toUpperCase()}

				for ( var r = 0; r < e[ 0 ].attributes.length; r++ ) {
					var o = e[ 0 ].attributes[ r ].name, s = "data-";
					if ( o.substr( 0, s.length ) == s ) {
						var a = o.substring( s.length ), l = p.GetData( e[ 0 ], a );
						n[ a.replace( /-([a-z])/g, i ) ] = l
					}
				}
				d.fn.jquery && "1." == d.fn.jquery.substr( 0, 2 ) && e[ 0 ].dataset && (n = d.extend( !0, {}, e[ 0 ].dataset, n ));
				var c = d.extend( !0, {}, p.GetData( e[ 0 ] ), n );
				for ( var u in c = p._convertData( c ) ) -1 < d.inArray( u, t ) || (d.isPlainObject( this.options[ u ] ) ? d.extend( this.options[ u ], c[ u ] ) : this.options[ u ] = c[ u ]);
				return this
			}, e.prototype.get = function( e ) {return this.options[ e ]}, e.prototype.set = function( e, t ) {this.options[ e ] = t}, e
		} ), e.define( "select2/core", ["jquery", "./options", "./utils", "./keys"], function( r, c, u, i ) {
			var d = function( e, t ) {
				null != u.GetData( e[ 0 ], "select2" ) && u.GetData( e[ 0 ], "select2" ).destroy(), this.$element = e, this.id = this._generateId( e ), t = t || {}, this.options = new c( t, e ), d.__super__.constructor.call( this );
				var n = e.attr( "tabindex" ) || 0;
				u.StoreData( e[ 0 ], "old-tabindex", n ), e.attr( "tabindex", "-1" );
				var i = this.options.get( "dataAdapter" );
				this.dataAdapter = new i( e, this.options );
				var r = this.render();
				this._placeContainer( r );
				var o = this.options.get( "selectionAdapter" );
				this.selection = new o( e, this.options ), this.$selection = this.selection.render(), this.selection.position( this.$selection, r );
				var s = this.options.get( "dropdownAdapter" );
				this.dropdown = new s( e, this.options ), this.$dropdown = this.dropdown.render(), this.dropdown.position( this.$dropdown, r );
				var a = this.options.get( "resultsAdapter" );
				this.results = new a( e, this.options, this.dataAdapter ), this.$results = this.results.render(), this.results.position( this.$results, this.$dropdown );
				var l = this;
				this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current( function( e ) {l.trigger( "selection:update", { data : e } )} ), e.addClass( "select2-hidden-accessible" ), e.attr( "aria-hidden", "true" ), this._syncAttributes(), u.StoreData( e[ 0 ], "select2", this ), e.data( "select2", this )
			};
			return u.Extend( d, u.Observable ), d.prototype._generateId = function( e ) {return "select2-" + (null != e.attr( "id" ) ? e.attr( "id" ) : null != e.attr( "name" ) ? e.attr( "name" ) + "-" + u.generateChars( 2 ) : u.generateChars( 4 )).replace( /(:|\.|\[|\]|,)/g, "" )}, d.prototype._placeContainer = function( e ) {
				e.insertAfter( this.$element );
				var t = this._resolveWidth( this.$element, this.options.get( "width" ) );
				null != t && e.css( "width", t )
			}, d.prototype._resolveWidth = function( e, t ) {
				var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
				if ( "resolve" == t ) {
					var i = this._resolveWidth( e, "style" );
					return null != i ? i : this._resolveWidth( e, "element" )
				}
				if ( "element" == t ) {
					var r = e.outerWidth( !1 );
					return r <= 0 ? "auto" : r + "px"
				}
				if ( "style" != t ) return "computedstyle" != t ? t : window.getComputedStyle( e[ 0 ] ).width;
				var o = e.attr( "style" );
				if ( "string" != typeof o ) return null;
				for ( var s = o.split( ";" ), a = 0, l = s.length; a < l; a += 1 ) {
					var c = s[ a ].replace( /\s/g, "" ).match( n );
					if ( null !== c && 1 <= c.length ) return c[ 1 ]
				}
				return null
			}, d.prototype._bindAdapters = function() {this.dataAdapter.bind( this, this.$container ), this.selection.bind( this, this.$container ), this.dropdown.bind( this, this.$container ), this.results.bind( this, this.$container )}, d.prototype._registerDomEvents = function() {
				var t = this;
				this.$element.on( "change.select2", function() {t.dataAdapter.current( function( e ) {t.trigger( "selection:update", { data : e } )} )} ), this.$element.on( "focus.select2", function( e ) {t.trigger( "focus", e )} ), this._syncA = u.bind( this._syncAttributes, this ), this._syncS = u.bind( this._syncSubtree, this ), this.$element[ 0 ].attachEvent && this.$element[ 0 ].attachEvent( "onpropertychange", this._syncA );
				var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
				null != e ? (this._observer = new e( function( e ) {r.each( e, t._syncA ), r.each( e, t._syncS )} ), this._observer.observe( this.$element[ 0 ], { attributes : !0, childList : !0, subtree : !1 } )) : this.$element[ 0 ].addEventListener && (this.$element[ 0 ].addEventListener( "DOMAttrModified", t._syncA, !1 ), this.$element[ 0 ].addEventListener( "DOMNodeInserted", t._syncS, !1 ), this.$element[ 0 ].addEventListener( "DOMNodeRemoved", t._syncS, !1 ))
			}, d.prototype._registerDataEvents = function() {
				var n = this;
				this.dataAdapter.on( "*", function( e, t ) {n.trigger( e, t )} )
			}, d.prototype._registerSelectionEvents = function() {
				var n = this, i = ["toggle", "focus"];
				this.selection.on( "toggle", function() {n.toggleDropdown()} ), this.selection.on( "focus", function( e ) {n.focus( e )} ), this.selection.on( "*", function( e, t ) {-1 === r.inArray( e, i ) && n.trigger( e, t )} )
			}, d.prototype._registerDropdownEvents = function() {
				var n = this;
				this.dropdown.on( "*", function( e, t ) {n.trigger( e, t )} )
			}, d.prototype._registerResultsEvents = function() {
				var n = this;
				this.results.on( "*", function( e, t ) {n.trigger( e, t )} )
			}, d.prototype._registerEvents = function() {
				var n = this;
				this.on( "open", function() {n.$container.addClass( "select2-container--open" )} ), this.on( "close", function() {n.$container.removeClass( "select2-container--open" )} ), this.on( "enable", function() {n.$container.removeClass( "select2-container--disabled" )} ), this.on( "disable", function() {n.$container.addClass( "select2-container--disabled" )} ), this.on( "blur", function() {n.$container.removeClass( "select2-container--focus" )} ), this.on( "query", function( t ) {n.isOpen() || n.trigger( "open", {} ), this.dataAdapter.query( t, function( e ) {n.trigger( "results:all", { data : e, query : t } )} )} ), this.on( "query:append", function( t ) {this.dataAdapter.query( t, function( e ) {n.trigger( "results:append", { data : e, query : t } )} )} ), this.on( "keypress", function( e ) {
					var t = e.which;
					n.isOpen() ? t === i.ESC || t === i.TAB || t === i.UP && e.altKey ? (n.close(), e.preventDefault()) : t === i.ENTER ? (n.trigger( "results:select", {} ), e.preventDefault()) : t === i.SPACE && e.ctrlKey ? (n.trigger( "results:toggle", {} ), e.preventDefault()) : t === i.UP ? (n.trigger( "results:previous", {} ), e.preventDefault()) : t === i.DOWN && (n.trigger( "results:next", {} ), e.preventDefault()) : (t === i.ENTER || t === i.SPACE || t === i.DOWN && e.altKey) && (n.open(), e.preventDefault())
				} )
			}, d.prototype._syncAttributes = function() {this.options.set( "disabled", this.$element.prop( "disabled" ) ), this.options.get( "disabled" ) ? (this.isOpen() && this.close(), this.trigger( "disable", {} )) : this.trigger( "enable", {} )}, d.prototype._syncSubtree = function( e, t ) {
				var n = !1, i = this;
				if ( !e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName ) {
					if ( t ) if ( t.addedNodes && 0 < t.addedNodes.length ) for ( var r = 0; r < t.addedNodes.length; r++ ) {
						t.addedNodes[ r ].selected && (n = !0)
					} else t.removedNodes && 0 < t.removedNodes.length && (n = !0); else n = !0;
					n && this.dataAdapter.current( function( e ) {i.trigger( "selection:update", { data : e } )} )
				}
			}, d.prototype.trigger = function( e, t ) {
				var n = d.__super__.trigger, i = { open : "opening", close : "closing", select : "selecting", unselect : "unselecting", clear : "clearing" };
				if ( void 0 === t && (t = {}), e in i ) {
					var r = i[ e ], o = { prevented : !1, name : e, args : t };
					if ( n.call( this, r, o ), o.prevented ) return void (t.prevented = !0)
				}
				n.call( this, e, t )
			}, d.prototype.toggleDropdown = function() {this.options.get( "disabled" ) || (this.isOpen() ? this.close() : this.open())}, d.prototype.open = function() {this.isOpen() || this.trigger( "query", {} )}, d.prototype.close = function() {this.isOpen() && this.trigger( "close", {} )}, d.prototype.isOpen = function() {return this.$container.hasClass( "select2-container--open" )}, d.prototype.hasFocus = function() {return this.$container.hasClass( "select2-container--focus" )}, d.prototype.focus = function( e ) {this.hasFocus() || (this.$container.addClass( "select2-container--focus" ), this.trigger( "focus", {} ))}, d.prototype.enable = function( e ) {
				this.options.get( "debug" ) && window.console && console.warn && console.warn( 'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.' ), null != e && 0 !== e.length || (e = [!0]);
				var t = !e[ 0 ];
				this.$element.prop( "disabled", t )
			}, d.prototype.data = function() {
				this.options.get( "debug" ) && 0 < arguments.length && window.console && console.warn && console.warn( 'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.' );
				var t = [];
				return this.dataAdapter.current( function( e ) {t = e} ), t
			}, d.prototype.val = function( e ) {
				if ( this.options.get( "debug" ) && window.console && console.warn && console.warn( 'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.' ), null == e || 0 === e.length ) return this.$element.val();
				var t = e[ 0 ];
				r.isArray( t ) && (t = r.map( t, function( e ) {return e.toString()} )), this.$element.val( t ).trigger( "change" )
			}, d.prototype.destroy = function() {this.$container.remove(), this.$element[ 0 ].detachEvent && this.$element[ 0 ].detachEvent( "onpropertychange", this._syncA ), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[ 0 ].removeEventListener && (this.$element[ 0 ].removeEventListener( "DOMAttrModified", this._syncA, !1 ), this.$element[ 0 ].removeEventListener( "DOMNodeInserted", this._syncS, !1 ), this.$element[ 0 ].removeEventListener( "DOMNodeRemoved", this._syncS, !1 )), this._syncA = null, this._syncS = null, this.$element.off( ".select2" ), this.$element.attr( "tabindex", u.GetData( this.$element[ 0 ], "old-tabindex" ) ), this.$element.removeClass( "select2-hidden-accessible" ), this.$element.attr( "aria-hidden", "false" ), u.RemoveData( this.$element[ 0 ] ), this.$element.removeData( "select2" ), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null}, d.prototype.render = function() {
				var e = r( '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>' );
				return e.attr( "dir", this.options.get( "dir" ) ), this.$container = e, this.$container.addClass( "select2-container--" + this.options.get( "theme" ) ), u.StoreData( e[ 0 ], "element", this.$element ), e
			}, d
		} ), e.define( "select2/compat/utils", ["jquery"], function( s ) {
			return {
				syncCssClasses : function( e, t, n ) {
					var i, r, o = [];
					(i = s.trim( e.attr( "class" ) )) && s( (i = "" + i).split( /\s+/ ) ).each( function() {0 === this.indexOf( "select2-" ) && o.push( this )} ), (i = s.trim( t.attr( "class" ) )) && s( (i = "" + i).split( /\s+/ ) ).each( function() {0 !== this.indexOf( "select2-" ) && null != (r = n( this )) && o.push( r )} ), e.attr( "class", o.join( " " ) )
				}
			}
		} ), e.define( "select2/compat/containerCss", ["jquery", "./utils"], function( s, a ) {
			function l( e ) {return null}

			function e() {}

			return e.prototype.render = function( e ) {
				var t = e.call( this ), n = this.options.get( "containerCssClass" ) || "";
				s.isFunction( n ) && (n = n( this.$element ));
				var i = this.options.get( "adaptContainerCssClass" );
				if ( i = i || l, -1 !== n.indexOf( ":all:" ) ) {
					n = n.replace( ":all:", "" );
					var r = i;
					i = function( e ) {
						var t = r( e );
						return null != t ? t + " " + e : e
					}
				}
				var o = this.options.get( "containerCss" ) || {};
				return s.isFunction( o ) && (o = o( this.$element )), a.syncCssClasses( t, this.$element, i ), t.css( o ), t.addClass( n ), t
			}, e
		} ), e.define( "select2/compat/dropdownCss", ["jquery", "./utils"], function( s, a ) {
			function l( e ) {return null}

			function e() {}

			return e.prototype.render = function( e ) {
				var t = e.call( this ), n = this.options.get( "dropdownCssClass" ) || "";
				s.isFunction( n ) && (n = n( this.$element ));
				var i = this.options.get( "adaptDropdownCssClass" );
				if ( i = i || l, -1 !== n.indexOf( ":all:" ) ) {
					n = n.replace( ":all:", "" );
					var r = i;
					i = function( e ) {
						var t = r( e );
						return null != t ? t + " " + e : e
					}
				}
				var o = this.options.get( "dropdownCss" ) || {};
				return s.isFunction( o ) && (o = o( this.$element )), a.syncCssClasses( t, this.$element, i ), t.css( o ), t.addClass( n ), t
			}, e
		} ), e.define( "select2/compat/initSelection", ["jquery"], function( i ) {
			function e( e, t, n ) {n.get( "debug" ) && window.console && console.warn && console.warn( "Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2" ), this.initSelection = n.get( "initSelection" ), this._isInitialized = !1, e.call( this, t, n )}

			return e.prototype.current = function( e, t ) {
				var n = this;
				this._isInitialized ? e.call( this, t ) : this.initSelection.call( null, this.$element, function( e ) {n._isInitialized = !0, i.isArray( e ) || (e = [e]), t( e )} )
			}, e
		} ), e.define( "select2/compat/inputData", ["jquery", "../utils"], function( s, i ) {
			function e( e, t, n ) {this._currentData = [], this._valueSeparator = n.get( "valueSeparator" ) || ",", "hidden" === t.prop( "type" ) && n.get( "debug" ) && console && console.warn && console.warn( "Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead." ), e.call( this, t, n )}

			return e.prototype.current = function( e, t ) {
				function i( e, t ) {
					var n = [];
					return e.selected || -1 !== s.inArray( e.id, t ) ? (e.selected = !0, n.push( e )) : e.selected = !1, e.children && n.push.apply( n, i( e.children, t ) ), n
				}

				for ( var n = [], r = 0; r < this._currentData.length; r++ ) {
					var o = this._currentData[ r ];
					n.push.apply( n, i( o, this.$element.val().split( this._valueSeparator ) ) )
				}
				t( n )
			}, e.prototype.select = function( e, t ) {
				if ( this.options.get( "multiple" ) ) {
					var n = this.$element.val();
					n += this._valueSeparator + t.id, this.$element.val( n ), this.$element.trigger( "change" )
				} else this.current( function( e ) {s.map( e, function( e ) {e.selected = !1} )} ), this.$element.val( t.id ), this.$element.trigger( "change" )
			}, e.prototype.unselect = function( e, r ) {
				var o = this;
				r.selected = !1, this.current( function( e ) {
					for ( var t = [], n = 0; n < e.length; n++ ) {
						var i = e[ n ];
						r.id != i.id && t.push( i.id )
					}
					o.$element.val( t.join( o._valueSeparator ) ), o.$element.trigger( "change" )
				} )
			}, e.prototype.query = function( e, t, n ) {
				for ( var i = [], r = 0; r < this._currentData.length; r++ ) {
					var o = this._currentData[ r ], s = this.matches( t, o );
					null !== s && i.push( s )
				}
				n( { results : i } )
			}, e.prototype.addOptions = function( e, t ) {
				var n = s.map( t, function( e ) {return i.GetData( e[ 0 ], "data" )} );
				this._currentData.push.apply( this._currentData, n )
			}, e
		} ), e.define( "select2/compat/matcher", ["jquery"], function( s ) {
			return function( o ) {
				return function( e, t ) {
					var n = s.extend( !0, {}, t );
					if ( null == e.term || "" === s.trim( e.term ) ) return n;
					if ( t.children ) {
						for ( var i = t.children.length - 1; 0 <= i; i-- ) {
							var r = t.children[ i ];
							o( e.term, r.text, r ) || n.children.splice( i, 1 )
						}
						if ( 0 < n.children.length ) return n
					}
					return o( e.term, t.text, t ) ? n : null
				}
			}
		} ), e.define( "select2/compat/query", [], function() {
			function e( e, t, n ) {n.get( "debug" ) && window.console && console.warn && console.warn( "Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2." ), e.call( this, t, n )}

			return e.prototype.query = function( e, t, n ) {t.callback = n, this.options.get( "query" ).call( null, t )}, e
		} ), e.define( "select2/dropdown/attachContainer", [], function() {
			function e( e, t, n ) {e.call( this, t, n )}

			return e.prototype.position = function( e, t, n ) {n.find( ".dropdown-wrapper" ).append( t ), t.addClass( "select2-dropdown--below" ), n.addClass( "select2-container--below" )}, e
		} ), e.define( "select2/dropdown/stopPropagation", [], function() {
			function e() {}

			return e.prototype.bind = function( e, t, n ) {
				e.call( this, t, n );
				this.$dropdown.on( ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join( " " ), function( e ) {e.stopPropagation()} )
			}, e
		} ), e.define( "select2/selection/stopPropagation", [], function() {
			function e() {}

			return e.prototype.bind = function( e, t, n ) {
				e.call( this, t, n );
				this.$selection.on( ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join( " " ), function( e ) {e.stopPropagation()} )
			}, e
		} ), l = function( p ) {
			var h, f, e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], t = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], g = Array.prototype.slice;
			if ( p.event.fixHooks ) for ( var n = e.length; n; ) p.event.fixHooks[ e[ --n ] ] = p.event.mouseHooks;
			var m = p.event.special.mousewheel = {
				version : "3.1.12", setup : function() {
					if ( this.addEventListener ) for ( var e = t.length; e; ) this.addEventListener( t[ --e ], i, !1 ); else this.onmousewheel = i;
					p.data( this, "mousewheel-line-height", m.getLineHeight( this ) ), p.data( this, "mousewheel-page-height", m.getPageHeight( this ) )
				}, teardown : function() {
					if ( this.removeEventListener ) for ( var e = t.length; e; ) this.removeEventListener( t[ --e ], i, !1 ); else this.onmousewheel = null;
					p.removeData( this, "mousewheel-line-height" ), p.removeData( this, "mousewheel-page-height" )
				}, getLineHeight : function( e ) {
					var t = p( e ), n = t[ "offsetParent" in p.fn ? "offsetParent" : "parent" ]();
					return n.length || (n = p( "body" )), parseInt( n.css( "fontSize" ), 10 ) || parseInt( t.css( "fontSize" ), 10 ) || 16
				}, getPageHeight : function( e ) {return p( e ).height()}, settings : { adjustOldDeltas : !0, normalizeOffset : !0 }
			};

			function i( e ) {
				var t, n = e || window.event, i = g.call( arguments, 1 ), r = 0, o = 0, s = 0, a = 0, l = 0;
				if ( (e = p.event.fix( n )).type = "mousewheel", "detail" in n && (s = -1 * n.detail), "wheelDelta" in n && (s = n.wheelDelta), "wheelDeltaY" in n && (s = n.wheelDeltaY), "wheelDeltaX" in n && (o = -1 * n.wheelDeltaX), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (o = -1 * s, s = 0), r = 0 === s ? o : s, "deltaY" in n && (r = s = -1 * n.deltaY), "deltaX" in n && (o = n.deltaX, 0 === s && (r = -1 * o)), 0 !== s || 0 !== o ) {
					if ( 1 === n.deltaMode ) {
						var c = p.data( this, "mousewheel-line-height" );
						r *= c, s *= c, o *= c
					} else if ( 2 === n.deltaMode ) {
						var u = p.data( this, "mousewheel-page-height" );
						r *= u, s *= u, o *= u
					}
					if ( t = Math.max( Math.abs( s ), Math.abs( o ) ), (!f || t < f) && y( n, f = t ) && (f /= 40), y( n, t ) && (r /= 40, o /= 40, s /= 40), r = Math[ 1 <= r ? "floor" : "ceil" ]( r / f ), o = Math[ 1 <= o ? "floor" : "ceil" ]( o / f ), s = Math[ 1 <= s ? "floor" : "ceil" ]( s / f ), m.settings.normalizeOffset && this.getBoundingClientRect ) {
						var d = this.getBoundingClientRect();
						a = e.clientX - d.left, l = e.clientY - d.top
					}
					return e.deltaX = o, e.deltaY = s, e.deltaFactor = f, e.offsetX = a, e.offsetY = l, e.deltaMode = 0, i.unshift( e, r, o, s ), h && clearTimeout( h ), h = setTimeout( v, 200 ), (p.event.dispatch || p.event.handle).apply( this, i )
				}
			}

			function v() {f = null}

			function y( e, t ) {return m.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0}

			p.fn.extend( { mousewheel : function( e ) {return e ? this.bind( "mousewheel", e ) : this.trigger( "mousewheel" )}, unmousewheel : function( e ) {return this.unbind( "mousewheel", e )} } )
		}, "function" == typeof e.define && e.define.amd ? e.define( "jquery-mousewheel", ["jquery"], l ) : "object" == typeof exports ? module.exports = l : l( d ), e.define( "jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function( r, e, o, t, s ) {
			if ( null == r.fn.select2 ) {
				var a = ["open", "close", "destroy"];
				r.fn.select2 = function( t ) {
					if ( "object" == typeof (t = t || {}) ) return this.each( function() {
						var e = r.extend( !0, {}, t );
						new o( r( this ), e )
					} ), this;
					if ( "string" != typeof t ) throw new Error( "Invalid arguments for Select2: " + t );
					var n, i = Array.prototype.slice.call( arguments, 1 );
					return this.each( function() {
						var e = s.GetData( this, "select2" );
						null == e && window.console && console.error && console.error( "The select2('" + t + "') method was called on an element that is not using Select2." ), n = e[ t ].apply( e, i )
					} ), -1 < r.inArray( t, a ) ? this : n
				}
			}
			return null == r.fn.select2.defaults && (r.fn.select2.defaults = t), o
		} ), { define : e.define, require : e.require }
	}(), t = e.require( "jquery.select2" );
	return d.fn.select2.amd = e, t
} );